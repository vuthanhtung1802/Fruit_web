const express = require("express");
const router = express.Router();

const { chatWithAI } = require("../controller/ChatBotController");

router.post("/chat", chatWithAI);

module.exports = router;
