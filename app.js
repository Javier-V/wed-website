const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hell yeah!')
})

app.listen(port, () => {
  console.log(`Example app 123 listening on port ${port}`)
})