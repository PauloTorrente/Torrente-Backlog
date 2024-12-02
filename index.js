require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRouter = require('./api/auth/auth.router');
const usersRouter = require('./api/users/users.router');
const backlogRouter = require('./api/backlog/backlog.router');

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/backlog', backlogRouter);  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
