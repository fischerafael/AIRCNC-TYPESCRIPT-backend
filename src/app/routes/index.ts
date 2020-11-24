import { Router } from 'express'
import { createSession } from '../controllers/session-controller'
import { getSpots } from '../controllers/spot-controller'
import { createUser, getUsers, deleteUser } from '../controllers/user-controller'
import { createSpot, deleteSpot, getSpotsByUser } from '../controllers/dashboard-controller'

const routes = Router()

routes.get('/', (req, res) => res.send('API Aircnc in Typescript'))

routes.post('/sessions', createSession)

routes.get('/users', getUsers)
routes.post('/users', createUser)
routes.delete('/users/:user_id', deleteUser)

routes.get('/spots', getSpots)

routes.post('/dashboard', createSpot)
routes.get('/dashboard', getSpotsByUser)
routes.delete('/dashboard/:spot_id', deleteSpot)

export default routes