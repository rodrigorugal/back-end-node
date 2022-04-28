import "reflect-metadata";

import { createConnection } from "typeorm";
import app from "./app";

createConnection()
  .then(async (connection) => {
    app.listen(process.env.PORT || 3000);
  })
  .catch((error) => console.log(error));
