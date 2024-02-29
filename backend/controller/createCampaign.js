const express = require('express')
const Campaign = require('../model/campaignModel')
const ErrorHandler = require('../utils/ErrorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');


exports.createCampaign = catchAsyncErrors(async (req, res, next) => {
    try {
      const { title, description, targetGroup } = req.body;
  
    //   console.log("REQ BODY=>", req.body);
  
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
    //   console.log("Campaign created successfully=>", campaign);
    } catch (error) {
        console.log("Server error=>", error.message);
      return next(new ErrorHandler(error.message, 500));
    }
  });

  exports.getCampaigns = catchAsyncErrors(async (req, res, next) => {
    try {
      const campaigns = await Campaign.find();
  
      res.status(200).json({
        success: true,
        campaigns,
      });
    } catch (error) {
        console.log("Server error=>", error.message);
      return next(new ErrorHandler(error.message, 500));
    }
  });

  exports.getPaginatedCampaigns = catchAsyncErrors(async (req, res, next) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const pageSize = parseInt(req.query.pageSize) || 10;
      const skip = (page - 1) * pageSize;
  
      // Query database for paginated data
      const campaigns = await Campaign.find()
        .skip(skip)
        .limit(pageSize)
        .exec();

    // console.log("CAMPAIGNS=>", campaigns);
  
      const totalCount = await Campaign.countDocuments();
  
      const totalPages = Math.ceil(totalCount / pageSize);
  
      res.json({
        success: true,
        campaigns,
        currentPage: page,
        totalPages,
        totalCount,
      });
    } catch (err) {
      console.error('Error fetching paginated data=>', err);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  });
  