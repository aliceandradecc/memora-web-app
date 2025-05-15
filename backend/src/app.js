import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import pool from '../config/database.js';
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv'

dotenv.config()
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: 'Algo deu errado no servidor' });
});

// iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;