use CTRL+SHIFT+V in VSCODE

`git submodule update --init --recursive`  
`docker compose up -d`  
`docker compose up -d --build`  
`docker compose down -v`
`docker compose build --no-cache`



`docker ps`
`docker logs id`

`docker-compose -f docker-compose.yml -f docker-compose.dev.yml down`
`docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d`
`docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build`
`docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --force-recreate`


`docker exec -it api-auth sh` - exit to exit


`in test env mongo express has admin:pass`

```
docker exec -it api-auth /bin/sh
cd app/microservice-name
npm i module
```

`git submodule add https://github.com/NinetiesFiasco/api-users.git`  
  
To solve email token expose problem  
login to google under big problem account  
go to https://console.cloud.google.com/apis/dashboard and choose Credentials section  
go ahead and choose registered OAuth 2.0 Client ID and use ID and Secret from this page  
Go to https://developers.google.com/oauthplayground  
Open settings in top right corner -> open Use your own OAuth credentials -> Copy ID and Secret in fields  
Choose Gmail API v1 in left panel, choose first simple email and click Authorize APIs  
In next page click Exchange authorization code for tokens and copy Refresh token  
In google test mode it will be alive for 7 days
```

