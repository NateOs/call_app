const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { checkPermissions } = require("../utils");

// TODO get all calls
const getAllCalls = async (req, res) => {
  res.send("calls returned");
};
// TODO get all calls
const getSingleCall = async (req, res) => {
  res.send("single call record fetched");
};
// TODO create a call record

const createCall = async (req, res) => {
  res.send("call record created");
};

// TODO delete a call record
const deleteCall = async (req, res) => {
  res.send("call record deleted");
};

// TODO update a call record
const updateCall = async (req, res) => {
  res.send("calls record updated");
};

module.exports = {
  getAllCalls,
  createCall,
  deleteCall,
  updateCall,
  getSingleCall,
};
