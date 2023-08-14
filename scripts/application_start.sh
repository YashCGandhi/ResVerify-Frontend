#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ubuntu/express-app

#navigate into our working directory where we have all our github files
cd /home/ubuntu/express-app


npm install

#start our node app in the background
npm start > app.out.log 2> app.err.log < /dev/null & 
