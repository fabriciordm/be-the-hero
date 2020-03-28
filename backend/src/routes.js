const express = require('express');
const routes = express.Router();
const OngController = require('../src/Controllers/OngController')
const IncidentController = require('../src/Controllers/IncidentController')
const ProfileController = require('../src/Controllers/ProfileController')
const SessionController = require('../src/Controllers/SessionController')




routes.get('/ongs', OngController.index);
routes.get('/profile',ProfileController.index);
routes.post('/sessions',SessionController.create);
routes.post('/ongs',OngController.create);
routes.post('/incidents',IncidentController.create);
routes.get('/incidents',IncidentController.index);
routes.delete('/incidents/:id',IncidentController.delete);

console.log('teste');


module.exports= routes;