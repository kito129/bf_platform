
ele---
title: Production of platform 
summary: A brief description of Angular production on NGINX server.
authors:
    - Marco Selva
date: 2021/12/13
---


# Production of Platform

## Structure

    /bfv2
        /uploader
            python script to upload the new data v2 to mongo db
        /backend
            new backend with correct study basic calculation
        /frontend
            new frontend with correct data and functions
## MONGO DB


client = pymongo.MongoClient("mongodb+srv://marco:If1upkx4vARGggB5@db2.fzsll.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client.test



## VPS

    apt-get install  nginx
    
    sudo systemctl restart nginx
    sudo systemctl status nginx
    
    // in folder
    
    npm install
    

## Node and NPM

### Node
cd ~
curl -sL https://deb.nodesource.com/setup_13.x -o /tmp/nodesource_setup.sh

sudo bash /tmp/nodesource_setup.sh
sudo apt install nodejs
node -v
v13.14.0

### Node
npm -v
6.14.4



ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 10.2.3
Node: 13.14.0
OS: win32 x64

Angular:
...
Ivy Workspace:

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1002.3 (cli-only)
@angular-devkit/core         10.2.3 (cli-only)
@angular-devkit/schematics   10.2.3 (cli-only)
@schematics/angular          10.2.3 (cli-only)
@schematics/update           0.1002.3 (cli-only)


## lIMIT MEMORY NODE BACK END

linux
export NODE_OPTIONS="--max-old-space-size=5120" # Increase to 5 GB

windows
set NODE_OPTIONS=--max_old_space_size=10096

now is configured in nodemon.json file to 10gb
node -e 'console.log(v8.getHeapStatistics().heap_size_limit/(1024*1024))'

## NGINX

Create config

    sudo nano /etc/nginx/sites-available/simpleServer
    
Config

check ip

File

server {
    listen 80;
    server_name 95.111.245.75;
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 600s;
    }
}

nginx -s reload

Update config:
    
    sudo nginx -t
    sudo ln -s /etc/nginx/sites-available/simpleServer /etc/nginx/sites-enabled
    sudo nginx -t
    service nginx restart
    
To remove and update site:
    
    cd /etc/nginx/sites-enabled
    rm TAB


## Tmux

sudo apt-get install tmux
tmux new -s platform

tmux new -s platform

tmux new -s bot


## pm2
npm install -g pm2
pm2 link 59r4rsei9igfvl0 bdm61t9l6kn17e3
pm2 install pm2-server-monit


pm2 start npm --name "bf" -- start

pm2 start npm --name "bfOld" -- start


    

## Git

Token:
    187b55420e47378cd6f02f50dcb2c6389c94615e
    

Config: 

    git config --global user.name marcoselva
    git config --global user.email marco.96.12@gmail.com
    
    git config --global credential.helper store
    

    
        
03/07/2022

# CRUD LIST --- TODAY
- [x] create name
- [x] filter name remain at every recherge, save props and recalculate in onInit sub
- [x] load filter 
- [x] filter info poupup
- [x] list complete
- [x] removed setted
- [x] fix date filter -> usre quello di defautl creat
- [] improve filter info tooltip
- [] additional filter: court, phase, odds prematch


# ENTRY 
- [] create comp, main, list, 
- [] form edit
- [] create model and first typo of form
- [] use reactive form angular
- []

# RUNNER
- [x] runner detail selector get only MATCH_ODDS market
- [] sistemare viuslaizzione divisione quota, tabella ordinata per data e large 12
- [] valutare se si riesce a scaricare le partite della tabella e fare vedere tutte insieme
- []
- []
- []
- []

# REPORT 
- [] all trade get by selector with right value already calculated
- [] strategy check if all works
- [] strategy list with correct value, ordered by pl
- [] report in startegy have tools to an not only view
- [] trade modal check if market id and name are correct instead text of error
- [] in trade detail mettere palla break e chi serve in colonna sua con colore come excel, distringuere bene se sono su runner diversi



# MARKET 
- [x] market additional info tennis point not works
- [x] pointTenis fix null error


# NOTE FIX
- [] colore icona concorde con colroe data per i giorni
- []  aggiungere torneo in detail notes
- []  fix del bug
- []  non ripetere in categorie diverse
- []
- []
- []
