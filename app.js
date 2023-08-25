import express from "express";
import { getDirName } from "./helpers/helpers.js";
const app = express();
const port = 8080;
const __dirname = getDirName(import.meta.url);

//#region SERVIR CONTENIDO ESTATICO
app.use(express.static("public"));
//#endregion

//#region GET PAGE GENERIC
app.get("/generic", (req, res) => {
  res.sendFile(__dirname + "/public/generic.html");
});
//#endregion

//#region GET PAGE GENERIC
app.get("/elements", (req, res) => {
  res.sendFile(__dirname + "/public/elements.html");
});
//#endregion

//#region PORT
app.listen(port);
//#endregion
