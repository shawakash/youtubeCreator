import React, { useEffect } from 'react';
import { EditVideoType, RawVideoType } from 'zodTypes';

export const Video: React.FC<{ video: RawVideoType | EditVideoType, type: string }> = ({ video , type='raw'}) => {

  useEffect(() => {

  }, [])

  return (
    <>
      {video && <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* <div className="relative">
          <img src={video.thumbnail} alt="Thumbnail" className="w-full" />
          <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-2">
            {video.title}
          </div>
        </div> */}
        <div className="p-4">
          <h2 className="text-xl font-semibold">{video.title}</h2>
          <video controls className="w-full mt-4">
            <source src={video.url} className='w-[600px]' type={video.contentType} />
            Your browser does not support the video tag.
          </video>
          <p className="text-gray-600">{video.description}</p>
          <p className="text-gray-500 mt-2">
            Uploaded by: {video.creator.name}
          </p>
        </div>
      </div>}
    </>
  )
}