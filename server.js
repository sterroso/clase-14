import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 1080;

const server = app.listen(port, () => {
  console.log(`Express server listening on port ${port}...`);
  console.log(`http://localhost:${port}/api/v1/users/login`);
});

server.on("error", (err) => {
  console.log("Error: ", err);
});
