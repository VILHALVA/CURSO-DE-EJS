# SINTAXE:
A sintaxe do EJS é bastante simples e semelhante à do JavaScript. Aqui está uma visão geral da sintaxe geral do EJS, juntamente com exemplos:

1. **Incorporação de Código JavaScript**:
   
   - `<% ... %>`: Esta tag é usada para incorporar código JavaScript que não produz saída diretamente. Por exemplo:

     ```ejs
     <% if (user.logged_in) { %>
         <p>Bem-vindo de volta, <%= user.name %>!</p>
     <% } else { %>
         <p>Por favor, faça login.</p>
     <% } %>
     ```

   - `<%= ... %>`: Esta tag é usada para imprimir o resultado de uma expressão JavaScript dentro do HTML. Por exemplo:

     ```ejs
     <p>Meu nome é <%= user.name %>.</p>
     ```

   - `<%- ... %>`: Esta tag é semelhante a `<%= ... %>`, mas ela renderiza o conteúdo HTML escapando as tags HTML. É útil para evitar ataques de Cross-Site Scripting (XSS). Por exemplo:

     ```ejs
     <p>Descrição: <%- produto.description %></p>
     ```

2. **Comentários**:
   
   - `<%# ... %>`: Esta tag é usada para inserir comentários que não serão incluídos na saída HTML. Por exemplo:

     ```ejs
     <%# Este é um comentário EJS. %>
     ```

3. **Estruturas de Controle e Loops**:

   - EJS permite que você use as estruturas de controle e loops JavaScript padrão, como `if`, `else if`, `else`, `for`, `while`, etc. Por exemplo:

     ```ejs
     <% if (idade >= 18) { %>
         <p>Você é maior de idade.</p>
     <% } else { %>
         <p>Você é menor de idade.</p>
     <% } %>
     ```

4. **Inclusão de Outros Arquivos EJS**:

   - `<%- include('caminho/para/arquivo.ejs') %>`: Esta tag é usada para incluir outros arquivos EJS dentro do atual. Por exemplo:

     ```ejs
     <%- include('partials/header') %>
     <h1>Página Inicial</h1>
     <%- include('partials/footer') %>
     ```

Esses são apenas alguns exemplos básicos da sintaxe do EJS. Com o EJS, você pode escrever praticamente qualquer código JavaScript dentro de seus arquivos de modelo para gerar HTML dinâmico conforme necessário.