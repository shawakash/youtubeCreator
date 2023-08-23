import { z } from 'zod';

const bufferTransformer = z
  .string()
  .refine(value => {
    try {
      Buffer.from(value, 'base64'); // Attempt to convert the string to a Buffer
      return true;
    } catch {
      return false;
    }
  }, {
    message: 'Expected a valid base64 encoded Buffer.',
  })
  .transform(value => Buffer.from(value, 'base64'));

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
  refreshToken: string,
  accessToken: string,
  hasAllowed: boolean,
  _id: string
}

export interface EditorType extends editorSignup {
  video: string[],
  _id: string
};

export const LoginValid = z.object({
  username: z.string(),
  password: z.string()
});

export type LoginType = z.infer<typeof LoginValid>;

export const rawVideo = z.object({
  thumbnail: z.string(),
  title: z.string(),
  videoKey: z.string(),
  bucketName: z.string(),
  description: z.string(), // Html kind page
  contentType: z.string(),
  deadLineDate: z.string(),
  deadLineTime: z.string(),
});

export const editVideo = z.object({
  thumbnail: z.string(),
  title: z.string(),
  videoKey: z.string(),
  bucketName: z.string(),
  description: z.string(), // Html kind page
  contentType: z.string(),
  deadLineDate: z.string(),
  deadLineTime: z.string(),
})

export type rawVideoInputType = z.infer<typeof rawVideo>;
export type editVideoInputType = z.infer<typeof editVideo>;

export interface RawVideoType extends rawVideoInputType {
  _id: string,
  creator: CreatorType,
  editor: EditorType,
  isEdited: boolean,
  isUploaded: boolean,
  url: string
};

export interface EditVideoType extends editVideoInputType {
  _id: string,
  creator: CreatorType,
  editor: EditorType,
  isUploaded: boolean,
  url: string
}