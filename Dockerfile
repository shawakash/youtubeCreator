FROM node:20.6.1-alpine

# Set environment variables for /apps/editor
ENV MONGODB_URI='mongodb+srv://admin-akash:220104008@cluster0.kcycili.mongodb.net/'
ENV BASEURL='http://localhost:3000/api'
ENV CLIENT_ID='554745299617-jkq4mioscpgl9a57sg5of4gter9t016c.apps.googleusercontent.com'
ENV REDIRECT_URI='http://localhost:3000/api/auth/callback'
ENV CLIENT_SECRET='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'
ENV OUTH_TOKEN_VALID_URL='https://www.googleapis.com/oauth2/v3/tokeninfo'

# Set environment variables for /apps/creator
ENV AWS_ACCESS_KEY='AKIATAPUJ3T25YUCQZX5'
ENV AWS_SECRET_KEY='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'
ENV AWS_REGION='ap-south-1'
ENV AWS_BUCKET_NAME='creator-raw-videos'
ENV AWS_ENDPOINT=''
ENV AWS_RAW_VIDEO_BUCKET_NAME=''
ENV CREATOR_SECRET='hello'



# Copy any additional files or code needed for your application into the appropriate directories


WORKDIR /usr/src/app
COPY packages*.json ./
COPY . .
RUN yarn install
RUN yarn build

CMD ["yarn", "dev"]