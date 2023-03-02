import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./config/db.js";
import songRoutes from "./routes/songRoutes.js";
dotenv.config();
const PORT = process.env.PORT || 7000;
connectDB();
const app = express();
app.listen(PORT, () => console.log(`running on port ${PORT}`));
console.log("port: ", process.env.MONGO_URI);
// middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("port is working");
});
app.use("/songs", songRoutes);
