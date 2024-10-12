const express = require('express');
const server = express();
const produtos = require('./src/data/produtos.json');

server.get('/produtos', (req,res) => {
    return res.json(produtos)
})

server.listen(3000, () => {
    console.log('Servidor está funcionando')
});