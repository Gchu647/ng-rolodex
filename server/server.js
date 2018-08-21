const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const PORT = process.env.PORT || 8060;
const app = express();
app.use(bodyParser.json());

// sends everything to routes
app.use('/api', routes);

app.use('*', (req, res) => {
  res.status(400).json({ message: `Unable to fulfill request for: ${req.originalUrl}` });
})
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
})