const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

let counter = 0;

app.get('/healthz', (_req, res) => res.status(200).send('ok'));

app.get('/pingpong', (_req, res) => {
  // respond with the *current* value, then increment for the next call
  res.type('text/plain').send(`pong ${counter}`);
  counter += 1;
});

app.listen(PORT, () => {
  console.log(`PingPong service listening on port ${PORT}`);
});
