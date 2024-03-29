[![Watch the video]](https://i9.ytimg.com/vi_webp/ywNHQ3UQcqg/mq2.webp?sqp=CMilx64G-oaymwEmCMACELQB8quKqQMa8AEB-AHWCIAC0AWKAgwIABABGH8gMSgdMA8=&rs=AOn4CLAwjsggwo9WZuwtukYl_hijJFY9WQ)(https://www.youtube.com/watch?v=ywNHQ3UQcqg)

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## Env Example

MONGODB_URI=
BASEURL='http://localhost:3000/api'
CLIENT_ID=''
REDIRECT_URI='http://localhost:3000/api/auth/callback'
CLIENT_SECRET=''
OUTH_TOKEN_VALID_URL='https://www.googleapis.com/oauth2/v3/tokeninfo'
AWS_ACCESS_KEY=''
AWS_SECRET_KEY=''
AWS_REGION='ap-south-1'
AWS_BUCKET_NAME='creator-raw-videos'
AWS_ENDPOINT=''
AWS_RAW_VIDEO_BUCKET_NAME=''
CREATOR_SECRET=''
EDITOR_SECRET=''



## Plans

 - To provide a Licence to youtube to increase the upload quota
 - To add a payment portal to pay before Authentication
 - To Customize the auth page
 - Make the publishAt date to be in a closed domain
 - and many more.


## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
