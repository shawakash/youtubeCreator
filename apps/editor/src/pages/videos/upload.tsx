import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useSetRecoilState } from 'recoil';
import { allEditVideo, allRawVideo } from 'store';
import { editVideoInputType, rawVideoInputType } from 'zodTypes';
import protection from '../../../utils/protection';
import { FileUpload } from 'primereact/fileupload';
import { UploadForm } from 'ui';



const VideoUploader = () => {
    const video = useRef<HTMLInputElement | null>(null);
    const type = useRef<HTMLSelectElement | null>(null);
    const setAllEditVideos = useSetRecoilState(allEditVideo);
    const router = useRouter();

    const { BASEURL, AWS_RAW_VIDEO_BUCKET_NAME } = process.env;


    const handleUpload = async (data: editVideoInputType) => {


        let selectedVideo = video.current;



        if (selectedVideo) {

            const currentDate = new Date().toISOString().replace(/[-:.]/g, '');
            const key = `${data.videoKey}-${currentDate}`;
            data.videoKey = key;

            axios({
                baseURL: BASEURL || 'http://localhost:3000/api',
                url: '/video/getPutSignedUrl',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': sessionStorage.getItem('editorToken'),
                    'key': key,
                    'bucketname': data.bucketName
                }
            })
                .then(response => {

                    if (response.status == 200) {
                        axios({
                            url: response.data.presignedUrl,
                            method: 'PUT',
                            data: selectedVideo.files[0],
                            headers: {
                                'Content-Type': selectedVideo.type,
                            },
                        }).then(response => {

                            if (response.status == 200) {

                                axios({
                                    baseURL: BASEURL || 'http://localhost:3000/api',
                                    url: `/video/addEditCredential`,
                                    method: 'POST',
                                    data: data,
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Authorization': sessionStorage.getItem('editorToken'),
                                    }
                                }).then(response => {
                                    if (response.status == 200) {

                                        setAllEditVideos(pre => [...pre, { ...data, creator: response.data.creator, editor: response.data.editor, isUploaded: false, isEdited: true }]);
                                        toast.success(response.data.message);
                                        router.push('/videos/edit');
                                    }
                                }).catch(err => {
                                    if (err) {
                                        if (err.response && (err.response.status == 403)) {
                                            toast.error(err.response.data.message);
                                            sessionStorage.clear()
                                            router.push('/login');
                                        } else if (err.response.status == 401) {
                                            toast.error('Please first allow us your youtube access');
                                            router.push('/auth')
                                        }
                                    } else if (err.response) {
                                        toast.error(err.response.data.message);
                                    }
                                    console.log(err)
                                })
                            }

                        }).catch(err => {
                            if (err) {
                                if (err.response && (err.response.status == 403 || err.response.status == 401)) {
                                    toast.error(err.response.data.message);
                                    sessionStorage.clear()
                                    router.push('/login');
                                }
                            } else if (err.response) {
                                toast.error(err.response.data.message);
                            }
                            console.log(err)
                        })
                    }

                })
                .catch(err => {
                    if (err) {
                        if (err.response && (err.response.status == 403 || err.response.status == 401)) {
                            toast.error(err.response.data.message);
                            sessionStorage.clear()
                            router.push('/login');
                        }
                    } else if (err.response) {
                        toast.error(err.response.data.message);
                    }
                    console.log(err)
                })

        } else {
            console.warn('No video selected for upload.');
        }
    };




    return (
        <>
            <div className="h-screen bg-gray-100 flex justify-center items-center">
                <UploadForm propData={handleUpload} type={type} fileRef={video} client='editor' />
            </div>
        </>
    );
};

export default protection(VideoUploader);
