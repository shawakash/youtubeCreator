import React, { useEffect } from 'react';
import { EditVideoType, RawVideoType } from 'zodTypes';

export const Video: React.FC<{
  video: RawVideoType | EditVideoType,
  type: string,
  addToLeger: () => void,
  removeFromLeger: () => void,
  hasApplied: boolean
}> = ({
  video,
  type = 'raw',
  addToLeger,
  removeFromLeger,
  hasApplied
}) => {

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
          <div className="flex flex-col w-[600px] gap-y-3 rounded-2xl">
            <video controls className="w-full mt-rounded-2xl ">
              <source src={video.url} className='w-[600px]' type={video.contentType} />
              Your browser does not support the video tag.
            </video>
            <div className="p-5 flex flex-col gap-y-2">

              <h2 className="text-xl font-semibold">{video.title}</h2>
              <p className="text-gray-600">{video.description}</p>
              <p className="text-blue-500 text-lg">
                Uploaded by: {video.creator.name.charAt(0).toUpperCase() + video.creator.name.slice(1)}
              </p>
              {!hasApplied && <button onClick={addToLeger} className="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 duration-300 w-fit hover:scale-105 active:scale-95 transition-all">Add to Leger</button>}
              {hasApplied && <button onClick={removeFromLeger} className="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 duration-300 w-fit hover:scale-105 active:scale-95 transition-all">Remove from Leger</button>}
            </div>
          </div>
        </div>}
      </>
    )
  }

