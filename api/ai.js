export default function handler(req, res) {

const { question } = req.query;

if (!question) {
return res.status(400).json({ error: "No question provided" });
}

const q = question.toLowerCase();

/* HTML */

if (q.includes("html")) {
return res.status(200).json({
answer: "HTML (HyperText Markup Language) is the standard language used to structure web pages using elements like headings, paragraphs, images, and links."
});
}

/* CSS */

if (q.includes("css")) {
return res.status(200).json({
answer: "CSS (Cascading Style Sheets) is used to style and design web pages. It controls colors, layouts, fonts, spacing, and responsive design."
});
}

/* JavaScript */

if (q.includes("javascript") || q.includes("js")) {
return res.status(200).json({
answer: "JavaScript is a programming language that makes websites interactive. It handles events, animations, API calls, and dynamic content."
});
}

/* React */

if (q.includes("react")) {
return res.status(200).json({
answer: "React is a popular JavaScript library used to build modern user interfaces with reusable components."
});
}

/* Git */

if (q.includes("git")) {
return res.status(200).json({
answer: "Git is a version control system that tracks code changes and allows developers to collaborate efficiently."
});
}

/* GitHub */

if (q.includes("github")) {
return res.status(200).json({
answer: "GitHub is a platform where developers store and collaborate on code repositories using Git."
});
}

/* API */

if (q.includes("api")) {
return res.status(200).json({
answer: "An API (Application Programming Interface) allows different software systems to communicate and exchange data."
});
}

/* Backend */

if (q.includes("backend")) {
return res.status(200).json({
answer: "Backend development handles servers, databases, APIs, and the logic that powers applications behind the scenes."
});
}

/* Frontend */

if (q.includes("frontend")) {
return res.status(200).json({
answer: "Frontend development focuses on the visual part of websites users interact with using HTML, CSS, and JavaScript."
});
}

/* Node */

if (q.includes("node")) {
return res.status(200).json({
answer: "Node.js is a runtime environment that allows JavaScript to run on the server side."
});
}

/* Database */

if (q.includes("database")) {
return res.status(200).json({
answer: "A database is used to store, organize, and manage data for applications."
});
}

/* SQL */

if (q.includes("sql")) {
return res.status(200).json({
answer: "SQL (Structured Query Language) is used to manage and query relational databases."
});
}

/* MongoDB */

if (q.includes("mongodb")) {
return res.status(200).json({
answer: "MongoDB is a NoSQL database that stores data in flexible JSON-like documents."
});
}

/* Vercel */

if (q.includes("vercel")) {
return res.status(200).json({
answer: "Vercel is a cloud platform used to deploy modern web applications and serverless APIs."
});
}

/* Hosting */

if (q.includes("hosting")) {
return res.status(200).json({
answer: "Hosting is a service that makes your website accessible on the internet by storing it on a server."
});
}

/* Domain */

if (q.includes("domain")) {
return res.status(200).json({
answer: "A domain is the address people type in their browser to visit a website, like example.com."
});
}

/* Programming */

if (q.includes("programming")) {
return res.status(200).json({
answer: "Programming is the process of writing code to create software, applications, and websites."
});
}

/* Algorithm */

if (q.includes("algorithm")) {
return res.status(200).json({
answer: "An algorithm is a step-by-step set of instructions used to solve a problem."
});
}

/* Default response */

return res.status(200).json({
answer: "🤖 SMORK AI LAB: I specialize in beginner tech topics like HTML, CSS, JavaScript, React, APIs, GitHub, hosting, and programming. Try asking about those!"
});

    }
