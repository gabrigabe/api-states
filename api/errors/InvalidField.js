class InvalidField extends Error{
    constructor(field){
        const msg = `O campo '${field} está invalido`;
        super(msg);
        this.name = InvalidField;
        this.errorId = 1;
    };
};

module.exports = InvalidField;