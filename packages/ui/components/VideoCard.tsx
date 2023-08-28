import Link from 'next/link';
import React from 'react';
import { EditVideoType, RawVideoType } from 'zodTypes';
import { Title } from './Title';

export const VideoCard: React.FC<{ 
  video: RawVideoType | EditVideoType, 
  type: string, 
  clientId: string, 
  client: string, 
  onDelete?: () => void,
  page?: string }> = ({ 
    video, 
    type = 'raw', 
    clientId, 
    client, 
    page = 'card', onDelete }) => {

  const renderedComponent = () => {
    return (
      <>
        <div className={`bg-white ${page === 'card' ? 'w-[500px]' : "max-w-[800px] min-w-[600px]"} rounded-xl flex flex-col gap-y-1 shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
          <div className="relative z-0">
            <div className="aspect-w-16 aspect-h-9">
              <video className={`${page === 'card' ? 'w-[500px]' : "max-w-[800px] min-w-[600px]"}`} controls>
                <source src={video.url} type={video.contentType} />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-y-2">
            <Title title={video.title} />
            <div className="">
              <p className="text-lg font-medium">{client == 'creator' ? 'Video Description: ' : 'Note To Editor: '}</p>
              <p className={`text-gray-600 ${page === 'card' ? 'line-clamp-3' : ''}`}>{(client == 'creator' && type == 'edit') ? video.description : video.noteToEditor}</p>
            </div>
              {page !== 'card' && <div className="">
              <p className="text-lg font-medium">Note To Editor: </p>
              <p className={`text-gray-600 `}>{video.noteToEditor}</p>
            </div>}

            {/* Additional attributes can be displayed here */}
            {<p className='text-blue-500 text-lg' >Uploader: {clientId == video.creator._id ? 'You' : (video.creator?.name)?.charAt(0).toUpperCase() + video.creator?.name?.slice(1)}</p>}
            {<p className={`text-${video.editor != null ? 'blue' : 'red'}-500`} >Editor: {clientId == video.editor?._id && video.editor ? 'You' : (video.editor?.name)?.charAt(0).toUpperCase() + video.editor?.name?.slice(1) || 'None'}</p>}

            {/* Display other attributes as needed */}
            {type === 'raw' && <p className={video.isUploaded ? `text-blue-500` : `text-red-500`}>Status: {video.isUploaded ? 'Uploaded' : video.isEdited ? 'Edited' : 'Not Edited'}</p>
            }
            {<p className='text-gray-600'>DeadLine:  <span className="text-red-500">{video.deadLineDate}</span></p>}
            {type === 'edit' && <p className={video.isUploaded ? `text-blue-500` : `text-red-500`}>Status: {video.isUploaded ? 'Uploaded' : 'Not Uploaded'}</p>}
            {client === 'creator' && page === 'video' && <button onClick={onDelete} className="w-fit bg-blue-500 text-white py-2 px-4 rounded-2xl mt-1 hover:bg-blue-600 hover:scale-105 active:scale-90 transition-all">Delete Video</button> }
          </div>
        </div>
      </>
    );
  }
  return (
    <>
    {page === 'card' ? (
      <Link href={`/videos/${type}/${video._id}`}>
        {renderedComponent()}
      </Link>
    ) : (
      renderedComponent()
    )}
  </>
  );
};

