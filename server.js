const express = require('express');
const app = express();
const path = require('path');

const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger');

const apiRouter = require('./api/routes/apiRoutes');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api', apiRouter);

app.use(express.static('./public'));

app.all('*', (req, res) => {
    res.status(404).sendFile(path.resolve(__dirname, './public/404.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running: http://localhost:${PORT}/`);
  console.log(`Swagger: http://localhost:${PORT}/api-docs/`);
})

