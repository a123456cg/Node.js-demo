# Express With Mongodb

## Download
+ [Mongodb](https://www.mongodb.com/download-center#community)

## Configure a Windows Service

+ [web](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#configure-a-windows-service-for-mongodb-community-edition)

```bash
mkdir c:\data\db
mkdir c:\data\log
``` 

+ create file
```bash
C:\Program Files\MongoDB\Server\3.6\mongod.cfg
```

+ install as a service
```bash
"C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe" --config "C:\Program Files\MongoDB\Server\3.6\mongod.cfg" --install
```

## Install Robo 3T
+ [Robo](https://robomongo.org/download)


## Install mongoose
+ [mongoose](http://mongoosejs.com/)
```bash
npm install --save mongoose
```

## Install dotenv
+ [dotENV](https://github.com/motdotla/dotenv)
```bash
npm install dotenv --save
```
+ create file: .env (.env.example)
```
DB_HOST=localhost
DB_DATABASE=demo
```
+ add .env to .gitignore

+ import 
```js
require('dotenv').config()
```

+ conn
```js
const mongoose = require('mongoose');
mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_DATABASE}`);
```