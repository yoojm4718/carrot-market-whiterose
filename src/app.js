import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(morgan(process.env.NODE_ENV === "development" ? "dev" : "combined"));
app.use(
  cors(
    process.env.NODE_ENV === "development" || {
      origin: "http://localhost:3000",
    }
  )
);
app.use(express.json());

export default app;
