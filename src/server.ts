import "reflect-metadata";

import { createConnection } from "typeorm";
import app from "./app";
import dbOptions from "./database/ormconfig";

createConnection(dbOptions)
  .then(() => {
    app.listen(process.env.PORT || 3000);
  })
  .catch((error) => console.log(error));
