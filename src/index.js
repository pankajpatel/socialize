const pack = '../package.json';

const register = (server, options) => {
  // Do some stuff with server
  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, h) {
      return 'Hello, world!'
    }
  });

  server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, h) {
      return 'Hello, ' + encodeURIComponent(request.params.name) + '!';
    }
  });
};

module.exports = {
  plugin: {
    name: pack.name,
    version: pack.version,
    register,

  }
};

