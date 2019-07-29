const express = require('express');
const bodyparser = require('body-parser');
const routes = require('./app/routes/index');

const app = express();

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

//registra as rotas
routes(app);

//envia o app para poder ser utilizado fora
module.exports = app;

const port = process.env.PORT || 3333
console.log(process.env.PORT);

app.listen(port, (err) => {
    if (err) {
        console.log("Fail to start the application");
    } else {
        console.log("Server up and running...");
    }
});