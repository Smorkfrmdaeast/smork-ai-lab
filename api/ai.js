export default function handler(req, res) {

  const { question } = req.query;

  if (!question) {
    return res.status(400).json({ error: "No question provided" });
  }

  const answer = `SMORK AI DEMO: You asked "${question}".`;

  res.status(200).json({ answer });

}
