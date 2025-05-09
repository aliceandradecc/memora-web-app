import { Administrador } from "../models/AdministradorModel.js"

export class AdministradorService {
    constructor() {
        this._administradores = []
        this._proximo_id = 1
    }

    // cadastrar
    cadastrarAdministrador(nome_de_usuario, email, senha, id_permissao) {
        const novo_administrador = new Administrador(this._proximo_id++, nome_de_usuario, email, senha, id_permissao)
        this._administradores.push(novo_administrador)
        return novo_administrador
    }

    // autenticar
    autenticarAdministrador(email, senha) {
        const administrador = this._administradores.find((item) => item.email === email && item.senha === senha)
        if (!administrador) throw new Error("Email ou senha inválidos.")
        return administrador
    }

    // editar
    editarAdministrador(email, novo_nome, novo_email, nova_senha, novo_status, novo_id_permissao) {
        const administrador = this.buscarAdministrador(email)
        administrador.nome_de_usuario = novo_nome
        administrador.email = novo_email
        administrador.senha = nova_senha
        administrador.status = novo_status
        administrador.id_permissao = novo_id_permissao
        return administrador
    }

    // deletar
    deletarAdministrador(email) {
        const tamanho_original = this._administradores.length;
        this._administradores = this._administradores.filter(item => item.email !== email)
        if (this._administradores.length === tamanho_original) throw new Error("Administrador não encontrado.")
    }

    // buscar 1
    buscarAdministrador(email) {
        const administrador = this._administradores.find((item) => item.email === email)
        if (!administrador) throw new Error("Administrador não encontrado.")
        return administrador
    }

    // listar todos
    get administradores() {
        return this._administradores
    }
}