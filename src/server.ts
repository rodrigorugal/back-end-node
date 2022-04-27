import "reflect-metadata";
import {createConnection} from "typeorm";
import app from "./app";

const PORT = process.env.PORT || "3000";

createConnection().then(async connection => {

    app.listen(PORT)

}).catch(error => console.log(error));
