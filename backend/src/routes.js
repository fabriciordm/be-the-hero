const express = require('express');
const {celebrate,Segments,Joi} = require ('celebrate');

const routes = express.Router();
const OngController = require('../src/Controllers/OngController')
const IncidentController = require('../src/Controllers/IncidentController')
const ProfileController = require('../src/Controllers/ProfileController')
const SessionController = require('../src/Controllers/SessionController')




routes.get('/ongs', OngController.index);
routes.get('/profile', celebrate({
    [Segments.HEADERS]:Joi.object({authorization:Joi.string().required()}).unknown({
    
    })
}),ProfileController.index);

routes.post('/sessions',SessionController.create);

routes.post('/ongs',celebrate({
    [Segments.BODY]:Joi.object().keys({
        name:Joi.string().required(),
        email:Joi.string().required().email(),
        whatsapp:Joi.string().required().min(10).max(11),
        city: Joi.string().required(),      
        uf:Joi.string().required().length(2),
    })
}),OngController.create);

routes.post('/incidents',IncidentController.create);

routes.get('/incidents',celebrate({
    [Segments.QUERY]: Joi.object().keys({ page:Joi.number()})
}) ,IncidentController.index);


routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}),IncidentController.delete);


module.exports= routes;