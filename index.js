const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());

const userRouter = require('./routes/user');

app.use('/', userRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port:${process.env.PORT}`);
});
