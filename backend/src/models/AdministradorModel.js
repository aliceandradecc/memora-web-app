import { StatusAdministrador } from "../enums/statusEnum.js"

export class Administrador {
    constructor(id_administrador, nome_de_usuario, email, senha, id_permissao) {
        this._id_administrador = id_administrador
        this._nome_de_usuario = nome_de_usuario
        this._email = email
        this._senha = senha
        this._status = StatusAdministrador.ATIVO
        this._id_permissao = id_permissao
    }

    get id_administrador() {
        return this._id_administrador
    }

    get nome_de_usuario() {
        return this._nome_de_usuario
    }

    get email() {
        return this._email
    }

    get senha() {
        return this._senha
    }

    get status() {
        return this._status
    }

    get id_permissao() {
        return this._id_permissao
    }

    set nome_de_usuario(novo_nome) {
        this._nome_de_usuario = novo_nome
    }

    set email(novo_email) {
        this._email = novo_email
    }

    set senha(nova_senha) {
        this._senha = nova_senha
    }

    set status(novo_status) {
        this._status = novo_status
    }

    set id_permissao(novo_id_permissao) {
        this._id_permissao = novo_id_permissao
    }
}