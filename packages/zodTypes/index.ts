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
    description: z.string(), // Html kind page
    data: z.custom<Buffer>((val) => {
        // if (val instanceof Buffer) {
            //@ts-ignore
          return val.data;
        // }
        // console.log(val.data)
        // throw new Error('Expected a Buffer.');
      }),
    contentType: z.string(),
    deadLineDate: z.string(),
    deadLineTime: z.string(),
});

export type rawVideoInputType = z.infer<typeof rawVideo>

export interface RawVideoType extends rawVideoInputType {
    _id: string,
}