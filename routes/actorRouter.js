
const Router = require('express').Router()
const actorController = require('../controllers/actors-controller.js')

Router.get('/', actorController.getActors)

Router.get('/:id', actorController.getActorById)

module.exports = Router













// const express = require('express')
// const Router = express.Router()
// const Actor = require('../models/actor.js')
// const db = require('./db')


// Router.get('/', (req, res) => {
//     Actor.find({}, (err, actors) => {
//         if (err) {
//             console.error(err)
//             res.status(500).send('Internal server Error')
//         } else {
//             res.json(actors)
//         }
//     })
// })



// Router.get('/:id', (req, res) => {
//     const actorId = req.params.id;
//     Actor.findById(actorId, (err, Actor) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//       } else if (!Actor) {
//         res.status(404).send('Actor not found');
//       } else {
//         res.json(Actor);
//       }
//     })
//   })