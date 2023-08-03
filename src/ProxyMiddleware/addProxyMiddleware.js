const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function addProxyMiddleware(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://efinance-services-stage.wizzitdigital.com/api/v1/tx-history?pageNumber=5&pageSize=20',
      changeOrigin: true,
    }),
  );
};