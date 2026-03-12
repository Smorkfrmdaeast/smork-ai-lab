// /api/ai.js
export default function handler(req, res) {
  const { question } = req.query;
  if (!question) {
    return res.status(400).json({ error: "No question provided" });
  }

  const q = question.toLowerCase().trim();

  // Predefined beginner-friendly answers
  const answers = {
    "what is html": "HTML (HyperText Markup Language) is the language used to structure web pages with headings, paragraphs, links, images, and more.",
    "what is css": "CSS (Cascading Style Sheets) is used to style HTML elements. You can change colors, fonts, layouts, and make pages look beautiful.",
    "what is javascript": "JavaScript is a programming language that makes web pages interactive — handling clicks, animations, form validation, and more.",
    "what is react": "React is a JavaScript library for building modern user interfaces, especially single-page applications with reusable components.",
    "what is github": "GitHub is a platform to host and collaborate on code projects using Git version control. You can share and manage your code online.",
    "what is vercel": "Vercel is a cloud platform for hosting front-end projects and serverless functions. Perfect for React, Next.js, or static sites.",
    "what is npm": "npm (Node Package Manager) is a tool to install and manage JavaScript packages and libraries for your projects.",
    "what is node.js": "Node.js is a runtime environment that allows you to run JavaScript on the server-side, outside the browser.",
    "what is frontend": "Frontend development is the part of web development that deals with what users see in their browser, like websites and apps.",
    "what is backend": "Backend development handles the server, database, and logic behind the scenes that powers your website or app."
  };

  // Match the question
  const answer = answers[q] || "🤖 SMORK AI says: Sorry, I don't have an answer for that yet. Try asking another beginner web dev question!";

  res.status(200).json({ answer });
}
