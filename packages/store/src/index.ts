import { atom } from "recoil";


export const creatorIdAtom = atom({
    key: 'creatorIdAtom',
    default: null
});

export const editorIdAtom = atom({
    key: 'editorIdAtom',
    default: null
})

export const allRawVideo = atom({
    key: 'allRawVideo',
    default: []
});

export const allRawVideoEditor = atom({
    key: 'allRawVideoEditor',
    default: []
});

export const allEditVideo = atom({
    key: 'allEditVideo',
    default: []
});

export const editorEditedVideos = atom({
    key: 'editorEditedVideos',
    default: []
});

export const legerAtom = atom({
    key: 'legerAtom',
    default: []
});