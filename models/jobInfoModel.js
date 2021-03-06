var express = require('express');
var mongoose = require('mongoose');

var jobInfoSchema = new mongoose.Schema({
    id: Number,
    jobID: String,
    employerID : String,
    title: String,
    location: String,
    companyName: String,
    responsibilities: String,
    requirement: String,
    rate: Number,
    salaryType: String,
    referEmail: String,
    maxNumber: Number,
    activeJob: String,
    origPostDate: Date,
    postExpiryDate: String,
    updatedDate: Date,
    lastUpdatedBy: String
});

module.exports = mongoose.model('jobInfoModel', jobInfoSchema);