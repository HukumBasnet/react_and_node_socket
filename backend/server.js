const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const http = require("http");
const socketIO = require("socket.io");
const cors = require('cors')



const app = express();

const server = http.createServer(app);


app.use(cors({ origin: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());



 const io = socketIO(server);



// Define Routes

app.use('/api/signal', require('./routes/api/signal'));
app.use('/api/profile', require('./routes/api/profile'));


io.on("connection", socket => {
  console.log("server socket connected");
});



// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));