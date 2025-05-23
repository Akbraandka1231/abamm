const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://c-greenproject.org:4443',
      changeOrigin: true,
    })
  );
};