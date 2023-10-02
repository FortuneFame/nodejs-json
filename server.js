const express = require('express');
const app = express();
const path = require('path');

const apiRouter = require('./api/routes/apiRoutes');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.use(express.static('./public'));

app.all('*', (req, res) => {
    res.status(404).sendFile(path.resolve(__dirname, './public/404.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running: http://localhost:${PORT}/`)
})

