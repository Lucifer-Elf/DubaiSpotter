import express from 'express'
const router = express.Router()

import {getAllProperty,addProperty,deleteProperty,getProperty,stats} from '../controllers/propertyController.js'

router.route('/').post(addProperty).get(getAllProperty)
router.route('/:id').delete(deleteProperty).get(getProperty)
router.route('/stats',stats)

export default router