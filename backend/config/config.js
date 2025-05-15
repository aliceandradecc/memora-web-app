import dotenv from 'dotenv';

dotenv.config();

const config = {
  jwt: {
    secret: process.env.JWT_SECRET || 'your_jwt_secret',
    expiresIn: process.env.JWT_EXPIRES_IN || '1d'
  }
};

export default config