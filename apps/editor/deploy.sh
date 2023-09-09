#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.6.1/bin/node

cd /home/ubuntu/youtubeCreator
git pull origin main
node -v 
yarn install
yarn build
sudo rm -rf package-lock.json
pm2 stop editor
pm2 start npm --name "editor" -- run "start:editor"