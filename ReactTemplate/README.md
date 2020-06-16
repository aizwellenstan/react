# Install NodeJS
```bash
sudo apt-get update
sudo apt-get install build-essential libssl-dev
sudo apt install curl
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo ln -s /usr/local/lib/node_modules/ /lib/node_modules
```

```bash
rm -rf node_modules dist static
sudo npm i
sudo ln -s /usr/local/lib/node_modules/ /lib/node_modules
npm run build
```

# How to CHANGE HOST (Backend Api)
.env file

## React Debug Mode
`npm run watch:client`

## How To Use
1. `npm run build`

2. change the css & js route in /static/index.html by hand

3. pm2 start dist/main.js



# Multiple Language
/client/locales/

- sample at banner (login/logout button)
/client/src/componments/banner.tsx

``` js
import { useTranslation } from 'react-i18next';

// className
export const Banner = React.memo(() => {
  const { t } = useTranslation();  // <== add this function
    {t(`banner.login`, {
        defaultValue: 'Login',
    })}
}
```

# How to change PORT?
open .env
=> change APP_PORT

# Install Pm2
1. sudo apt install -y nodejs npm
2. sudo npm i -g pm2
3. pm2 startup
copy & paste the code displayed after input pm2 startup
echo xxx

## pm2 commands
- pm2 start {xxx.sh || xxx.js}  --name xxx  <=can give it a name
- pm2 status
- pm2 log {appname}
- pm2 restart {appname}
- pm2 stop {appname}

after runing pm2 start or pm2 stop

# Install Client
cd to client folder
1. `sudo npm i`
2. `pm2 start dist/main.js`

# Install Nginx
1. `sudo apt-get install nginx`
2. 
``` bash
curl http://nginx.org/keys/nginx_signing.key | sudo apt-key add -
sudo sh -c "echo 'deb http://nginx.org/packages/mainline/ubuntu/ trusty nginx' >> /etc/apt/sources.list"
sudo sh -c "echo 'deb-src http://nginx.org/packages/mainline/ubuntu/ trusty nginx' >> /etc/apt/sources.list"
```

# add proxy
1. sudo vim /etc/nginx/sites-available/default

example

```json
location / {
    proxy_pass http://localhost:3011;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection keep-alive;
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

```json
location /api/ {
    proxy_pass http://localhost:6000/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection keep-alive;
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

# Client Route
- siemensprodcut.nadi3docms.com/nadidemo4  
- ccauproduct.nadi3docms.com/nadidemo4
- 10.5.117.235 /  => FrontPage

2. `sudo nginx -s reload`




## Tech stacks
- [React](https://github.com/facebook/react) with Hooks
- PWA supported
- Fully-typed [Redux](https://github.com/reduxjs/redux), using [TypeScript FSA](https://github.com/aikoven/typescript-fsa), [Immer](https://github.com/mweststrate/immer) and [Redux Saga](https://github.com/redux-saga/redux-saga)
- WAI-ARIA powers screen reader compatibility.
- [styled components](https://github.com/styled-components/styled-components) powers gorgeous design.
- [i18next](https://github.com/i18next/i18next) and [day.js](https://github.com/iamkun/dayjs) powers multi-language support

## License
AGPL v3 or later
