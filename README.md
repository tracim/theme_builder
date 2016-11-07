[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Setup
### Installation of Node and npm

````
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
````

### Installation of all dependencies

````
npm install
````

### Installation of webpack globally

````
npm install webpack -g
````

### Build bundle.js

````
webpack -p
````

### Open the app

Open index.html throught a webserver (apache or nginx)

Edit the attribut configPath from index.html to change the url to get the app configuration
