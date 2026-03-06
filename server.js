const express = require('express');
const cors = require('cors');
const chatHandler = require('./api/chat');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', chatHandler);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Local API server running on port ${PORT}`);
});
