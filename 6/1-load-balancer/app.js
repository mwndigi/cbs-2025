const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.get('/fedt', (req, res) => {
    res.status(200).json({ message: 'Det her er et fedt endpoint!', cool: true });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});