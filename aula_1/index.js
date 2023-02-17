//crir a biblioteca express
const express = require("express");

//armazenar na váriavel app as funções da biblioteca express
const app = express();

//chamar a função listein para "escutar a porta em que vamos utilizar"
app.listen(8080);

//criando uma rota de teste
app.get('/teste', () => {
    console.log("nosso servidor está ativo na port 8080");
})

//criando uma rota de teste com HTML
app.get("/testeHTML", (req, res) => {
    res.send("<h1>Servidor ativo</h1>");
})