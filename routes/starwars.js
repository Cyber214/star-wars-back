import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as starwarsCtrl from '../controllers/starwars.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/starships', checkAuth, starwarsCtrl.getAllStarships)
router.get('/starships/:starshipId', checkAuth, starwarsCtrl.getStarship)

export { router }