const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;

// Generate UUID on startup
const randomId = uuidv4();
console.log('UUID generated on startup:', randomId);

// Log the UUID every 5 seconds
setInterval(() => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${randomId}`);
}, 5000);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
