# API

Esta é uma api em que se consegue listar, editar, inserir e deletar um estado do Brasil

## Configuração 

Para configuração e utilização da mesma é necessario o [MYSQL](https://www.mysql.com/downloads/), [Node.js](https://nodejs.org/en/).

Os seguintes modulos também são necessarios para a utilização da api: body-parser, config, express, mysql2 e sequelize.

## Instruções para o uso

Primeiramente rode o arquivo para a criação da database com o nome 'criardb'

logo após vá ate a pasta config e edite o arquivo default json com as informações de conexão do MYSQL de sua maquina seguindo o seguinte padrão:

```RAW
{
    "mysql": {
        "banco-de-dados": "estados",
        "usuario": "root",
        "senha": "admin",
        "host": "127.0.0.1"
    },
    
    
    "api": {
        "porta":3000
    }
}
```

após configurar realize a execução do script 'CriacaoTabela.js" na pasta bd, pois o mesmo será necessario para a criação das tabelas necessarias para utilizar a API.


## Utilizando a API

Na api podemos inserir, listar editar e deletar um estado no brasil, para isso utilizaremos o [POSTMAN](https://www.postman.com/downloads/) ou outro programa similar para fazer as requisições

### Inserindo dados
Inserimos dados utilizando o método POST em qual na url localhost:3000/api/states/ inserimos um objeto JSON que irá automaticamente para a nossa base de dados, para inserir um estado devemos utilizar o seguinte formato
```JSON
{
    "nome": "",  // Nome do Estado
    "regiao":"", // Regiao
    "populacao":"", //Sua população
    "capital":"", //Sua Capital
    "area":""  //Area que o estado ocupa em KMS


}
```
Quando realizamos a inserção do mesmo, cada inserção automaticamente gera um id em sequencia para que podemos utilizar para remover, listarmos em especifico ou editarmos o mesmo como por exemplo:
```JSON 
{
    "id": 7,
    "nome": "Ceará",
    "regiao": "Nordeste",
    "populacao": "9200000",
    "capital": "Fortaeza",
    "area": "148.886"
}
```
### Listando Dados 

Podemos usar o método GET para listar todos os resultados ou um resultado especfico, usando a url no formato 'localhost:3000/api/states/' para retornar todos os resultados ou 'localhost:3000/api/states/id' com o id especifico de um estado para retornar somente o mesmo.

### Editando Dados

Utilizando o método PUT conseguimos editar os campos de um estado passando os campos que queremos editar, lembrando que devemos usar a irl com a id do estado especifico para isto 'localhost:3000/api/states/id', como 
por exemplo, iremos editar o campo "capital" do estado id7 devido a um erro de grafia

inserimos na url 'localhost:3000/api/states/7'
```JSON
{
    "capital":"Fortaleza"
}
```
e a nosso campo capital mudade "Fortaeza" para "Fortaleza"

quando realizamos um GET no id 7 novamente:
```JSON
{
    "id": 7,
    "nome": "Ceará",
    "regiao": "Nordeste",
    "populacao": 9200000,
    "capital": "Fortaleza",
    "area": 148.886
}
```

### Removendo Dados

Também conseguimos remover um estado com o método DELETE informando a url com o id do estado que iremos deletar seguindo o formato 'localhost:3000/api/states/id'