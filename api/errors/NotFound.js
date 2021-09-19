class NotFound extends Error{
    constructor(){
        super('Estado não encontrado');
        this.name = 'NotFound';
        this.errorId = 0
    };
};

module.exports = NotFound;