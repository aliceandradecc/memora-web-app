import express from "express"

const app = express()
const port = 3333

app.get("/", (req, res) => {
    res.send("Ok")
}) 

app.post("/", (req, res) => {
    
}) 

app.put("/", (req, res) => {
    
}) 

app.patch("/", (req, res) => {
    
}) 

app.delete("/", (req, res) => {
    
}) 

app.listen(port)
