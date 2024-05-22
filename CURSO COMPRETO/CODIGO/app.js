// IMPORTAÇÕES
var express = require('express');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var cors = require('cors');
var path = require('path');
var port = 8000;

var app = express();
app.use(bodyParser());
app.use(cors());
app.use(expressLayouts);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ROTAS
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/2', (req, res) => {
    res.render('index2');
});

app.get('/3', (req, res) => {
    const data = {
        title: 'Bem-vindo ao Meu Site',
        message: 'Esta é uma mensagem dinâmica!',
        products: [
            { name: 'Produto 1', price: 10 },
            { name: 'Produto 2', price: 20 },
            { name: 'Produto 3', price: 30 }
        ]
    };

    res.render('index3', { data });
});

app.get('/4', (req, res) => {
    const produtos = [
        { nome: 'Produto 1', preco: 10 },
        { nome: 'Produto 2', preco: 20 },
        { nome: 'Produto 3', preco: 30 }
    ];

    res.render('index4', { produtos });
});

app.get('/5', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    res.render('index5', { name, age });
});

app.get('/6', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    res.render('index6', { name, age });
});


app.get('/7', (req, res) => {
    res.render('index7');
});

app.get('/about', (req, res) => {
    res.render('about');
});

// START SERVIDOR
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});