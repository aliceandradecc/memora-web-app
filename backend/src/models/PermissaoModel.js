export class Permissao {
    constructor(id_permissao, descricao, nome) {
        this._id_permissao = id_permissao
        this._descricao = descricao
        this._nome = nome
    }

    get id_permissao() {
        return this._id_permissao
    }

    get nome() {
        return this._nome
    }

    set nome(novo_nome) {
        this._nome = novo_nome
    }

    set descricao(nova_descricao) {
        this._descricao = nova_descricao
    }
}