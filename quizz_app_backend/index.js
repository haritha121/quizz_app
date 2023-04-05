const Express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = Express();
const PORT = process.env.PORT || 9000;
let server;
mongoose
  .connect(process.env.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connection is established"))
  .catch((err) => console.log("Error connecting to MongoDB instance", err));
server = app.listen(PORT, () => {
  console.log("Node server running on Port", PORT);
});
