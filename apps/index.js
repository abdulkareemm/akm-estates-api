import express from "express";
import dotenv from "dotenv";
// import morgan from "morgan";
// import helmet from "helmet";
// import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
// import compression from "compression";
// import fileUpload from "express-fileupload";
// import cors from "cors";
// import createHttpError from "http-errors";
import routers from "../routes/index.js";

/// dotenv configuration
dotenv.config();

// //  connect to database
// db();

/// create express app
const app = express();

/// morgan
// if (process.env.NODE_ENV !== "production") {
//   app.use(morgan("dev"));
// }

// ///  helmet
// app.use(helmet());

///  parse json request url
app.use(express.json());

///  parse json request body
app.use(express.urlencoded({ extended: true }));

// ///  sanitize request data
// app.use(mongoSanitize());

///  cookie parser
app.use(cookieParser());

// /// gzip compression
// app.use(compression());

// ///  file upload
// app.use(
//   fileUpload({
//     useTempFiles: true,
//   })
// );

// ///  cors
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );

///  routes
app.use("/api/v1", routers);

// ///  page not fount
// app.use(async (req, res, next) => {
//   next(createHttpError.NotFound("This route does not exist."));
// });

///  error handling
app.use(async (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      status: err.status || 500,
      msg: err.message,
    },
  });
});

/// export express app
export default app;
