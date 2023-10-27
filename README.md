---
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
    / /   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ / | '_ / / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ /| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   /_/_| |_|/__, |/__,_|_|/__,_|_|       /____|_____|___|
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


### NVM
You can install Node versions like this:

    nvm install latest
This command will install the last version of Node:

    nvm install vX.Y.Z
This will install the X.Y.Z Node version.

You can also make a version your default by running:

    nvm alias default vX.Y.Z

And if you want to use a specific version at any point, you can run the following in your terminal:

    nvm use vA.B.C
NVM makes it easier to manage multiple versions of Node.js across different projects that require different versions.






https://github.com/coreybutler/nvm-windows/releases
nvm install 13.14.0
nvm use 13.14.0

npm i -g @angular/cli@10.2.3

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


## DOWNLOAD MONGO db

done full backup on 10/27/2023

mongo dump

    mongodump --uri "mongodb+srv://marco:4Nr1fD8mAOSypUur@cluster1.fzsll.mongodb.net/bf_historical" -o ./mongo-backup
    mongodump --uri "mongodb+srv://marco:4Nr1fD8mAOSypUur@cluster1.fzsll.mongodb.net/bf_historical" -d --pretty -o ./mongo-backup

mongo restore

mongo export

    mongoexport --uri "mongodb+srv://marco:4Nr1fD8mAOSypUur@cluster1.fzsll.mongodb.net/bf_historical" -o ./mongo-backup/backtest.json -c backtest
    mongoexport --uri "mongodb+srv://marco:4Nr1fD8mAOSypUur@cluster1.fzsll.mongodb.net/bf_historical" -o ./mongo-backup/backtestTrade.json -c backtestTrade
    
    mongoexport --uri "mongodb+srv://marco:4Nr1fD8mAOSypUur@cluster1.fzsll.mongodb.net/bf_historical" -o ./mongo-backup/marketAdditionalInfoSoccer.json -c marketAdditionalInfoSoccer
    mongoexport --uri "mongodb+srv://marco:4Nr1fD8mAOSypUur@cluster1.fzsll.mongodb.net/bf_historical" -o ./mongo-backup/marketAdditionalInfoTennis.json -c marketAdditionalInfoTennis
    mongoexport --uri "mongodb+srv://marco:4Nr1fD8mAOSypUur@cluster1.fzsll.mongodb.net/bf_historical" -o ./mongo-backup/marketAdditionalInfoTennis.json -c marketAdditionalInfoTennis
    
    mongoexport --uri "mongodb+srv://marco:4Nr1fD8mAOSypUur@cluster1.fzsll.mongodb.net/bf_historical" -o ./mongo-backup/marketInfoAdvanced.json -c marketInfoAdvanced
    mongoexport --uri "mongodb+srv://marco:4Nr1fD8mAOSypUur@cluster1.fzsll.mongodb.net/bf_historical" -o ./mongo-backup/marketOddsAdvanced.json -c marketOddsAdvanced
    mongoexport --uri "mongodb+srv://marco:4Nr1fD8mAOSypUur@cluster1.fzsll.mongodb.net/bf_historical" -o ./mongo-backup/marketRunnersAdvanced.json -c marketRunnersAdvanced
    mongoexport --uri "mongodb+srv://marco:4Nr1fD8mAOSypUur@cluster1.fzsll.mongodb.net/bf_historical" -o ./mongo-backup/marketUpdatesAdvanced.json -c marketUpdatesAdvanced

    mongoexport --uri "mongodb+srv://marco:4Nr1fD8mAOSypUur@cluster1.fzsll.mongodb.net/bf_historical" -o ./mongo-backup/marketInfoBasic.json -c marketInfoBasic
    mongoexport --uri "mongodb+srv://marco:4Nr1fD8mAOSypUur@cluster1.fzsll.mongodb.net/bf_historical" -o ./mongo-backup/marketOddsBasic.json -c marketOddsBasic
    mongoexport --uri "mongodb+srv://marco:4Nr1fD8mAOSypUur@cluster1.fzsll.mongodb.net/bf_historical" -o ./mongo-backup/marketRunnersBasic.json -c marketRunnersBasic
    mongoexport --uri "mongodb+srv://marco:4Nr1fD8mAOSypUur@cluster1.fzsll.mongodb.net/bf_historical" -o ./mongo-backup/marketUpdatesBasic.json -c marketUpdatesBasic
    
    mongoexport --uri "mongodb+srv://marco:4Nr1fD8mAOSypUur@cluster1.fzsll.mongodb.net/bf_historical" -o ./mongo-backup/tennisTournament.json -c tennisTournament
    mongoexport --uri "mongodb+srv://marco:4Nr1fD8mAOSypUur@cluster1.fzsll.mongodb.net/bf_historical" -o ./mongo-backup/notes.json -c notes
    mongoexport --uri "mongodb+srv://marco:4Nr1fD8mAOSypUur@cluster1.fzsll.mongodb.net/bf_historical" -o ./mongo-backup/players.json -c players
    mongoexport --uri "mongodb+srv://marco:4Nr1fD8mAOSypUur@cluster1.fzsll.mongodb.net/bf_historical" -o ./mongo-backup/runners.json -c runners

    mongoexport --uri "mongodb+srv://marco:4Nr1fD8mAOSypUur@cluster1.fzsll.mongodb.net/bf_historical" -o ./mongo-backup/savedReport.json -c savedReport
    mongoexport --uri "mongodb+srv://marco:4Nr1fD8mAOSypUur@cluster1.fzsll.mongodb.net/bf_historical" -o ./mongo-backup/strategy.json -c strategy
    
    mongoexport --uri "mongodb+srv://marco:4Nr1fD8mAOSypUur@cluster1.fzsll.mongodb.net/bf_historical" -o ./mongo-backup/trade.json -c trade
    mongoexport --uri "mongodb+srv://marco:4Nr1fD8mAOSypUur@cluster1.fzsll.mongodb.net/bf_historical" -o ./mongo-backup/tradeNew.json -c tradeNew
    
    mongoexport --uri "mongodb+srv://marco:4Nr1fD8mAOSypUur@cluster1.fzsll.mongodb.net/bf_historical" -o ./mongo-backup/user.json -c user
    mongoexport --uri "mongodb+srv://marco:4Nr1fD8mAOSypUur@cluster1.fzsll.mongodb.net/bf_historical" -o ./mongo-backup/users.json -c users



bf_historical
LOGICAL DATA SIZE: 4.19GB
STORAGE SIZE: 1.13GB
INDEX SIZE: 8.27MB
TOTAL COLLECTIONS: 23


Collection Name	Documents	Logical Data Size	Avg Document Size	Storage Size	Indexes	Index Size	Avg Index Size
backtest    8	24.83KB	3.1KB	44KB	1	36KB	36KB
backtestTrade   717	4.19MB	5.99KB	844KB	1	44KB	44KB
marketAdditionalInfoSoccer  917	566.29KB	633B	208KB	1	60KB	60KB
marketAdditionalInfoTennis  12618	8.74MB	727B	1.73MB	1	244KB	244KB
marketFilterBasketBasic 31	1.76MB	58.06KB	1.06MB	1	36KB	36KB
marketInfoAdvanced  3673	3.63MB	1.01KB	1.02MB	2	132KB	66KB
marketInfoBasic 96093	92.59MB	1011B	18.58MB	2	1.63MB	836KB
marketOddsAdvanced  3673	3.36GB	959.06KB	911.25MB	1	116KB	116KB
marketOddsBasic 96063	542.81MB	5.79KB	173.08MB	1	1.65MB	1.65MB
marketRunnersAdvanced   3673	3.47MB	990B	1.37MB	1	120KB	120KB
marketRunnersBasic  96081	76.96MB	840B	23.38MB	1	1.63MB	1.63MB
marketUpdatesAdvanced   3673	3.28MB	937B	796KB	1	104KB	104KB
marketUpdatesBasic  96085	73.17MB	799B	12.44MB	1	1.64MB	1.64MB
notes   5918	6.28MB	1.09KB	1.82MB	1	168KB	168KB
players 2	363B	182B	20KB	1	20KB	20KB
runners 15348	1.11MB	76B	588KB	1	292KB	292KB
savedReport 63	580.32KB	9.21KB	276KB	1	36KB	36KB
strategy    115	38.37KB	342B	52KB	1	36KB	36KB
tennisTournament    993	448.53KB	463B	136KB	1	60KB	60KB
trade   386	1.21MB	3.2KB	492KB	1	44KB	44KB
tradeNew    5044	33.54MB	6.81KB	7.12MB	1	152KB	152KB
user    1	144B	144B	20KB	2	40KB	20KB
users   0	0B	0B	4KB	2	8KB	4KB