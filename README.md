# personal-website-v2

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The original Create React App readme is [here](create-react-app-README.md).

## Prerequisites

* Nodejs [version 10.15.2 LTS](https://nodejs.org/dist/v10.15.2/)
* * includes NPM version 6.4.1
* [git](https://mirrors.edge.kernel.org/pub/software/scm/git/) version 2.19.0

## Setup
```sh
git clone https://github.com/timothy-b/personal-website-v2.git
npm install
npm start
```

## Deployment
On build server:
```sh
npm run build
scp -r -P <PORT_NUMBER> build username@example.com:/home/user/public_html/personal-website-v2

scp -r -P <PORT_NUMBER> run.sh username@example.com:/home/user/public_html/
```

On deployment server:
```
mkdir personal-website-v2
chmod +x run.sh
npm install -g serve
./run.sh
```
