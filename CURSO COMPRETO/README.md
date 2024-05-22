# INSTRUÇÕES
## 01) VISÃO GERAL
1. **Propósito e Funcionalidade**:
   - EJS é uma linguagem de modelagem que permite a geração dinâmica de conteúdo HTML usando JavaScript.
   - Ele é projetado para ser incorporado em arquivos HTML, facilitando a criação de páginas da web dinâmicas e interativas.

2. **Sintaxe Simples**:
   - A sintaxe do EJS é semelhante à do JavaScript, o que facilita para os desenvolvedores escreverem e entenderem os templates.
   - Tags especiais são usadas para incorporar código JavaScript e gerar conteúdo dinâmico dentro do HTML.

3. **Incorporação de Código JavaScript**:
   - `<% ... %>`: Usado para incorporar código JavaScript que não produz saída diretamente.
   - `<%= ... %>`: Utilizado para imprimir o resultado de uma expressão JavaScript dentro do HTML.
   - `<%- ... %>`: Similar ao `<%= ... %>`, mas renderiza o conteúdo HTML escapando as tags HTML.

4. **Reutilização de Templates**:
   - EJS facilita a criação de templates reutilizáveis, permitindo a modularização e a redução da duplicação de código.
   - Os arquivos EJS podem ser incluídos uns nos outros para criar componentes reutilizáveis.

5. **Injeção de Dados Dinâmicos**:
   - Os dados dinâmicos podem ser injetados nos templates, permitindo a personalização do conteúdo com base em variáveis, dados de bancos de dados, ou qualquer outra fonte de dados.

6. **Integração com Express e Node.js**:
   - EJS é frequentemente usado em conjunto com o framework Express.js no ambiente Node.js para criar aplicativos da web dinâmicos.
   - Express.js pode ser configurado para usar o EJS como seu mecanismo de visualização padrão.

7. **Compatibilidade**:
   - EJS é compatível com uma variedade de ambientes e frameworks JavaScript, tornando-o uma escolha flexível para diferentes tipos de projetos.

Essa visão geral resume os principais aspectos do EJS e destaca seu papel na criação de aplicativos da web dinâmicos e interativos.

## 02) PRIMEIROS PASSOS
1. **Instalação**:
   - Certifique-se de ter o Node.js instalado em seu sistema.
   - Crie um novo diretório para o seu projeto e navegue até ele no terminal.
   - Inicialize um novo projeto Node.js executando `npm init -y` para criar um arquivo `package.json`.
   - Instale o EJS como uma dependência do seu projeto executando `npm install ejs`.

2. **Configuração do Express (opcional)**:
   - Se você estiver usando o Express.js, configure-o para usar o EJS como seu mecanismo de visualização padrão.
   - Crie um arquivo `app.js` e configure o Express para usar o EJS:

     ```javascript
     const express = require('express');
     const app = express();

     app.set('view engine', 'ejs');
     ```

3. **Criação de um Arquivo EJS**:
   - Dentro do diretório do seu projeto, crie um diretório chamado `views`.
   - Dentro do diretório `views`, crie um novo arquivo EJS. Por exemplo, `index.ejs`.
   - Escreva o conteúdo HTML do seu arquivo EJS, incorporando código JavaScript conforme necessário.

4. **Renderização do Arquivo EJS**:
   - Se você estiver usando o Express, crie uma rota para renderizar o arquivo EJS.
   - Adicione o seguinte código ao seu arquivo `app.js` para criar uma rota para renderizar o arquivo `index.ejs`:

     ```javascript
     app.get('/', (req, res) => {
         res.render('index', { /* dados opcionais */ });
     });
     ```

5. **Iniciando o Servidor**:
   - Inicie o servidor Express executando `node app.js`.
   - Visite `http://localhost:3000` no seu navegador para ver o resultado.

Isso deve levá-lo a um ponto em que você pode criar e renderizar seus primeiros arquivos EJS em um aplicativo Express básico. Experimente criar mais arquivos EJS e explorar recursos como inclusão de arquivos, iteração e condicionais para construir interfaces de usuário dinâmicas.

## 03) INJETANDO VALORES NAS VISUALIZAÇÕES
Para injetar valores dinâmicos nas visualizações do EJS, você pode passar dados como um objeto para o método `res.render()` no Express.js. Esses dados podem ser acessados dentro dos arquivos EJS usando a sintaxe `<%= ... %>` para imprimir os valores. Aqui está um exemplo de como fazer isso:

Suponha que você tenha um aplicativo Express com um arquivo `app.js` e um arquivo de visualização `index.ejs`. Aqui está como você pode passar e injetar valores dinâmicos:

1. **No arquivo `app.js`**:

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Configurando o EJS como mecanismo de visualização
app.set('view engine', 'ejs');

// Rota para renderizar a visualização index.ejs
app.get('/', (req, res) => {
    // Dados a serem injetados na visualização
    const data = {
        title: 'Bem-vindo ao Meu Site',
        message: 'Esta é uma mensagem dinâmica!',
        products: [
            { name: 'Produto 1', price: 10 },
            { name: 'Produto 2', price: 20 },
            { name: 'Produto 3', price: 30 }
        ]
    };

    // Renderiza a visualização index.ejs e passa os dados
    res.render('index', { data });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
```

2. **No arquivo `index.ejs`**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= data.title %></title>
</head>
<body>
    <header>
        <h1><%= data.title %></h1>
    </header>
    <main>
        <section>
            <p><%= data.message %></p>
        </section>
        <section>
            <h2>Produtos</h2>
            <ul>
                <% data.products.forEach(function(product) { %>
                    <li><%= product.name %> - Preço: <%= product.price %> R$</li>
                <% }); %>
            </ul>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Meu Site</p>
    </footer>
</body>
</html>
```

Neste exemplo:

- No arquivo `app.js`, estamos passando um objeto `data` para a função `res.render()`, que contém valores dinâmicos como `title`, `message` e `products`.
- No arquivo `index.ejs`, esses valores são acessados usando `<%= data.title %>`, `<%= data.message %>` e `<%= data.products %>`, respectivamente.

Esses valores dinâmicos serão injetados na visualização renderizada e serão exibidos na página HTML final. Este é apenas um exemplo básico de como injetar valores nas visualizações do EJS usando o Express.js.

## 04) FOR LOOPS E ARRAYS
Quando você precisa iterar sobre um array dentro de um arquivo EJS usando um loop for, pode fazer isso da seguinte maneira:

Suponha que você tenha um array de produtos que deseja exibir em sua visualização. Aqui está como você pode fazer isso:

1. **No arquivo `app.js`**:

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Configurando o EJS como mecanismo de visualização
app.set('view engine', 'ejs');

// Rota para renderizar a visualização index.ejs
app.get('/', (req, res) => {
    // Array de produtos
    const produtos = [
        { nome: 'Produto 1', preco: 10 },
        { nome: 'Produto 2', preco: 20 },
        { nome: 'Produto 3', preco: 30 }
    ];

    // Renderiza a visualização index.ejs e passa o array de produtos
    res.render('index', { produtos });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
```

2. **No arquivo `index.ejs`**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Produtos</title>
</head>
<body>
    <h1>Lista de Produtos</h1>
    <ul>
        <% for (let i = 0; i < produtos.length; i++) { %>
            <li><%= produtos[i].nome %> - Preço: <%= produtos[i].preco %> R$</li>
        <% } %>
    </ul>
</body>
</html>
```

Neste exemplo:

- No arquivo `app.js`, estamos passando o array de produtos para a função `res.render()`.
- No arquivo `index.ejs`, estamos usando um loop for para iterar sobre o array `produtos`. Para cada produto, estamos exibindo seu nome e preço dentro de uma lista HTML `<ul>`.

Dessa forma, a visualização renderizada exibirá uma lista de produtos com seus nomes e preços. Este é um exemplo simples de como usar loops for em arquivos EJS para iterar sobre arrays e exibir conteúdo dinâmico em uma página da web.

## 05) IF/ELSE STATEMENT
Suponha que você tenha um aplicativo Express que passa um objeto `usuario` para a visualização, e você deseja exibir uma mensagem diferente com base no fato de o usuário estar logado ou não.

1. **No arquivo `app.js`**:

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Configurando o EJS como mecanismo de visualização
app.set('view engine', 'ejs');

// Rota para renderizar a visualização index.ejs
app.get('/', (req, res) => {
    // Simulando se o usuário está logado ou não
    const usuario = {
        logado: false,
        nome: 'Usuário'
    };

    // Renderiza a visualização index.ejs e passa o objeto usuario
    res.render('index', { usuario });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
```

2. **No arquivo `index.ejs`**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de If/Else em EJS</title>
</head>
<body>
    <% if (usuario.logado) { %>
        <h1>Bem-vindo de volta, <%= usuario.nome %>!</h1>
    <% } else { %>
        <h1>Por favor, faça login.</h1>
    <% } %>
</body>
</html>
```

Neste exemplo:

- No arquivo `app.js`, estamos passando um objeto `usuario` para a função `res.render()`, com a propriedade `logado` definida como `false`.
- No arquivo `index.ejs`, estamos usando uma declaração `if/else` para verificar se o usuário está logado ou não. Dependendo do valor da propriedade `logado` do objeto `usuario`, exibimos uma mensagem de boas-vindas ou uma mensagem solicitando que o usuário faça login.

Dessa forma, a visualização renderizada exibirá uma mensagem diferente com base no estado de logon do usuário. Este é um exemplo básico de como usar declarações `if/else` em arquivos EJS para controlar o fluxo de exibição de conteúdo.

## 06) PARTIALS
Para organizar melhor seu código e reutilizar componentes comuns em suas páginas EJS, você pode usar "partials" (parciais). Partials permitem que você divida seu código EJS em partes menores e mais gerenciáveis, que podem ser incluídas em várias páginas.

Vamos criar um exemplo simples usando partials. Suponha que você tenha um cabeçalho e um rodapé que deseja reutilizar em várias páginas.

### Passo 1: Estrutura de Diretórios
Crie a seguinte estrutura de diretórios:

```
/project
  /views
    /partials
      header.ejs
      footer.ejs
    index5.ejs
  app.js
```

### Passo 2: Criar os Partials
Crie os arquivos `header.ejs` e `footer.ejs` na pasta `partials`.
#### `header.ejs`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title %></title>
</head>
<body>
    <header>
        <h1>Meu Site</h1>
    </header>
```

#### `footer.ejs`
```html
    <footer>
        <p>&copy; 2024 Meu Site</p>
    </footer>
</body>
</html>
```

### Passo 3: Criar `index6.ejs`
No arquivo `index6.ejs`, vamos incluir os partials `header.ejs` e `footer.ejs`:

```html
<%- include('partials/header', { title: 'Instruções de Login' }) %>

<h1>Instruções de Login</h1>
<p>
    <% if (name && age) { %>
        Muito bem, <%= name %>!
    <% } else { %>
        NOME E IDADE INVÁLIDO
    <% } %>
</p>

<%- include('partials/footer') %>
```

### Passo 4: Ajustar `app.js`
O `app.js` já está configurado corretamente para capturar `name` e `age` da consulta na URL `/5`.

Aqui está um exemplo completo para garantir que tudo esteja correto:

```javascript
// Rota para capturar o nome e idade da URL
app.get('/6', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    res.render('index6', { name, age });
});

```

### Teste
1. Certifique-se de que o servidor esteja rodando:
   ```sh
   node app.js
   ```

2. Acesse a URL no navegador com a consulta apropriada:
   ```
   http://localhost:8000/5?name=VILHALVA&age=28
   ```

- Se acessar uma URL diferente, por exemplo, `http://localhost:8000/6?name=OutroNome&age=30`, a mensagem deve ser "NOME E IDADE INVÁLIDO".

## 07) LAYOUTS
Layouts são uma maneira eficiente de gerenciar a estrutura de suas páginas e reutilizar componentes comuns como cabeçalhos, rodapés e outros elementos de layout. Vamos criar um exemplo utilizando layouts no EJS.

### Passo 1: Estrutura de Diretórios
Crie a seguinte estrutura de diretórios:

```
/project
  /views
    /partials
      header.ejs
      footer.ejs
    /layouts
      main.ejs
    index7.ejs
  app.js
```

### Passo 2: Criar o Layout Principal
Crie um arquivo `main.ejs` na pasta `layouts`. Este arquivo será o layout principal e incluirá os partials de cabeçalho e rodapé:

#### `main.ejs`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title %></title>
</head>
<body>
    <%- include('../partials/header') %>

    <main>
        <%- body %>
    </main>

    <%- include('../partials/footer') %>
</body>
</html>
```

### Passo 3: Criar os Partials
Crie os arquivos `header.ejs` e `footer.ejs` na pasta `partials`.

#### `header.ejs`
```html
<header>
    <h1>Meu Site</h1>
</header>
```

#### `footer.ejs`
```html
<footer>
    <p>&copy; 2024 Meu Site</p>
</footer>
```

### Passo 4: Ajustar `index7.ejs`
No arquivo `index7.ejs`, vamos definir o conteúdo específico da página e usar a estrutura do layout principal:

#### `index7.ejs`
```html
<% layout('layouts/main') %>

<h1>Instruções de Login</h1>
<p>
    <% if (name && age) { %>
        Muito bem, <%= name %>!
    <% } else { %>
        NOME E IDADE INVÁLIDO
    <% } %>
</p>
```

### Passo 5: Ajustar `app.js`
Vamos garantir que o `app.js` está configurado para usar o layout e renderizar a página corretamente. Para isso, vamos usar um middleware como `express-ejs-layouts`. Primeiro, instale o `express-ejs-layouts`:

```sh
npm install express-ejs-layouts
```

Em seguida, configure o `app.js`:

```javascript
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 8000;

// Configura o EJS como mecanismo de visualização
app.set('view engine', 'ejs');

// Usa o middleware express-ejs-layouts
app.use(expressLayouts);

// Rota para capturar o nome e idade da URL
app.get('/7', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    res.render('index7', { name, age, title: 'Instruções de Login' });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
```

### Teste
1. Certifique-se de que o servidor esteja rodando:
   ```sh
   node app.js
   ```

2. Acesse a URL no navegador com a consulta apropriada:
   ```
   http://localhost:8000/7?name=VILHALVA&age=28
   ```

- Se acessar uma URL diferente, por exemplo, `http://localhost:8000/7?name=OutroNome&age=30`, a mensagem deve ser "NOME E IDADE INVÁLIDO".

