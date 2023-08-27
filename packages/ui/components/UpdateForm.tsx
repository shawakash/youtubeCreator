import React, { FormEvent, useRef, useState } from 'react'
import { EditVideoType, RawVideoType, UpdateVideoType, editVideoInputType, rawVideoInputType } from 'zodTypes';



export const UpdateForm: React.FC<{
    propData: (data: UpdateVideoType) => void,
    type: string,
    video: RawVideoType & EditVideoType
}> = ({ propData, type, video }) => {

    const thumbnailRef = useRef<HTMLInputElement | null>(null);
    const titleRef = useRef<HTMLInputElement | null>(null);
    const descRef = useRef<HTMLTextAreaElement | null>(null);
    const deadLineDate = useRef<HTMLInputElement | null>(null);
    const noteToEditor = useRef<HTMLTextAreaElement | null>(null);
    const deadLineTime = useRef<HTMLInputElement | null>(null);



    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('hello')
        if (
            titleRef.current !== null &&
            thumbnailRef.current !== null &&
            descRef.current !== null &&
            deadLineDate.current !== null &&
            (noteToEditor.current !== null || type == 'edit') &&
            (type == 'raw' || deadLineTime.current !== null)
            // videoRef.current !== null
        ) {

            if (
                titleRef.current.value !== null &&
                thumbnailRef.current.value !== null &&
                descRef.current.value !== null &&
                deadLineDate.current.value !== null &&
                (noteToEditor.current?.value !== null || type == 'edit') &&
                (type == 'raw' || deadLineTime.current?.value !== null)
                // videoRef.current.files?.length
            ) {

                console.log(typeof deadLineDate.current.value);

                if (type == 'raw') {
                    const data: UpdateVideoType = {
                        title: titleRef.current.value,
                        thumbnail: thumbnailRef.current.value,
                        description: descRef.current.value,
                        deadLineDate: deadLineDate.current.value,
                        noteToEditor: noteToEditor?.current?.value || '',
                    };
                    propData(data);
                } else if (type == 'edit') {
                    const data: UpdateVideoType = {
                        title: titleRef.current.value,
                        thumbnail: thumbnailRef.current.value,
                        description: descRef.current.value,
                        deadLineDate: deadLineDate.current.value,
                        deadLineTime: deadLineTime.current?.value,
                    };
                    propData(data);
                }

            }
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit} className="bg-white hover:shadow-2xl transition-all duration-500 w-[700px] p-6 shadow-md flex flex-col gap-y-2 rounded-md">
            <h1 className='font-semibold font-sans bg-gradient-to-tr text-transparent bg-clip-text from-purple-600 to-blue-300 text-[30px] my-2'>Update Credentials</h1>


                <div className="mb-4">
                    <label htmlFor="thumbnail" className="block font-medium mb-1">
                        Thumbnail:
                    </label>
                    <input
                        type="text"
                        id="thumbnail"
                        name="thumbnail"
                        ref={thumbnailRef}
                        className="w-full p-2 border rounded"
                        required
                        defaultValue={video.thumbnail}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="title" className="block font-medium mb-1">
                        Title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        ref={titleRef}
                        className="w-full p-2 border rounded"
                        required
                        defaultValue={video.title}
                        />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block font-medium mb-1">
                        Description:
                    </label>
                    <textarea
                        rows={3}
                        defaultValue={video.description}
                        id="description"
                        name="description"
                        ref={descRef}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div className="flex items-center justify-between">

                    <div className="">
                        <label htmlFor="deadLineDate" className="block font-medium mb-1">
                            DeadLine Date:
                        </label>
                        <input
                            type="date"
                            id="deadLineDate"
                            name="deadLineDate"
                            ref={deadLineDate}
                            defaultValue={video.deadLineDate}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    {type == 'edit' && <div className="">
                        <label htmlFor="timeInput">When To Upload:</label>
                        <input
                            type="time"
                            id="timeInput"
                            name="timeInput"
                            value="12:00"
                            min="00:00"
                            max="23:59"
                            step="300"
                            ref={deadLineTime}
                            defaultValue={video.deadLineTime}
                        />
                    </div>}
                </div>

                {type === 'raw' && <div className="mb-4">
                    <label htmlFor="note" className="block font-medium mb-1">
                        Note For Editor:
                    </label>
                    <textarea
                        rows={3}
                        id="note"
                        name="note"
                        ref={noteToEditor}
                        className="w-full p-2 border rounded"
                        required
                        defaultValue={video.noteToEditor}
                    />

                </div>}


                <div className="">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 duration-300 w-fit hover:scale-105 active:scale-95 transition-all"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}


