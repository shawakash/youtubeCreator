import React, { FormEvent, useRef, useState } from 'react'
import { EditVideoType, RawVideoType, UpdateVideoType, UploadVideoType, editVideoInputType, rawVideoInputType } from 'zodTypes';
import { CategorySelect } from './CategoryIdSelect';
import PrivacyStatusSelect from './PrivacySelect';
import moment from "moment-timezone";



export const UpdateForm: React.FC<{
    propData: (data: UpdateVideoType | editVideoInputType) => void,
    type: string,
    video: RawVideoType & EditVideoType,
    fileRef?: React.MutableRefObject<HTMLInputElement | null>,
    client?: string,
    propUpload?: (data: UploadVideoType) => void,
}> = ({ propData, type, video, fileRef, client = 'editor', propUpload }) => {

    const thumbnailRef = useRef<HTMLInputElement | null>(null);
    const titleRef = useRef<HTMLInputElement | null>(null);
    const descRef = useRef<HTMLTextAreaElement | null>(null);
    const deadLineDate = useRef<HTMLInputElement | null>(null);
    const noteToEditor = useRef<HTMLTextAreaElement | null>(null);
    const deadLineTime = useRef<HTMLInputElement | null>(null);
    const tagsRef =  useRef<HTMLInputElement | null>(null);


    const [selectedFileName, setSelectedFileName] = useState<string>('No file selected');
    const [selectedPrivacyStatus, setSelectedPrivacyStatus] = useState('public');
    const [selectedCategory, setSelectedCategory] = useState('22');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setSelectedFileName(selectedFile.name);
        }
    };


    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        // You can use the selected category in your component state or send it to an API, as needed.
    };


    const handlePrivacyStatusChange = (privacyStatus: string) => {
        setSelectedPrivacyStatus(privacyStatus);
    };




    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
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
                } else if (type == 'assigned') {
                    const data: editVideoInputType = {
                        title: titleRef.current.value,
                        thumbnail: thumbnailRef.current.value,
                        description: descRef.current.value,
                        deadLineDate: deadLineDate.current.value,
                        deadLineTime: deadLineTime.current?.value || '12:00',
                        videoKey: video.videoKey,
                        bucketName: 'creator-edit-video',
                        contentType: 'video/mp4'
                    };
                    propData(data);
                }

            }
        }

    }

    function convertToYouTubeUTC(localDate: string, localTime: string) {
        const localDateTime = `${localDate} ${localTime}`;
        const localTimezone = moment.tz.guess(); // Guess the local timezone
        
        // Convert local time to UTC
        const utcTime = moment.tz(localDateTime, localTimezone).utc().format('YYYY-MM-DDTHH:mm:ss') + 'Z';
        
        return utcTime;
      }
      

    const handleUpload = () => {
        if (
            titleRef.current !== null &&
            thumbnailRef.current !== null &&
            descRef.current !== null &&
            deadLineDate.current !== null &&
            deadLineTime.current !== null &&
            selectedPrivacyStatus !== ''  &&
            selectedCategory !== '' &&
            tagsRef.current !== null
        ) {

            if (
                titleRef.current.value !== null &&
                thumbnailRef.current.value !== null &&
                descRef.current.value !== null &&
                deadLineDate.current.value !== null &&
                selectedPrivacyStatus.length > 0 && 
                selectedCategory.length > 0 && 
                tagsRef.current?.value !== null

            ) {
                const publishAt = convertToYouTubeUTC(deadLineDate.current.value || video.deadLineDate, deadLineTime.current.value || video.deadLineTime);
                let data: UploadVideoType;
                if(selectedPrivacyStatus == 'private') {
                    data = {
                        title: titleRef.current.value,
                        thumbnail: thumbnailRef.current.value,
                        publishAt,
                        privacy: selectedPrivacyStatus,
                        category: selectedCategory,
                        description: descRef.current.value,
                        videoKey: video.videoKey,
                        bucketName: video.bucketName,
                        tags: tagsRef.current.value.split(',')
                    };
                    if (propUpload) {
                        propUpload(data);
                    }

                } else if(selectedPrivacyStatus == 'public') {
                    data = {
                        title: titleRef.current.value,
                        thumbnail: thumbnailRef.current.value,
                        privacy: selectedPrivacyStatus,
                        category: selectedCategory,
                        description: descRef.current.value,
                        videoKey: video.videoKey,
                        bucketName: video.bucketName,
                        tags: tagsRef.current.value.split(',')
                    };
                    if (propUpload) {
                        propUpload(data);
                    }
                }

                
            }
        }
    }

    return (
        <>
            <div  className="bg-white hover:shadow-2xl transition-all duration-500 w-[700px] p-6 shadow-md flex flex-col gap-y-2 rounded-md">
                <h1 className='font-semibold font-sans bg-gradient-to-tr text-transparent bg-clip-text from-purple-600 to-blue-300 text-[30px] my-2'>Video Credentials</h1>


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
                        readOnly={video.isUploaded}
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
                        readOnly={video.isUploaded}
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
                        placeholder={'HTML tags accepted'}
                        ref={descRef}
                        readOnly={video.isUploaded}
                        className="w-full p-2 border rounded"
                        required
                    />

                </div>

                {type == 'edit' &&
                    <div className="mb-4">
                        <label htmlFor="tags" className="block font-medium mb-1">
                            Video Tags:
                        </label>
                        <input
                            id="tags"
                            name="tags"
                            ref={tagsRef}
                            readOnly={video.isUploaded}
                            className="w-full p-2 border rounded"
                            placeholder={`Multiple Tags seperated by comma(,)`}
                        />
                    </div>}

                {type == 'edit' &&
                    <div className="flex justify-between items-center gap-x-4">
                        <div className="mb-4 w-2/5">
                            <CategorySelect selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
                        </div>
                        <div className="mb-4 w-2/5">
                            <PrivacyStatusSelect
                                selectedPrivacyStatus={selectedPrivacyStatus}
                                onPrivacyStatusChange={handlePrivacyStatusChange}
                            />
                        </div>
                    </div>
                }

                <div className="flex items-center justify-between mb-4">

                    <div className="">
                        <label htmlFor="deadLineDate" className="block font-medium mb-1">
                            {type == 'edit' ? 'Publish At' : 'DeadLine Date:'}
                        </label>
                        <input
                            type="date"
                            id="deadLineDate"
                            name="deadLineDate"
                            ref={deadLineDate}
                            readOnly={video.isUploaded}
                            defaultValue={video.deadLineDate}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    {(type == 'edit' || type == 'assigned') && <div className="">
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
                            readOnly={video.isUploaded}
                            defaultValue={video.deadLineTime}
                        />
                    </div>}
                </div>

                {(type === 'raw' || type == 'assigned') && <div className="mb-4">
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
                        readOnly
                        defaultValue={video.noteToEditor}
                    />

                </div>}

                <div className="flex justify-between items-center">


                    {(type == 'assigned') &&
                        <div className="flex justify-between gap-x-4 items-center">
                            <div className="block font-medium mb-1">
                                Edited Video:
                            </div>
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
                    }

                    <div className="">
                        <button
                            onClick={handleSubmit}
                            className="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 duration-300 w-fit hover:scale-105 active:scale-95 transition-all"
                        >
                            Update Credentials
                        </button>
                    </div>
                    {client == 'creator' && type == 'edit' && <button
                        onClick={handleUpload}
                        className="w-fit bg-blue-500 text-white py-2 px-4 rounded-2xl hover:bg-blue-600 hover:scale-105 active:scale-90 transition-all"
                    >
                        Upload To Youtube
                    </button>}
                </div>

            </div>
        </>
    )
}


