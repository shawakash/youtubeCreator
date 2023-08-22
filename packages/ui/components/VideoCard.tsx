import React from 'react';
import { RawVideoType } from 'zodTypes';

export const VideoCard: React.FC<{ video: RawVideoType, type: string }> = ({ video, type = 'raw' }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
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
        {/* <p>Uploader: {video.creator}</p> */}
        {/* <p>Editor: {video.editor}</p> */}
        {/* Display other attributes as needed */}
        {type === 'raw' && <p>Status: {video.isUploaded ? 'Uploaded' : video.isEdited ? 'Edited' : 'Not Edited'}</p>
        }
        </div>
        { type==='edit' && <p>Status: {video.isUploaded ? 'Uploaded' : 'Not Uploaded'}</p>}
    </div>
  );
};

