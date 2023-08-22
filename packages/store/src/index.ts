import { atom } from "recoil";


export const creatorIdAtom = atom({
    key: 'creatorIdAtom',
    default: null
});

export const allRawVideo = atom({
    key: 'allRawVideo',
    default: []
});

export const allEditVideo = atom({
    key: 'allEditVideo',
    default: []
});