import Administrator from '../models/AdministratorModel.js';
import jwt from 'jsonwebtoken';
import config from '../../config/config.js';

class AdministratorService {
  static async registerAdministrator({ name_a, email, password_a, permission_id }) {
    if (!password_a) {
      throw new Error('Senha é obrigatória');
    }

    const existingAdmin = await Administrator.findByEmail(email);
    if (existingAdmin) {
      throw new Error('Esse email já está sendo utilizado');
    }
    
    return await Administrator.create({ name_a, email, password_a, permission_id });
  }

  static async loginAdministrator(email, password_a) {
  // Validate inputs
  if (!email || !password_a) {
    throw new Error('Email e senha são obrigatórios');
  }

  const admin = await Administrator.findByEmail(email);
  if (!admin) {
    throw new Error('Administrador não encontrado');
  }

  if (!admin.password_a) {
    throw new Error('Registro de administrador inválido');
  }

  const isMatch = await Administrator.comparePasswords(password_a, admin.password_a);
  if (!isMatch) {
    throw new Error('Credenciais inválidas');
  }

  const token = jwt.sign(
    { id: admin.id, email: admin.email, permission: admin.permission_name },
    config.jwt.secret,
    { expiresIn: config.jwt.expiresIn }
  );

  // omitir dados sensíveis da resposta
  const { password_a: _, ...adminData } = admin;
  return { admin: adminData, token };
}

  static async getAdministratorById(id) {
    return await Administrator.findById(id);
  }

  static async updateAdministrator(id, updateData) {
    if (updateData.email) {
      const existingAdmin = await Administrator.findByEmail(updateData.email);
      if (existingAdmin && existingAdmin.id !== parseInt(id)) {
        throw new Error('Esse email já está sendo utilizado');
      }
    }
    
    return await Administrator.update(id, updateData);
  }

  static async updateAdministratorPassword(id, currentPassword, newPassword) {
    const admin = await Administrator.findById(id);
    if (!admin) {
      throw new Error('Administrador não encontrado');
    }

    const isMatch = await Administrator.comparePasswords(currentPassword, admin.password_a);
    if (!isMatch) {
      throw new Error('Senha atual está incorreta');
    }

    await Administrator.updatePassword(id, newPassword);
  }

  static async deleteAdministrator(id) {
    return await Administrator.delete(id);
  }
}

export default AdministratorService