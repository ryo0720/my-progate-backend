require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000;

// MongoDB接続
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// ミドルウェアの設定
app.use(express.json());

// ルート
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// JWTの例
app.post('/login', (req, res) => {
    const user = { id: 1, name: 'John Doe' };
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

// サーバーの起動
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
