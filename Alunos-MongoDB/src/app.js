import routes from './routes/index.js';

const express = require('express'); //importação
const bodyparser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');

const app = express(); //instanciamento

mongoose.connect("mongodb://localhost", (err, client) => {
    if (err) {
        console.log(err);
    }
});

app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors()); //habilita o CORS, middleware da aplicação
app.set('view engine', 'ejs');

routes(app);

export default app;