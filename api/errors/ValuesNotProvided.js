class ValuesNotProvided extends Error{
    constructor(){
        super('Nao foram fornecidos valores para atualizar');
        this.name = ValuesNotProvided;
        this.errorId = 2;
    };
};

module.exports = ValuesNotProvided;