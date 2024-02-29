const express = require('express')
const router = express.Router()
const { createCampaign, getCampaigns, getPaginatedCampaigns} = require('../controller/createCampaign')


// http://localhost:8001/api/v1/campaign/create
router.post('/create', createCampaign)
router.get('/get', getCampaigns)
router.get('/get-paginated', getPaginatedCampaigns)

module.exports = router