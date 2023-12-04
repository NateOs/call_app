const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");
const {
  getAllCalls,
  createCall,
  deleteCall,
  updateCall,
  getSingleCall,
} = require("../controllers/callController");

router.route("/").get(getAllCalls).post(createCall);
router.route("/:id").delete(deleteCall).patch(updateCall).get(getSingleCall);

//TODO add auth and authorization
module.exports = router;
