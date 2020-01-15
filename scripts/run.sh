#!/bin/bash
PATH=$PATH:/home/tbaumgar/bin
/home/tbaumgar/bin/npm install -g serve
cd /home/tbaumgar/public_html/personal-website-v2
/usr/bin/nohup /home/tbaumgar/bin/serve -s build >> /home/tbaumgar/log.txt 2>> /home/tbaumgar/err.log
