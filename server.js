const express = require('express');
const apiRouter = require('./api/apiRoutes')

const app = express();
const PORT = 3000;

apiRouter(app)

app.listen(PORT, () => {
  console.log(`Server is running: http://localhost:${PORT}/`)
})

