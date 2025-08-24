const express = require('express');
const app = express();


// Allow choosing the port via environment variable PORT, default to 3000
const PORT = Number(process.env.PORT) || 3000;


// Health endpoint (handy for readiness/liveness probes later)
app.get('/healthz', (_req, res) => res.send('ok'));


// Root endpoint — placeholder for the future todo features
app.get('/', (_req, res) => {
res.send('todo app: up');
});


app.listen(PORT, '0.0.0.0', () => {
// IMPORTANT: print exactly the required startup message
console.log(`Server started in port ${PORT}`);
});