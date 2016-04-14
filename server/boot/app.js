var path = require('path');

module.exports = function (server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/account/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
  });
  server.use(router);
};
