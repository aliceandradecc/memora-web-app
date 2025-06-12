import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import pool from '../config/database.js';
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv'

dotenv.config()
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);

app.get('/api/administradores', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, name_a AS title FROM Administrator');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar administradores' });
  }
});

app.get('/api/permissoes', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT permission_id, permission_name AS title FROM Permission');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar permissões' });
  }
});

app.get('/api/publicacoes', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT publication_id, publication_name AS title FROM Publication');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar publicações' });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: 'Algo deu errado no servidor' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;