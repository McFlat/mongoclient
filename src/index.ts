import defaultConfig from './config';

export default (config: any) => {
  const conf = config || defaultConfig;

  require('mongoose').connect(conf.mongo.uri, conf.mongo.auth, (err: any) => {
    if (err) conf.logger.error("Failed to connect to MongoDB with config " + JSON.stringify(conf.mongo));
    else conf.logger.info("Successfully connected to MongoDB database " + conf.mongo.uri);
  });
};