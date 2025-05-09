import { Permissao } from "../models/PermissaoModel.js"

export class PermissaoService {
    constructor() {
        this._permissoes = []
        this._proximo_id = 1
    }

    // criar nova
    criarPermissao(descricao, nome) {
        const nova_permissao = new Permissao(this._proximo_id++, descricao, nome)
        this._permissoes.push(nova_permissao)
        return nova_permissao
    }

    // editar
    editarPermissao(nome, novo_nome, nova_descricao) {
        const permissao = this.buscarPermissao(nome)
        permissao.nome = novo_nome
        permissao.descricao = nova_descricao
        return descricao
    }

    // deletar
    deletarPermissao(id_permissao) {
        const tamanho_original = this._permissoes.length;
        this._permissoes = this._permissoes.filter(item => item.id_permissao !== id_permissao)
        if (this._permissoes.length === tamanho_original) throw new Error("Permissão não encontrada.")
    }

    // buscar 1
    buscarPermissao(nome) {
        const permissao = this._permissoes.find((item) => item.nome === nome)
        if (!permissao) throw new Error("Permissão não encontrada.")
        return permissao
    }

    // listar todas
    get permissoes() {
        return this._permissoes
    }
}