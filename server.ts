import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const projectRoot = process.cwd();

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json({ limit: '10mb' }));

  // AI Advisor & Generator Endpoint using Google GenAI SDK
  app.post('/api/ai/advisor', async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(400).json({ error: 'GEMINI_API_KEY is not configured in environment.' });
      }

      const { prompt, type, context } = req.body;

      const ai = new GoogleGenAI({ apiKey });

      let systemInstruction = `You are the world's top International Education Consultant & Scholarship Expert specializing in assisting Pakistani Computer Science (MSCS) students (specifically from Karachi / Pakistan) applying for fully funded scholarships (Fulbright, Erasmus Mundus, DAAD, MEXT, GKS, CSC, Knight-Hennessy, RTP, Eiffel, Stipendium Hungaricum, etc.). Provide concise, highly actionable, encouraging, and accurate advice tailored to Pakistani documents (HEC, IBCC, MOFA attestation), Karachi offices, and academic background.`;

      if (type === 'sop_review') {
        systemInstruction += ` Analyze the user's SOP draft, provide specific strengths, weaknesses, tone improvements, and an improved paragraph suggestion.`;
      } else if (type === 'professor_email') {
        systemInstruction += ` Draft a high-converting, concise, professional cold email to a prospective MSCS professor/supervisor mentioning research alignment, academic background, and funding inquiry.`;
      } else if (type === 'attestation_query') {
        systemInstruction += ` Answer specific questions about HEC, IBCC, MOFA, or Embassy attestation for Pakistani degree holders with step-by-step guidance.`;
      }

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          {
            role: 'user',
            parts: [{ text: `${context ? 'Context: ' + JSON.stringify(context) + '\n\n' : ''}${prompt}` }]
          }
        ],
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const text = response.text || 'No response generated.';
      return res.json({ result: text });
    } catch (err: any) {
      console.error('Gemini API Error:', err);
      return res.status(500).json({ error: err.message || 'Failed to communicate with AI model.' });
    }
  });

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Vite integration in development mode
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(projectRoot, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
