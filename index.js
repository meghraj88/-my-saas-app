import express from 'express';
import { supabase } from './supabaseClient.js'; // Supabase client import

const app = express();
app.use(express.json());

const PORT = 3000;

// Default Route
app.get('/', (req, res) => {
  res.send('🚀 SaaS App is running! Ready to build with Supabase + Gemini AI.');
});

// Example Supabase Route: Get users
app.get('/users', async (req, res) => {
  const { data, error } = await supabase.from('auth.users').select('id, email');
  
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  
  res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
