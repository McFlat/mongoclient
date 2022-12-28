import { WinstonModuleTransportOptions } from "winston";

export interface IMongoClientConfig {
  uri: string;
  auth?: {
    user: string;
    pass: string;
  },
  options?: Object;
}

export interface IMongoLoggerConfig {
  level: string;
  transports?: WinstonModuleTransportOptions;
  exitOnError?: boolean;
}

export interface IMongoConfig {
  mongo: IMongoClientConfig,
  logger: IMongoLoggerConfig,
}
