const express = require('express');
const cors = require('cors');
const routes = require('./routes')


const app = express();
// app.use(cors());
app.use(cors({
    allowedHeaders: '*',
    exposedHeaders: '*'
}))
app.use(express.json());
app.use(routes);

/**
 * Tipos de parâmetros
 * 
 * Query params:ex /users?name=Jennifer&redSocial=Tinder
 * Route params: users/1 como se fosse where no sql 
 * Request Body:
 * 
 * 
 */

app.listen(3333);
