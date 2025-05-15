import AdministratorService from '../services/AdministratorService.js';
import { validationResult } from 'express-validator';

export const register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name_a, email, password_a, permission_id } = req.body;
    
    if (!password_a) {
      return res.status(400).json({ error: 'Senha é obrigatória' });
    }

    const admin = await AdministratorService.registerAdministrator({
      name_a,
      email,
      password_a,
      permission_id
    });
    
    res.status(201).json(admin);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password_a } = req.body;
    
    if (!email || !password_a) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios' });
    }

    const result = await AdministratorService.loginAdministrator(email, password_a);
    res.json(result);
  } catch (error) {
    if (error.message === 'Administrador não encontrado' || 
        error.message === 'Credenciais inválidas') {
      return res.status(401).json({ error: 'Email ou senha inválidos' });
    }
    next(error);
  }
};

export const getProfile = async (req, res, next) => {
  try {
    const admin = await AdministratorService.getAdministratorById(req.user.id);
    res.json(admin);
  } catch (error) {
    next(error);
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const admin = await AdministratorService.updateAdministrator(req.user.id, req.body);
    res.json(admin);
  } catch (error) {
    next(error);
  }
};

export const updatePassword = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log('Request body:', req.body);

    const { currentPassword, newPassword } = req.body;
    
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ 
        error: 'Senha nova e atual são obrigatórias' 
      });
    }

    await AdministratorService.updateAdministratorPassword(
      req.user.id,
      currentPassword,
      newPassword
    );
    
    res.json({ message: 'Senha atualizada com sucesso' });
  } catch (error) {
    if (error.message === 'Senha atual está incorreta') {
      return res.status(401).json({ error: error.message });
    }
    next(error);
  }
};

export const deleteProfile = async (req, res, next) => {
  try {
    await AdministratorService.deleteAdministrator(req.user.id);
    res.json({ message: 'Administrador excluído com sucesso' });
  } catch (error) {
    next(error);
  }
};