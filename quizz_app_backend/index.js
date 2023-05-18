import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import quizzRoutes from "./routes/quizzes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 9000;
let server;

//middleware config
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: "20mb" }));
app.use(bodyParser.json({ limit: "20mb" }));
app.use("/api/users", userRoutes);
app.use("/api/quizzes", quizzRoutes);

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
