#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.5.1/bin

cd /home/ubuntu/youtubeCreator
git pull origin main
yarn install
yarn build
rm -rf package-lock.json
pm2 stop web
pm2 start npm --name "web" -- run "start:creator"