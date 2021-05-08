# Blip Teste

Objetivo é criar um chatbot utilizando a plataforma Blip e que retorne os cinco mais antigos repositórios da Takenet em C#.

## Sobre o teste

A api criada para ser consumida na plataforma Blip foi desenvolvida em Express.js para rotas e Node.js como servidor web. O deploy foi realizado na plataforma Heroku. [Clique aqui!](https://api-repositories.herokuapp.com/repos/) para uma visualização dos dados.

## Como rodar localmente

<li>Clone o repositório:

```sh
git clone https://github.com/fernanduandrade/challenge.git
```

</li>

<li>instale as dependências:

```sh
npm install
```

</li>

<li>Inicie o servidor:

```sh
npm run dev
```
	
</li>

<li>Acesse no browser para visualizar o json:

```sh
localhost:3000/repos/
```
	
</li>

## Como subir para produção

*De preferência copie os arquivos dentro do diretório Api para um novo diretório.*

- Primeiramente crie uma conta na plataforma do [Heroku](https://id.heroku.com/login) e após isso [instale o CLI do heroku](https://devcenter.heroku.com/articles/heroku-cli) para poder realizar o deploy. Após instalar rode `heroku login`.

- Esteja dentro do diretório onde contém o arquivo `index.js` e rode no seu terminal `heroku create <nome_da_aplicação>`

- No terminal irá retornar duas url's a primeira é da sua aplicação e a segunda é a que você irá utilizar para subir os arquivos no servidor.

- Copie a segunda url retornada (a que tem .git no final) no terminal e rode o seguinte comando `git remote -v url_da_aplicação` e após `git init`

- Último passo basta executar os seguintes comandos em ordem:
```sh
git add .
git commit -m "initial commit"
git push heroku master
```
## :mailbox_with_mail: License

Feel free to try it out.



