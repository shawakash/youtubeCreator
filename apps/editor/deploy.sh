#!/bin/bash
export PATH=$PATH:/usr/bin/node

cd /home/ubuntu/youtubeCreator
git pull origin main
node -v 
yarn install
yarn build
sudo rm -rf package-lock.json
pm2 stop editor
pm2 start npm --name "editor" -- run "start:editor"