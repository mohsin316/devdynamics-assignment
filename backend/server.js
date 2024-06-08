const express = require("express");
const cors = require("cors");
const credentials = require("./middleware/credentials");
const corsOptions = require("./config/corsOptions");

// express app
const app = express();

// cors
// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//
app.get("/api/employeeData", (req, res) => {
  const data = require("./sample-data.json");
  res.json(data);
});

app.listen("4100", () => {
  console.log("listening on port 4100");
});
