import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';
import Anthropic from '@anthropic-ai/sdk';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Initialize SDKs only if keys are present
const openai = process.env.OPENAI_API_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null;
const anthropic = process.env.ANTHROPIC_API_KEY ? new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY }) : null;
const genAI = process.env.GEMINI_API_KEY ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY) : null;

app.post('/api/chat', async (req, res) => {
  const { model, messages, temperature = 0.7, maxTokens = 1000 } = req.body;

  try {
    // Basic rate limit handling (mock)
    // Add real rate limiting library if needed

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // MOCK RESPONSE if no API keys are provided
    if (!openai && !anthropic && !genAI) {
      const mockResponse = `This is a mock response for **${model}** because no API keys were found in the server's \`.env\` file.\n\nPlease add your API keys to \`server/.env\` to connect to real models.`;
      
      let i = 0;
      const interval = setInterval(() => {
        if (i < mockResponse.length) {
          res.write(`data: ${JSON.stringify({ text: mockResponse[i] })}\n\n`);
          i++;
        } else {
          clearInterval(interval);
          res.write(`data: [DONE]\n\n`);
          res.end();
        }
      }, 20);
      
      req.on('close', () => clearInterval(interval));
      return;
    }

    // OpenAI Models (ChatGPT)
    if (model.includes('gpt') && openai) {
      const stream = await openai.chat.completions.create({
        model: model,
        messages: messages.map(m => ({ role: m.role, content: m.content })),
        temperature: temperature,
        max_tokens: maxTokens,
        stream: true,
      });

      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content || '';
        if (text) res.write(`data: ${JSON.stringify({ text })}\n\n`);
      }
      res.write(`data: [DONE]\n\n`);
      res.end();
    }
    
    // Anthropic Models (Claude)
    else if (model.includes('claude') && anthropic) {
      // Anthropic expects messages and an optional system prompt differently
      // Filter out 'system' role if needed, but for now map directly
      const stream = await anthropic.messages.create({
        model: model,
        max_tokens: maxTokens,
        temperature: temperature,
        messages: messages.map(m => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: m.content })),
        stream: true,
      });

      for await (const event of stream) {
        if (event.type === 'content_block_delta' && event.delta.text) {
          res.write(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`);
        }
      }
      res.write(`data: [DONE]\n\n`);
      res.end();
    }
    
    // Google Models (Gemini)
    else if (model.includes('gemini') && genAI) {
      const generativeModel = genAI.getGenerativeModel({ model: model });
      
      // Convert standard messages to Gemini format
      const history = messages.slice(0, -1).map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      }));
      
      const chat = generativeModel.startChat({
        history,
        generationConfig: {
          temperature: temperature,
          maxOutputTokens: maxTokens,
        },
      });

      const lastMessage = messages[messages.length - 1].content;
      const result = await chat.sendMessageStream(lastMessage);

      for await (const chunk of result.stream) {
        const text = chunk.text();
        if (text) res.write(`data: ${JSON.stringify({ text })}\n\n`);
      }
      res.write(`data: [DONE]\n\n`);
      res.end();
    }
    
    else {
      // Fallback if model requested but key missing
      res.write(`data: ${JSON.stringify({ text: `Error: API Key missing for model ${model}` })}\n\n`);
      res.write(`data: [DONE]\n\n`);
      res.end();
    }

  } catch (error) {
    console.error('API Error:', error);
    res.write(`data: ${JSON.stringify({ error: error.message || 'An error occurred during the request.' })}\n\n`);
    res.end();
  }
});

app.listen(PORT, () => {
  console.log(`AI Server running on port ${PORT}`);
});
