const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

// Store the random string in memory
const randomId = uuidv4();
console.log('UUID generated on startup:', randomId);

// Log the UUID every 5 seconds with a timestamp
setInterval(() => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${randomId}`);
}, 5000);

app.get('/status', (_req, res) => {
  res.json({
    timestamp: new Date().toISOString(),
    id: randomId,
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
