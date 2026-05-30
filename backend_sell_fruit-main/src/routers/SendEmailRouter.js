const express = require("express");
const router = express.Router();

const { sendEmail } = require("../util/SendEmail");

router.get("/sendEmail", sendEmail);

module.exports = router;
