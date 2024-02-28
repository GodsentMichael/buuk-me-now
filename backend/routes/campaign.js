const express = require('express')
const router = express.Router()
const { createCampaign } = require('../controller/createCampaign')


// http://localhost:8001/api/v1/campaign/create
router.post('/create', createCampaign)

module.exports = router