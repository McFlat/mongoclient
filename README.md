MongoClient
===========

A mongodb client wrapper for mongoose.

### Installation

    npm install --save mongoclient
    
### Usage

    const config = {
      mongo: {
        uri: 'mongodb://127.0.0.1:27017/hello-world',
      },
    };
    
    require('mongoclient')(config);
