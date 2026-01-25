const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const portfolioData = {
  personalInfo: {
    name: "SABREESH T K",
    email: "sabreesh13@gmail.com",
    contactNo: "6382756941",
    linkedIn: "http://linkedin.com/in/sabreesh-tk",
    github: "Sabreesh75",
    role: "MERN Stack Developer"
  },
  careerObjective: "I am a MERN stack developer passionate about building web applications using MongoDB, Express.js, React.js, and Node.js. I am particularly interested in developing both frontend and backend components through CRUD applications. I am eager to contribute my skills to your organization and further enhance my logical and coding abilities.",
  skills: {
    frontend: ["HTML", "CSS", "Bootstrap", "JavaScript (ES6+)", "React.js (Hooks, Context, Router)"],
    backend: ["Node.js", "Express.js", "RESTful API"],
    database: ["MongoDB", "Mongoose"],
    tools: ["GitHub", "VS Code", "NPM", "Postman"]
  },
  experience: [
    {
      company: "EqualizeRCM",
      role: "Senior AR Caller",
      location: "Coimbatore",
      duration: "02/08/2023 – 05/28/2025",
      description: [
        "Resolved claim denials and rejections by identifying errors and submitting corrected claims.",
        "Analyzed aged accounts receivable and followed up on claims over 30 days old.",
        "Mentored and trained junior AR callers on payer-specific guidelines and denial handling."
      ]
    }
  ],
  education: [
    {
      institution: "CMS College of Science and Commerce, Coimbatore",
      degree: "BSC Computer Science",
      year: "2018-2021"
    },
    {
      institution: "ST Thomas English Higher Secondary School",
      degree: "SSLC / HSC",
      year: "2017-2018"
    }
  ]
};

app.get('/', (req, res) => {
  res.send('Portfolio Backend is Running');
});

app.get('/api/portfolio-data', (req, res) => {
  res.json(portfolioData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
