export default async function handler(req, res) {

  const { question } = req.query;

  if (!question) {
    return res.status(400).json({ error: "No question provided" });
  }

  try {

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are SMORK AI LAB, a helpful coding tutor for HTML, CSS, JavaScript, and React."
          },
          {
            role: "user",
            content: question
          }
        ]
      })
    });

    const data = await response.json();

    const answer = data.choices?.[0]?.message?.content || "No response from AI";

    res.status(200).json({ answer });

  } catch (error) {

    console.error(error);
    res.status(500).json({ error: "AI server error" });

  }

}
