import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ChatBox, EditorSelect, UpdateForm, VideoCard } from 'ui';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { allRawVideo, creatorIdAtom, legersAtom } from 'store';
import { toast } from 'react-hot-toast';
import { EditorType, RawVideoType, UpdateVideoType, fetchVideoReqType, legerInType, legerType, rawVideo } from 'zodTypes';
import { GetServerSidePropsContext } from 'next/types';
import axios from 'axios';
import cookie from 'cookie';
import Protection from '../../../../utils/protection';


const VideoPage: React.FC<{ leger: legerType }> = ({ leger }) => {
  const [localVideo, setVideo] = useState<RawVideoType>();
  const [editors, setEditors] = useState<EditorType[]>();
  const router = useRouter();
  const creatorId = useRecoilValue(creatorIdAtom);
  const setAllRawVideos = useSetRecoilState(allRawVideo);
  const setLegers = useSetRecoilState(legersAtom);
  const [isSelected, setSelected] = useState<boolean>(false);

  useEffect(() => {
    if (!leger) {
      toast.error('Server Error');
      router.back();
    } if (leger) {
      if(leger.editor) {
        setSelected(true);
      } else {
        setSelected(false)
      }
      setVideo(leger.rawVideo);
      setEditors(leger.editors);
    }
  }, []);

  const handleUpdate = (data: UpdateVideoType) => {
    axios({
      baseURL: 'http://ec2-100-25-221-96.compute-1.amazonaws.com:3000/api',
      url: '/video/update',
      method: 'PUT',
      headers: {
        'Authorization': sessionStorage.getItem('creatorToken'),
        'Content-Type': 'application/json',
        'type': 'raw',
        'videoKey': localVideo.videoKey,
        'bucketName': localVideo.bucketName
      },
      data: data
    }).then(response => {

      setAllRawVideos(pre => {
        let prev = pre.find(c => c.videoKey == localVideo.videoKey);
        prev = { ...prev, ...data };
        return pre;
      });

      setVideo(prevVideo => {
        return { ...prevVideo, ...data }
      });

      toast.success(response.data.message);

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

    });
  }


  const removeFromLeger = () => {
    axios({
      baseURL: 'http://ec2-100-25-221-96.compute-1.amazonaws.com:3000/api',
      url: '/video/delete',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem('creatorToken'),
        'videoKey': localVideo.videoKey,
        'type': 'raw',
        'bucketname': localVideo.bucketName
      }
    }).then(response => {

      setAllRawVideos(rvs => rvs.filter(rv => rv._id != localVideo._id));
      setLegers(lgs => lgs.filter(lg => lg.rawVideo._id != localVideo._id));
      toast.success(response.data.message);
      router.push('/videos/raw')

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
      console.log(err);

    })
  }

  const handleSelect = (value: string) => {

    const answer = prompt(`Type ${value.slice(value.length - 6)} to continue!`);
    if (answer == value.slice(value.length - 6)) {
      axios({
        baseURL: 'http://ec2-100-25-221-96.compute-1.amazonaws.com:3000/api',
        url: '/video/addEditor',
        method: 'PUT',
        headers: {
          'Authorization': sessionStorage.getItem('creatorToken'),
          'Content-Type': 'application/json'
        },
        data: {
          videoId: localVideo._id,
          editor: value
        }
      }).then(response => {
        toast.success('Editor Added Successfully');

        setSelected(true);

        setAllRawVideos(rvs => {
          const rv = rvs.find(r => r._id == localVideo._id);
          rv.editor = response.data.editor;
          return rvs;
        });
        
        setVideo(vid => {
          vid.editor = response.data.editor;
          return vid;
        });
        router.push('/video/raw');

        setLegers(ls => {
          const l = ls.find(de => de.rawVideo._id == localVideo._id);
          l.editor = response.data.editor;
          l.rawVideo.editor = response.data.editor;
          return ls;
        });


      }).catch(err => {

        if (err) {
          if (err.response && (err.response.status == 403)) {
            toast.error(err.response.data.message);
            sessionStorage.clear()
            router.push('/login');
          } 
        } else if (err.response) {
          toast.error(err.response.data.message);
        }
        console.error(err);

      });
    }
  }

  return (
    <>

      <div className="h-full  bg-gray-100 flex justify-around py-6">
        {leger && localVideo && <VideoCard video={localVideo} type='raw' clientId={creatorId} client='creator' onDelete={removeFromLeger} page='video' />}
        <div className="flex flex-col gap-y-8">

          {localVideo && <UpdateForm client='creator' video={localVideo} type='raw' propData={handleUpdate} />}
          {!localVideo?.editor && editors && <EditorSelect isSelected={isSelected} editors={editors} onSelect={handleSelect} />}
          {/* {localVideo && localVideo.editor && <div className="">
            <h1 className="">Chat with the editor</h1>
            <ChatBox url={'http://ec2-100-25-221-96.compute-1.amazonaws.com:3000/api/chat/ws'} editorId={localVideo.editor._id} creatorId={localVideo.creator._id} token={sessionStorage.getItem("creatorToken")} />
          </div> } */}
        </div>
      </div>

    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { videoId } = context.params;
  const { BASEURL } = process.env;

  const cookies = context.req.headers.cookie;
  const parsedCookies = cookie.parse(cookies || '');
  const token = parsedCookies.creatorToken;

  const data: fetchVideoReqType = {
    videoId: videoId as string,
    type: 'raw'
  }

  try {
    const response = await axios({
      baseURL: BASEURL,
      url: '/video/fetchVideo',
      method: 'POST',
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    });


    return {
      props: {
        leger: response.data.video
      }
    }

  } catch (error) {
    console.error(error)
    return {
      props: {
        leger: null
      }
    }
  }


}

export default Protection(VideoPage);