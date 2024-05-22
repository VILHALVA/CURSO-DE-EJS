# MANUAL
**Instalação:**

1. **Node.js e npm**: Antes de tudo, certifique-se de ter o Node.js e o npm (gerenciador de pacotes do Node.js) instalados em seu sistema. Você pode baixá-los e instalá-los em [nodejs.org](https://nodejs.org/).

2. **Criando um Novo Projeto**: Abra seu terminal e crie um novo diretório para o projeto:

   ```
   mkdir meu-projeto-ejs
   cd meu-projeto-ejs
   ```

3. **Inicializando o Projeto**: Dentro do diretório do projeto, execute o seguinte comando para inicializar um novo projeto Node.js e criar um arquivo `package.json`:

   ```
   npm init -y
   ```

4. **Instalando EJS**: Agora, instale o EJS como uma dependência do seu projeto usando npm:

   ```
   npm install ejs
   ```

**Configuração:**

1. **Configurando o Express (opcional)**: Se você estiver usando o Express.js como seu servidor web, configure o Express para usar o EJS como seu mecanismo de visualização. Para isso, crie um arquivo `app.js` (ou qualquer outro nome que você preferir) na raiz do seu projeto e adicione o seguinte código:

   ```javascript
   const express = require('express');
   const app = express();

   // Configurando o EJS como mecanismo de visualização
   app.set('view engine', 'ejs');
   ```

2. **Criando o Diretório de Visualizações**: Crie um diretório chamado `views` na raiz do seu projeto. É aqui que você colocará seus arquivos EJS.

**Criando o Primeiro Projeto:**

1. **Criando um Arquivo EJS**: Dentro do diretório `views`, crie um novo arquivo EJS. Por exemplo, `index.ejs`.

2. **Escrevendo o Código EJS**: Abra o arquivo `index.ejs` e adicione algum código HTML com algumas tags EJS incorporadas para gerar conteúdo dinâmico. Por exemplo:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Meu Primeiro Projeto EJS</title>
   </head>
   <body>
       <h1>Olá, <%= nome %></h1>
       <p>Bem-vindo ao meu primeiro projeto EJS!</p>
   </body>
   </html>
   ```

   Aqui, `<%= nome %>` é uma tag EJS que será substituída pelo valor da variável `nome`.

3. **Renderizando o Arquivo EJS**: Se você estiver usando o Express, crie uma rota para renderizar o arquivo EJS. Adicione o seguinte código ao seu arquivo `app.js`:

   ```javascript
   app.get('/', (req, res) => {
       res.render('index', { nome: 'Usuário' }); // Passando dados para o arquivo EJS
   });
   ```

   Isso renderiza o arquivo `index.ejs` e passa a variável `nome` com o valor `'Usuário'` para ele.

4. **Iniciando o Servidor**: Finalmente, inicie o servidor Express:

   ```
   node app.js
   ```

   Agora, você pode acessar seu projeto em um navegador visitando `http://localhost:3000` (se estiver usando a porta padrão do Express).

Com esses passos, você instalou, configurou e criou seu primeiro projeto usando EJS! 