const express = require('express')

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')
const controllers = require('./app/controllers')

routes.post('/users', controllers.UserController.store)
routes.post('/sessions', controllers.SessionController.store)

routes.use(authMiddleware)

/**
 * Ads
 */
routes.get('/ads', controllers.AdsController.index)
routes.get('/ads/:id', controllers.AdsController.show)
routes.post('/ads', controllers.AdsController.store)
routes.put('/ads/:id', controllers.AdsController.update)
routes.delete('/ads/:id', controllers.AdsController.destroy)

/**
 * Purchases
 */
routes.post('/purchases', controllers.Purchases.store)

module.exports = routes
