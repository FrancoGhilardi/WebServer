import express from "express";
import { getDirName } from "./helpers/helpers.js";
import hbs from "hbs";
import "dotenv/config.js";

const app = express();
const port = process.env.PORT;
const __dirname = getDirName(import.meta.url);

//#region HANDLEBARS
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
//#endregion

//#region SERVIR CONTENIDO ESTATICO
app.use(express.static("public"));
//#endregion

//#region GET RENDER HOME
app.get("/", (req, res) => {
  res.render("home", {
    name: "This is Road Trip",
    title: "Renderer Test",
  });
});
//#endregion

//#region GET PAGE GENERIC
app.get("/generic", (req, res) => {
  res.render("generic", {
    name: "This is Road Trip",
    title: "Renderer Test",
  });
});
//#endregion

//#region GET PAGE GENERIC
app.get("/elements", (req, res) => {
  res.render("elements", {
    name: "This is Road Trip",
    title: "Renderer Test",
  });
});
//#endregion

//#region PORT
app.listen(port, () => {
  console.log(`PUERTO: ${port}`);
});
//#endregion
