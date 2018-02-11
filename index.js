'use strict';

const Hapi = require('hapi');

const Socialize = require('./src');

const server = new Hapi.Server({ port: 3000, host: 'localhost' });

server.register({plugin: Socialize});

try {
  server.start(() => {
    console.log(`Server running at: ${server.info.uri}`);
  });
}
catch (err) {
  console.log(err);
}
