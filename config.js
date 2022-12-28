const nconf = require('nconf');
const winston = require('winston');

const uri = `mongodb://127.0.0.1:27017/${nconf.get('MONGO_DB') || 'hello-world'}`;

const config = {
  mongo: {
    uri: nconf.get('MONGO_URI') || uri,
    auth: {
      user: nconf.get('MONGO_USER') || '',
      pass: nconf.get('MONGO_PASS') || '',
    },
    options: {
      server: {
        reconnectTries: Number.MAX_VALUE,
      },
    },
  },
  logger: new winston.Logger({
    level: nconf.get('LOG_LEVEL') || 'info',
    transports: [
      new winston.transports.Console({
        colorize: true,
        timestamp: false,
        json: true,
        handleExceptions: true,
      }),
    ],
    exitOnError: false,
  }),
};

module.exports = config;