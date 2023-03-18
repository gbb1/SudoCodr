/* eslint-disable no-console */
import express from 'express';
// const path = require('path');
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const PORT = 5173;

// ----- Middleware ----- //

// need the following routes approved for cors in deployed version
const corsOptions = {
  origin: [
    '*'
  ]
};

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
// });
// app.use(express.static(path.join(__dirname, '../dist')));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ----- Request handling ----- //


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  console.log('test');
});

export default app;
