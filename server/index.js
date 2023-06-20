import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postRoutes from './routes/posts.js'
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use('/posts',postRoutes);

const PORT = 5000;
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on Port ${PORT}`);
    })
  )
  .catch((error) => {
    console.log(error);
  });


