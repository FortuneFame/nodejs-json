const express = require('express');
const path = require('path')

const apiRouter = require('./api/apiRoutes')

const app = express();
const PORT = 3000;

apiRouter(app)

app.use(express.static('./public'));

app.all('*', (req, res) => {
    res.status(404).sendFile(path.resolve(__dirname, './public/404.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running: http://localhost:${PORT}/`)
})

