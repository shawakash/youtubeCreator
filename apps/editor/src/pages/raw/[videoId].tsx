import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Video } from 'ui';
import { useRecoilState } from 'recoil';
import { allRawVideoEditor } from 'store';
import { toast } from 'react-hot-toast';
import { RawVideoType } from 'zodTypes';

const VideoPage = () => {
  const [video, setVideo] = useState<RawVideoType>();
  const router = useRouter();
  const { videoId } = router.query;
  const [rawVideos, setRawVideos] = useRecoilState<RawVideoType[]>(allRawVideoEditor);

  useEffect(() => {
    if(videoId) {
      const video = rawVideos.find(raw => raw._id == videoId);
      if(!video) {
        toast.error('Server Error');
        router.back();
      } if(video) {
        setVideo(video);
      }
    }
  }, [])

  return (
    <>
    <div className="h-screen bg-gray-100 flex justify-around items-center">

      {video && <Video video={video} type={'raw'} />}
    </div>
    </>
  )
}

export default VideoPage