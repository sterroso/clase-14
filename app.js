import express from "express";
import Singleton from "./src/Singleton.js";

const app = express();

app.get("/", (req, res) => {
  const singleton = Singleton;

  singleton.message = "Hello World!";

  const singleton2 = Singleton;

  if (singleton === singleton2) {
    singleton2.message = "Singletons are identical!";
  }

  const returnObject = {
    message: singleton.message,
    lastModified: singleton.lastModified,
  };

  res.status(200).json(returnObject);
});

export default app;
