import OpenAI from "openai";

export default async function handler(req, res) {

  const { question } = req.query;

  if (!question) {
    return res.status(400).json({ error: "No question provided" });
  }

  try {

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [

        {
          role: "system",
          content: `
You are SMORK AI LAB.

You are a coding tutor that helps beginners understand:

HTML
CSS
JavaScript
React
GitHub
Web development basics

Explain things clearly and simply.
Give examples when possible.
Keep answers helpful for beginners learning programming.
`
        },

        {
          role: "user",
          content: question
        }

      ]
    });

    const answer = completion.choices[0].message.content;

    res.status(200).json({ answer });

  } catch (error) {

    console.error(error);
    res.status(500).json({ error: "AI server error" });

  }

}
