export class LogIn {
    constructor(id_login, data_login, data_expiracao, id_administrador) {
        this._id_login = id_login
        this._data_login = data_login
        this._data_expiracao = data_expiracao
        this._id_administrador = id_administrador
    }

    get id_login() {
        return this._id_login
    }
}