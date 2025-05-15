import express from 'express';
import { check } from 'express-validator';
import { 
  register, 
  login, 
  getProfile, 
  updateProfile, 
  updatePassword, 
  deleteProfile 
} from '../controllers/authController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// rotas públicas
router.post(
  '/register',
  [
    check('name_a', 'Nome é obrigatório').not().isEmpty(),
    check('email', 'Por favor, inclua um email válido').isEmail(),
    check('password_a', 'A senha deve ter ao menos 6 caracteres')
      .exists()
      .isLength({ min: 6 }),
    check('permission_id', 'O ID da permissão é obrigatório').isInt()
  ],
  register
);

router.post(
  '/login',
  [
    check('email', 'Por favor, inclua um email válido')
      .isEmail()
      .normalizeEmail(),
    check('password_a', 'A senha é obrigatória')
      .exists()
      .notEmpty()
  ],
  login
);

// rotas protegidas
router.get('/profile', authMiddleware, getProfile);
router.put(
  '/profile',
  authMiddleware,
  [
    check('name_a', 'Nome é obrigatório').optional().not().isEmpty(),
    check('email', 'Por favor, inclua um email válido').optional().isEmail(),
    check('permission_id', 'ID de permissão precisa ser uma integer').optional().isInt()
  ],
  updateProfile
);
router.put(
  '/password',
  authMiddleware,
  [
    check('currentPassword', 'Senha atual é obrigatória')
      .not().isEmpty()
      .withMessage('Senha atual não pode estar vazia'),
    check('newPassword', 'Nova senha precisa ter ao menos 6 caracteres')
      .isLength({ min: 6 })
      .withMessage('Snha precisa ter ao menos 6 caracteres')
      .not().equals(req => req.body.currentPassword)
      .withMessage('Nova senha precisa ser diferente da senha atual')
  ],
  updatePassword
);
router.delete('/profile', authMiddleware, deleteProfile);

export default router;