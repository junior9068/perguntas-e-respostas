const express = require("express");
const app = express();

//Estou dizendo para o express usar o ejs como View engine
app.set('view engine','ejs');

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(7000, () => {console.log("App rodando!");});