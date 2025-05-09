import express from "express"
import { AdministradorService } from "./services/AdministradorService.js"
import { LogInService } from "./services/LogInService.js"
import { PermissaoService } from "./services/PermissaoService.js"

const adminService = new AdministradorService()
const loginService = new LogInService()
const permissaoService = new PermissaoService()

const app = express()
app.use(express.json())

const port = 3333

// administrador
app.get("/administrador", (req, res) => {
    res.send(adminService.administradores)
}) 

app.post("/administrador", (req, res) => {
    adminService.cadastrarAdministrador(req.body.nome_de_usuario, req.body.email, req.body.senha, req.body.id_permissao)
    res.send("Ok")
}) 

app.put("/administrador", (req, res) => {
    adminService.editarAdministrador(req.body.email, req.body.novo_nome, req.body.novo_email, req.body.nova_senha, req.body.novo_status, req.body.novo_id_permissao)
    res.send("Ok")
}) 

app.delete("/administrador", (req, res) => {
    adminService.deletarAdministrador(req.body.email)
    res.send("Ok")
}) 

// login
app.get("/login", (req, res) => {
    res.send(loginService.logins)
}) 

app.post("/login", (req, res) => {
    loginService.gerarLogIn(req.body.data_login, req.body.data_expiracao, req.body.id_administrador)
    res.send("Ok")
}) 

// permissão
app.get("/permissao", (req, res) => {
    res.send(permissaoService.permissoes)
}) 

app.post("/permissao", (req, res) => {
    permissaoService.criarPermissao(req.body.descricao, req.body.nome)
    res.send("Ok")
}) 

app.put("/permissao", (req, res) => {
    permissaoService.editarPermissao(req.body.nome, req.body.novo_nome, req.body.nova_descricao)
    res.send("Ok")
}) 

app.delete("/permissao", (req, res) => {
    permissaoService.deletarPermissao(req.body.id_permissao)
    res.send("Ok")
}) 

app.listen(port)
