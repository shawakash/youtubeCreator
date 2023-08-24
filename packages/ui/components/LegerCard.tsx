import Link from 'next/link';
import React from 'react'
import { legerType } from 'zodTypes'

export const LegerCard: React.FC<{ leger: legerType, clientId: string }> = ({ leger, clientId }) => {
    const hasEditors = leger.editor;
    const video = leger.rawVideo;

    const handleClick = () => {
        const mailtoLink = `mailto:${leger.creator.email}`;
        window.location.href = mailtoLink;
      };

    return (
        <>
                <div className="bg-white w-fit shadow-lg  gap-y-2 flex flex-col hover:shadow-2xl transition-all rounded-2xl">
                    <div className="bg-white rounded-t-xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden">
                        <div className="relative">
                            <div className="aspect-w-16 aspect-h-9">
                                <video className="w-[400px]" controls>
                                    <source src={video.url} type={video.contentType} />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
            <Link href={`/videos/raw/${video._id}`}>
                    <div className="px-4">
                        <h3 className="text-lg font-semibold">{leger.rawVideo.title}</h3>
                        <p className="text-gray-500">{leger.rawVideo.description}</p>
                    </div>
            </Link>
                    <div className="px-4">
                        <button className="text-blue-500 cursor-pointer transition-all hover:scale-105 active:scale-95" onClick={handleClick}>
                            Creator: {leger.creator.name} (@{leger.creator.username})
                        </button>
                    </div>
                    <div className='px-4 mb-4'>
                        <p className={hasEditors ? 'text-green-600' : 'text-red-600'}>
                            {hasEditors ? clientId == leger.rawVideo.editor._id ? 'You' : 'Editor Assigned' : 'No Editor Assigned'}
                        </p>
                    </div>
                </div>
        </>
    )
}
