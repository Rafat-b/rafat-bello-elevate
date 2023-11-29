const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const userRoutes = require('./routes/user-routes');
// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(userRoutes);

// test api
app.post('/signup', (req, res) => {
  const sql = "insert into login ('name', 'email', 'username', 'password') Values (?)"
  res.send('Hello! This is the API');
  const values = [
    req.body.name,
    req.body.email,
    req.body.username,
    req.body.password
  ]
  db.query(sql, [values], (err, data) => {
    if(err) {
        return res.json("Error")
    }
    return res.json(data)
  })
});

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
