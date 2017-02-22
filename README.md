[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

# Tracim Theme Builder
Allows to customize the design of a Tracim instance

## Setup
### Node js
```
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### install all dependencies
```
npm install
```

## Build
### Build all sources
```
npm run build
```
#### To run the app
Edit the attribut configPath from index.html to change the url to get the app configuration
Open /dist/index.html in a web server

## Test
### Run local test
```
npm run test:local
```
