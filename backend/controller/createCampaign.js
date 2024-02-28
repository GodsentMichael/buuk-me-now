const express = require('express')
const Campaign = require('../model/campaignModel')
const ErrorHandler = require('../utils/ErrorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');


exports.createCampaign = catchAsyncErrors(async (req, res, next) => {
    try {
      const { title, description, targetGroup } = req.body;
  
      console.log("REQ BODY=>", req.body);
  
      if (!title || !description || !targetGroup) {
        throw new ErrorHandler('Please fill all the fields', 400);
      }
  
      const campaign = await Campaign.create({
        title,
        description,
        targetGroup,
      });
  
      res.status(201).json({
        success: true,
        campaign,
      });
    } catch (error) {
      next(error);
    }
  });