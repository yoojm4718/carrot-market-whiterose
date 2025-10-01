import express from "express";
import morgan from "morgan";
import cors from "cors";
import usersRouter from "./users/routers/users.router";
import cookieParser from "cookie-parser";
import session from "express-session";

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
app.use(cookieParser());
app.use(
  session({
    secret: "asjldkfals;dfjasd",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/api/users", usersRouter);

// 에러 미들웨어
app.use((err, req, res, next) => {
  return res.status(400).json({
    status: "failed",
    message: err.message,
  });
});

export default app;
