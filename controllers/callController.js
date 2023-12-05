const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { checkPermissions } = require("../utils");
const CallRecord = require("../models/Call");
const { findOneAndUpdate } = require("../models/User");

//  get all calls
const getAllCalls = async (req, res) => {
  try {
    const allCalls = await CallRecord.find({});
    console.log(allCalls);
    res.status(StatusCodes.OK).json({ hits: allCalls.length, allCalls });
  } catch (err) {
    throw new CustomError.NotFoundError("No records found");
  }
};

//  get single call
const getSingleCall = async (req, res) => {
  const { id: recordId } = req.params;

  if (!recordId) {
    throw new CustomError.BadRequestError("Invalid id provided");
  }

  try {
    const singleCall = await CallRecord.findOne({ _id: recordId });
    res.status(StatusCodes.OK).json({ singleCall });
  } catch (err) {
    throw new CustomError.NotFoundError(
      "Could not find record with id " + recordId,
    );
  }
};

//  create a call record

const createCall = async (req, res) => {
  console.log(req.body);
  if (!req.body) {
    throw new CustomError.BadRequestError("Please provide valid data");
  }
  const callRecord = await CallRecord.create(req.body);
  res.status(StatusCodes.OK).json({ callRecord });
};

//  delete a call record
const deleteCall = async (req, res) => {
  const { id: recordId } = req.params;

  const callRecord = await CallRecord.findOne({ _id: recordId });

  if (!callRecord) {
    throw new CustomError.NotFoundError("Record not found");
  }

  try {
    const deletedRecord = await CallRecord.findByIdAndRemove({ _id: recordId });
    res.status(StatusCodes.OK).json({ status: "deleted", deletedRecord });
  } catch (error) {
    throw new CustomError.BadRequestError("Please provide record id");
  }
};

//  update a call record
const updateCall = async (req, res) => {
  const { id: recordId } = req.params;

  const updatedRecord = await CallRecord.findOneAndUpdate(
    { _id: recordId },
    req.body,
    {
      new: true,
      runValidators: true,
    },
  );

  if (!updatedRecord) {
    throw new CustomError.NotFoundError(
      "Record with id " + recordId + " not found",
    );
  }
  res.status(StatusCodes.OK).json({ status: "deleted", updatedRecord });
};

module.exports = {
  getAllCalls,
  createCall,
  deleteCall,
  updateCall,
  getSingleCall,
};
