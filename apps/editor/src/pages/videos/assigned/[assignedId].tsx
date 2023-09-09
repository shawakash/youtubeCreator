import React, { useEffect, useState, useRef } from 'react'
import protection from '../../../../utils/protection'
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { assignedVideosAtom, editorEditedVideos, editorIdAtom } from 'store';
import { UpdateForm, VideoCard } from 'ui';
import { EditVideoType, RawVideoType, UpdateVideoType, editVideoInputType, legerType } from 'zodTypes';
import { GetServerSidePropsContext } from 'next';
import cookie from 'cookie';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const AssignedId: React.FC<{ video: RawVideoType }> = ({ video }) => {
  const router = useRouter();
  const { assignedId } = router.query;
  const [uploaded, setUploaded] = useState<Boolean>();
  const [localVideo, setVideo] = useState<RawVideoType>();
  const [assignedVideos, setAssignedVideos] = useRecoilState(assignedVideosAtom);
  const editorId = useRecoilValue(editorIdAtom);
  const editVideo = useRef<HTMLInputElement | null>(null);
  const { NEXT_PUBLIC_BASEURL } = process.env;
  const setAllEditVideos = useSetRecoilState(editorEditedVideos);

  useEffect(() => {
    if (!video) {
      toast.error('Server Error');
      router.back();
    }
    if (video) {
      setVideo(video);
      setUploaded(video.isUploaded);
    }
  }, []);

  const handleSubmit = (data: editVideoInputType) => {
    const selectedFile = editVideo.current;
    if (selectedFile) {
      axios({
        baseURL: 'http://localhost:3001/api',
        url: '/video/getPutSignedUrl',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': sessionStorage.getItem('editorToken'),
          'key': data.videoKey,
          'bucketname': 'creator-edit-video'
        }
      }).then(response => {

        if (response.status == 200) {
          axios({
            url: response.data.presignedUrl,
            method: 'PUT',
            data: selectedFile.files[0],
            headers: {
              'Content-Type': selectedFile.type,
            },
          }).then(response => {

            if (response.status == 200) {


              axios({
                baseURL: 'http://localhost:3001/api',
                url: `/video/addEditVideo`,
                method: 'POST',
                data: data,
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': sessionStorage.getItem('editorToken'),
                }
              }).then(response => {
                if (response.status == 200) {

                  setAllEditVideos(pre => [...pre, response.data.video]);
                  toast.success(response.data.message);
                  router.push('/videos/edit');
                }
              }).catch(err => {
                if (err) {
                  if (err.response && (err.response.status == 403)) {
                    toast.error(err.response.data.message);
                    sessionStorage.clear()
                    router.push('/login');
                  } else if (err.response.status == 401) {
                    toast.error('Please first allow us your youtube access');
                    router.push('/auth')
                  }
                } else if (err.response) {
                  toast.error(err.response.data.message);
                }
                console.log(err)
              })
            }

          }).catch(err => {
            if (err) {
              if (err.response && (err.response.status == 403 || err.response.status == 401)) {
                toast.error(err.response.data.message);
                sessionStorage.clear()
                router.push('/login');
              }
            } else if (err.response) {
              toast.error(err.response.data.message);
            }
            console.log(err)
          })
        }

      }).catch(err => {
        if (err) {
          if (err.response && (err.response.status == 403 || err.response.status == 401)) {
            toast.error(err.response.data.message);
          }
        } else if (err.response) {
          toast.error('Video Uploading Error, Aws')
          toast.error(err.response.data.message);
        }
        console.log(err)

      })
    }

  }

  return (
    <>
      <div className="h-full  bg-gray-100 flex justify-around py-6">
        {localVideo && <VideoCard video={localVideo} type='raw' clientId={editorId} client='editor' page='video' />}
        <div className="flex flex-col gap-y-8">

          {localVideo && <UpdateForm video={localVideo} fileRef={editVideo} type='assigned' propData={handleSubmit} />}

        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { assignedId } = context.params;
  const { BASEURL } = process.env;

  const cookies = context.req.headers.cookie;
  const parsedCookies = cookie.parse(cookies || '');
  const token = parsedCookies.editorToken;

  try {

    const response = await axios({
      baseURL: BASEURL,
      url: '/video/getAssignedVideo',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
        'videoId': assignedId
      }
    });
    return {
      props: {
        video: response.data.video
      }
    }

  } catch (error) {
    console.log(error);
    return {
      props: {
        video: {}
      }
    }
  }
}

export default protection(AssignedId)