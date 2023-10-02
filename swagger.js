const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Product API',
      version: '1.0.0',
      description: 'API для работы с продуктами',
    },
    host: 'localhost:3000',
    basePath: '/api',
  },
  apis: ['./api/routes/*.js', './api/controllers/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
