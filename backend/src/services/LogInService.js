import { LogIn } from "../models/LogInModel.js"

export class LogInService {
    constructor() {
        this._logins = []
        this._proximo_id = 1
    }

    // gerar novo login
    gerarLogIn(data_login, data_expiracao, id_administrador) {
        const novo_login = new LogIn(this._proximo_id++, data_login, data_expiracao, id_administrador)
        this._logins.push(novo_login)
        return novo_login
    }

    // buscar 1
    buscarLogIn(id_login) {
        const login = this._logins.find((item) => item.id_login === id_login)
        if (!login) throw new Error("Log in não encontrado.")
        return login
    }

    // listar todos
    get logins() {
        return this._logins
    }
}