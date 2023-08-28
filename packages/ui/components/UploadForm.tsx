import React, { FormEvent, useRef, useState } from 'react'
import { editVideoInputType, rawVideoInputType } from 'zodTypes';

export const UploadForm: React.FC<{
    propData: (data: rawVideoInputType | editVideoInputType) => void,
    type: React.MutableRefObject<HTMLSelectElement | null>,
    fileRef: React.MutableRefObject<HTMLInputElement | null>,
    client: string
}> =
    ({ propData, client, fileRef, type }) => {
        const thumbnailRef = useRef<HTMLInputElement | null>(null);
        const titleRef = useRef<HTMLInputElement | null>(null);
        const descRef = useRef<HTMLTextAreaElement | null>(null);
        const videoName = useRef<HTMLInputElement | null>(null);
        const deadLineDate = useRef<HTMLInputElement | null>(null);
        const noteToEditor = useRef<HTMLTextAreaElement | null>(null);
        const deadLineTime = useRef<HTMLInputElement | null>(null);
        // const videoRef = useRef<HTMLInputElement | null>(null);
        const [selectedType, setSelectedType] = useState('raw');

        const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedType(event.target.value);
        };

        const [selectedFileName, setSelectedFileName] = useState<string>('No file selected');

        const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const selectedFile = event.target.files?.[0];
            if (selectedFile) {
                setSelectedFileName(selectedFile.name);
            }
        };


        const handleSubmit = (e: FormEvent) => {
            e.preventDefault();
            if (
                titleRef.current !== null &&
                thumbnailRef.current !== null &&
                descRef.current !== null &&
                videoName.current !== null &&
                deadLineDate.current !== null &&
                (noteToEditor.current !== null || selectedType == 'edit') &&
                (selectedType == 'raw' || deadLineTime.current !== null)
                // videoRef.current !== null
            ) {

                if (
                    titleRef.current.value !== null &&
                    thumbnailRef.current.value !== null &&
                    descRef.current.value !== null &&
                    videoName.current.value !== null &&
                    deadLineDate.current.value !== null &&
                    (noteToEditor.current?.value !== null || selectedType == 'edit') &&
                    (selectedType == 'raw' || deadLineTime.current?.value !== null)
                    // videoRef.current.files?.length
                ) {


                    if (selectedType == 'raw') {
                        const data: rawVideoInputType = {
                            title: titleRef.current.value,
                            thumbnail: thumbnailRef.current.value,
                            description: descRef.current.value,
                            videoKey: videoName.current.value,
                            deadLineDate: deadLineDate.current.value,
                            noteToEditor: noteToEditor?.current?.value || '',
                            bucketName: `creator-raw-videos`,
                            contentType: 'video/mp4'
                        };
                        propData(data);
                    } else if (selectedType == 'edit') {
                        const data: editVideoInputType = {
                            title: titleRef.current.value,
                            thumbnail: thumbnailRef.current.value,
                            description: descRef.current.value,
                            videoKey: videoName.current.value,
                            deadLineDate: deadLineDate.current.value,
                            deadLineTime: deadLineTime.current?.value || '12:00',
                            bucketName: `creator-edit-video`,
                            contentType: 'video/mp4'
                        };
                        propData(data);
                    }

                    // fileRef(videoRef /);
                    titleRef.current.value = '';
                    thumbnailRef.current.value = '';
                    descRef.current.value = '';
                    videoName.current.value = '';
                    deadLineDate.current.value = '';
                    if (noteToEditor.current) {
                        noteToEditor.current.value = '';
                    }
                }
            }

        }

        return (
            <>
                <form onSubmit={handleSubmit} className="bg-white w-[700px] p-6 shadow-md flex flex-col gap-y-2 rounded-md">

                    <div className="mb-4">
                        <label htmlFor="videoName" className="block font-medium mb-1">
                            Video Name:
                        </label>
                        <input
                            type="text"
                            id="videoName"
                            name="videoName"
                            ref={videoName}
                            className="w-full p-2 border rounded"
                            required
                            value={client === 'editor' ? '' : ''}
                            readOnly={client === 'editor'}
                        />
                    </div>

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
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block font-medium mb-1">
                            Description:
                        </label>
                        <textarea
                            rows={3}
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
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        {selectedType == 'edit' && <div className="">
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
                            />
                        </div>}
                    </div>

                    {selectedType === 'raw' && <div className="mb-4">
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
                        />

                    </div>}
                    <div className="flex justify-between items-center">

                        <div className="">
                            <input
                                type="file"
                                accept="video/*"
                                id="videoFile"
                                name={`${type}Video`}
                                className="hidden"
                                ref={fileRef}
                                required
                                onChange={handleFileChange} // Add this line
                            />
                            <label
                                htmlFor="videoFile"
                                className="cursor-pointer block bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 duration-300 w-fit hover:scale-105 active:scale-95 transition-all"
                            >
                                {selectedFileName} {/* Display the selected file name */}
                            </label>

                        </div>
                        <div className="flex gap-x-3 items-center">
                            <label htmlFor="type" className="block font-medium mb-1">
                                Type:
                            </label>
                            <select
                                id="type"
                                name="type"
                                ref={type}
                                onChange={handleTypeChange}
                                className="w-48 p-2 border rounded"
                                required
                                defaultValue={'raw'}
                            >
                                <option value="raw">Raw</option>
                                <option value="edit">Edited</option>
                            </select>
                        </div>

                        <div className="">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 duration-300 w-fit hover:scale-105 active:scale-95 transition-all"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </>
        )
    }


