export default function handler(req, res) {
  const { question } = req.query;

  if (!question) return res.status(400).json({ error: "No question provided" });

  // Simulated AI response
  const answer = `🤖 SMORK AI says: You asked "${question}". This is a demo response.`;

  res.status(200).json({ answer });
}
