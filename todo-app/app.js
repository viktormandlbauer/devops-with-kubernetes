const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const PORT = Number(process.env.PORT) || 3000;

app.get('/health', (_req, res) => res.send('ok'));

app.get('/', (_req, res) => {
    res.send('todo app: up');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server started in port ${PORT}`);
});