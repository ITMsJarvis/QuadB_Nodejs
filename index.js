const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());

const adminRouter = require('./routes/user');

app.use('/', adminRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port:${process.env.PORT}`);
});
