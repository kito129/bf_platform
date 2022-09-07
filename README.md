
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

    curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
    sudo apt install nodejs

    npm install -g node
    
    sudo systemctl restart nginx
    sudo systemctl status nginx
    
    // in folder
    
    npm install
    
    
## Git

Token:
    187b55420e47378cd6f02f50dcb2c6389c94615e
    

Config: 

    git config --global user.name marcoselva
    git config --global user.email marco.96.12@gmail.com
    
    git config --global credential.helper store
    


## lIMIT MEMORY NODE BACK END

linux
export NODE_OPTIONS="--max-old-space-size=5120" # Increase to 5 GB

windows
set NODE_OPTIONS=--max_old_space_size=7096

## NGINX

Create config:

    sudo nano /etc/nginx/sites-available/simpleServer
    
Config:

server {
    listen 80;
    server_name 217.61.104.122;
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

Update config:
    
    sudo nginx -t
    sudo ln -s /etc/nginx/sites-available/simpleServer /etc/nginx/sites-enabled
    sudo nginx -t
    service nginx restart
    
To remove and update site:
    
    cd /etc/nginx/sites-enabled
    rm TAB
    
        
        
        
        
