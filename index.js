module.exports = function(config) {
  const conf = config || require('./config');

  require('mongoose').connect(conf.mongo.uri, conf.mongo.auth, function(err) {
    if (err) conf.logger.error("Failed to connect to MongoDB with config " + JSON.stringify(conf.mongo));
    else conf.logger.info("Successfully connected to MongoDB database " + conf.mongo.uri);
  });
};