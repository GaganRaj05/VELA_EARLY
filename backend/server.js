require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const connectToDb = require('./utils/connectToDb');
const signUpRoutes = require('./routes/userSignup');

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/auth", signUpRoutes);

connectToDb(process.env.MONGODB_URL);
app.listen(process.env.PORT, ()=>console.log(`Server started at PORT: ${process.env.PORT}`));