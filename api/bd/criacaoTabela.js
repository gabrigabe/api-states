const ModeloTabela = require('../states/ModeloTabela');

ModeloTabela
    .sync()
    .then(() => console.log('Tabela criada com sucesso'))
    .catch(console.log)