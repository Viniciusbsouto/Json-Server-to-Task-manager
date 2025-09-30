const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
// Resolve db.json relative to this file so the server works regardless of CWD
const router = jsonServer.router(path.join(__dirname, '..', 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  }),
);
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});

module.exports = server;
