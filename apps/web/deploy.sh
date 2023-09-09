#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.6.1/bin

cd /home/ubuntu/youtubeCreator
git pull origin main
node -v 
nvm use 20.6.1
yarn install
yarn build
sudo rm -rf package-lock.json
pm2 stop web
pm2 start npm --name "web" -- run "start:creator"