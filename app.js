"use strict"
import express from 'express';
import expresssession from 'express-session';
// import { check, validationResult} from 'express-validator';
import ejs from "ejs";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';

import index from "./routes/indexRouter.js";
import user from "./routes/userRouter.js";
import admin from "./routes/adminRouter.js";

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(expresssession({ secret: "sessionsecret", saveUninitialized: true, resave: true }));
app.use(cookieParser());
app.use(express.json());

app.use(express.static('./public'));
app.use("/uploads", express.static('uploads'));



app.use('/', index);
app.use('/user', user);
app.use('/admin', admin);

// AI Chat
app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await fetch(process.env.OPENROUTER_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'HTTP-Referer': req.headers.referer || 'http://localhost:3000',
        'X-Title': 'Chatbot',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'openai/gpt-4o',
        messages: [{ role: 'user', content: message }],
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    res.json({ reply: data.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ reply: 'Sorry, there was an error processing your request.' });
  }
});



app.listen(PORT, () => {
  console.log(`server running  : http://localhost:${PORT}`);
});