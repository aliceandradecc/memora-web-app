class Administrador {
    constructor(id_administrador, nome_de_usuario, email, senha, status) {
        this._id_administrador = id_administrador
        this._nome_de_usuario = nome_de_usuario
        this._email = email
        this._senha = senha
        this._status = status
    }
}

module.exports = Administrador