const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const systemPrompt = `Bạn là một chatbot hỗ trợ khách hàng cho cửa hàng bán trái cây trực tuyến.
Nhiệm vụ của bạn:
- Tư vấn về sản phẩm trái cây (chất lượng, tác dụng sức khỏe, cách bảo quản)
- Hỗ trợ khách hàng về đơn hàng, giao hàng, thanh toán
- Trả lời các câu hỏi thường gặp
- Thân thiện, chuyên nghiệp, nhanh chóng

Luôn trả lời bằng tiếng Việt.`;

exports.chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const model = genAI.getGenerativeModel({ model: "gemma-3-4b-it" });
    const fullPrompt = systemPrompt + "\n\nKhách hàng: " + message;

    const result = await model.generateContent(fullPrompt);
    const response = result.response.text();

    res.status(200).json({ response });
  } catch (error) {
    console.error("Google AI Error:", error);
    res.status(500).json({
      error: "Failed to get response from AI",
      message: error.message,
    });
  }
};
