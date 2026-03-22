const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db.js'); // or require('./config/db.js')
const userRouter = require('./src/routers/user.route.js'); // or require('./routers/user.route.js')
dotenv.config();
connectDB();





const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 3. Use Routes


app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api/users', userRouter);

module.exports = app;
