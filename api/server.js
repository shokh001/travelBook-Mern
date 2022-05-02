const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors');
require("dotenv").config();

// Connect to database
connectDB();

const app = express();

app.use(cors());

//Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/travel/', require('./routes/auth'));
app.use('/api/travel/', require('./routes/travelRoutes'));

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server listening on port ${PORT}`));
