import db from '../../config/database.js';
import bcrypt from 'bcrypt';

class Administrator {
  static async create({ name_a, email, password_a, permission_id }) {

    if (!password_a || typeof password_a !== 'string') {
      throw new Error('Senha inválida');
    }

    const hashedPassword = await bcrypt.hash(password_a, 10);
    const [result] = await db.query(
      'INSERT INTO Administrator (name_a, email, password_a, permission_id) VALUES (?, ?, ?, ?)',
      [name_a, email, hashedPassword, permission_id]
    );
    return this.findById(result.insertId);
  }

  static async findById(id) {
    const [rows] = await db.query(
      'SELECT * FROM Administrator WHERE id = ?',
      [id]
    );
    return rows[0];
  }

  static async findByEmail(email) {
    const [rows] = await db.query(
      'SELECT * FROM Administrator WHERE email = ?',
      [email]
    );
    return rows[0];
  }

  static async update(id, { name_a, email, permission_id }) {
    await db.query(
      'UPDATE Administrator SET name_a = ?, email = ?, permission_id = ? WHERE id = ?',
      [name_a, email, permission_id, id]
    );
    return this.findById(id);
  }

  static async updatePassword(id, newPassword) {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await db.query(
      'UPDATE Administrator SET password_a = ? WHERE id = ?',
      [hashedPassword, id]
    );
  }

  static async delete(id) {
    await db.query('DELETE FROM Administrator WHERE id = ?', [id]);
  }

  static async comparePasswords(plainPassword, hashedPassword) {

    if (!plainPassword || !hashedPassword) {
      throw new Error('Senha e hash são necessários para fazer a comparação');
    }

    try {
      return await bcrypt.compare(plainPassword, hashedPassword);
    } catch (error) {
      console.error('Erro na comparação de senha:', error);
      throw new Error('Erro durante comparação de senha');
    }
  }
}

export default Administrator