export default function handler(req, res) {

const { question } = req.query;

if (!question) {
return res.status(400).json({ error: "No question provided" });
}

const q = question.toLowerCase();

/* MENU / HELP */

if (
q.includes("what can you do") ||
q.includes("help") ||
q.includes("menu") ||
q.includes("how can you help")
) {
return res.status(200).json({
answer: `🤖 SMORK AI LAB

I can answer beginner tech questions.

Here are some things you can ask:

🌐 WEB DEVELOPMENT
• What is HTML
• What is CSS
• What is JavaScript
• What is React

💻 PROGRAMMING
• What is programming
• What is an algorithm
• What is a variable
• What is a function

⚙️ DEVELOPMENT TOOLS
• What is Git
• What is GitHub
• What is Vercel
• What is an API

🗄 BACKEND & DATABASE
• What is backend
• What is Node.js
• What is SQL
• What is MongoDB

🚀 GENERAL TECH
• What is web development
• What is hosting
• What is a domain

Just ask any beginner coding question and I will explain it simply.`
});
}

/* HTML */

if (q.includes("html")) {
return res.status(200).json({
answer:"HTML (HyperText Markup Language) is the standard language used to structure web pages using elements like headings, paragraphs, images, and links."
});
}

/* CSS */

if (q.includes("css")) {
return res.status(200).json({
answer:"CSS (Cascading Style Sheets) is used to style web pages. It controls colors, layout, spacing, fonts, and responsive design."
});
}

/* JAVASCRIPT */

if (q.includes("javascript") || q.includes("js")) {
return res.status(200).json({
answer:"JavaScript is a programming language that makes websites interactive. It allows you to handle clicks, animations, API calls, and dynamic content."
});
}

/* REACT */

if (q.includes("react")) {
return res.status(200).json({
answer:"React is a JavaScript library used to build modern user interfaces with reusable components."
});
}

/* PROGRAMMING */

if (q.includes("programming")) {
return res.status(200).json({
answer:"Programming is the process of writing instructions (code) that computers follow to perform tasks."
});
}

/* ALGORITHM */

if (q.includes("algorithm")) {
return res.status(200).json({
answer:"An algorithm is a step-by-step process used to solve a problem or perform a calculation."
});
}

/* VARIABLE */

if (q.includes("variable")) {
return res.status(200).json({
answer:"A variable is a container used to store data in programming."
});
}

/* FUNCTION */

if (q.includes("function")) {
return res.status(200).json({
answer:"A function is a reusable block of code designed to perform a specific task."
});
}

/* GIT */

if (q.includes("git")) {
return res.status(200).json({
answer:"Git is a version control system used to track changes in code and collaborate with other developers."
});
}

/* GITHUB */

if (q.includes("github")) {
return res.status(200).json({
answer:"GitHub is a platform where developers store and manage their code repositories using Git."
});
}

/* API */

if (q.includes("api")) {
return res.status(200).json({
answer:"An API (Application Programming Interface) allows different software systems to communicate and exchange data."
});
}

/* BACKEND */

if (q.includes("backend")) {
return res.status(200).json({
answer:"Backend development handles servers, databases, and the logic that powers applications behind the scenes."
});
}

/* FRONTEND */

if (q.includes("frontend")) {
return res.status(200).json({
answer:"Frontend development focuses on the part of a website users see and interact with using HTML, CSS, and JavaScript."
});
}

/* NODE */

if (q.includes("node")) {
return res.status(200).json({
answer:"Node.js is a runtime environment that allows JavaScript to run outside the browser on servers."
});
}

/* DATABASE */

if (q.includes("database")) {
return res.status(200).json({
answer:"A database is used to store and manage data for applications."
});
}

/* SQL */

if (q.includes("sql")) {
return res.status(200).json({
answer:"SQL (Structured Query Language) is used to create, read, update, and manage relational databases."
});
}

/* MONGODB */

if (q.includes("mongodb")) {
return res.status(200).json({
answer:"MongoDB is a NoSQL database that stores data in flexible JSON-like documents."
});
}

/* VERCEL */

if (q.includes("vercel")) {
return res.status(200).json({
answer:"Vercel is a cloud platform used to deploy modern web applications and serverless APIs."
});
}

/* HOSTING */

if (q.includes("hosting")) {
return res.status(200).json({
answer:"Web hosting is a service that allows websites to be stored on servers and accessed on the internet."
});
}

/* DOMAIN */

if (q.includes("domain")) {
return res.status(200).json({
answer:"A domain is the web address people type in a browser to visit a website."
});
}

/* WEB DEVELOPMENT */

if (q.includes("web development")) {
return res.status(200).json({
answer:"Web development is the process of building and maintaining websites using technologies like HTML, CSS, and JavaScript."
});
}

/* DEFAULT */

return res.status(200).json({
answer:"🤖 SMORK AI LAB: I specialize in beginner tech topics like HTML, CSS, JavaScript, React, APIs, GitHub, databases, hosting, and programming. Try asking one of those!"
});

}
