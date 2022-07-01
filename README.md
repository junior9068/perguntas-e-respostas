# perguntas-e-respostas
Projeto de Perguntas e respostas para aplicar conhecimentos de Mysql do curso de Node.js
Tecnologias utilizadas:

NODE
MYSQL
EXPRESS
EJS (Renderizador de HTML - Motor de templates no Node)

# Iniciando o projeto Node:

npm init (responder todas as perguntas no terminal)
Criar o arquivo index.js (que será o entryponit)
Instalar o express - npm install express --save
Intalar o EJS - npm install ejs --save

# Configurando o EJS no express

Precisa apenas colocar uma linha de código:

app.set('view engine', 'ejs)

OBS: Temos que criar uma pasta views, raiz do projeto, e colocar todos os arquivos .html lá. Como estamos utilizando o EJS, os arquivos estarão na extensão .ejs (que será um html kkk. Só muda e extensão)

Dentro da roda temos que utilizar res.render("nome-do-arquivo.ejs") para o ejs renderizar e mostrar o arquivo para o usuário (Funciona como as urls do Django)