const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const dotenv = require('dotenv');
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

const port = 5000


dotenv.config();
// MONGODB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });



// app.get('/', (req, res) => {
//   res.send('Xin cơm')
// })
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
// app.use("/api/movies", movieRoute);
// app.use("/api/lists", listRoute);


app.listen(port, () => {
  console.log("Backend server is running");
})