import Link from 'next/link';
import React from 'react';
import { RawVideoType } from 'zodTypes';

export const VideoCard: React.FC<{ video: RawVideoType, type: string, clientId: string }> = ({ video, type = 'raw', clientId }) => {
  return (
    <Link href={`/videos/${type}/${video._id}`}>
      <div className="bg-white rounded-xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <div className="relative">
          <div className="aspect-w-16 aspect-h-9">
            <video className="w-[400px]" controls>
              <source src={video.url} type={video.contentType} />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
          <p className="text-gray-600">{video.description}</p>
          {/* Additional attributes can be displayed here */}
          {<p className='text-blue-500' >Uploader: {clientId == video.creator._id ? 'You' : (video.creator.name).charAt(0).toUpperCase() + video.creator.name.slice(1)}</p>}
          {<p className='text-blue-500' >Editor: {clientId == video.editor?._id && video.editor ? 'You' : (video.editor?.name)?.charAt(0).toUpperCase() + video.editor?.name?.slice(1) || 'Nill'}</p>}
          {/* Display other attributes as needed */}
          {type === 'raw' && <p>Status: {video.isUploaded ? 'Uploaded' : video.isEdited ? 'Edited' : 'Not Edited'}</p>
          }
        </div>
        {type === 'edit' && <p>Status: {video.isUploaded ? 'Uploaded' : 'Not Uploaded'}</p>}
      </div>
    </Link>
  );
};

