import { z } from 'zod';

export const creatorInputValid = z.object({
    username: z.string(),
    password: z.string(),
    name: z.string(),
    email: z.string()
});

export const editorInputValid = z.object({
    username: z.string(),
    password: z.string(),
    name: z.string(),
    email: z.string()
});

export type creatorSignup = z.infer<typeof creatorInputValid>;

export type editorSignup = z.infer<typeof editorInputValid>;

export interface CreatorType extends creatorSignup {
    editors: string[],
    videos: string[],
    _id: string
}

export interface EditorType extends editorSignup {
    video: string[],
    _id: string
}