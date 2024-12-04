require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRouter = require('./api/auth/auth.router');
const usersRouter = require('./api/users/users.router');
const backlogRouter = require('./api/backlog/backlog.router');
const wishlistRouter = require('./api/wishlist/wishlist.router');
const acquiredRouter = require('./api/acquired/acquired.router');
const favoriteRouter = require('./api/favorite/favorite.router');
const droppedRouter = require('./api/dropped/dropped.router');  

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/backlog', backlogRouter);
app.use('/api/wishlist', wishlistRouter);
app.use('/api/acquired', acquiredRouter);
app.use('/api/favorite', favoriteRouter);
app.use('/api/dropped', droppedRouter);  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
