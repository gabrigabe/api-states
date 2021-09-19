const NotSuportedType = require('./errors/NotSuportedType');

class Serialize{
    json (values){
        return JSON.stringify(values);
    };
    serialize(values){
        if(this.contentType === 'application/json'){
            return this.json(values);
        };

        throw new NotSuportedType(this.contentType);
    };


};
class SerializeStates extends Serialize{
    constructor(contentType){
        super();
        this.contentType = contentType;
    }
}

module.exports = {
    Serialize: Serialize,
    SerializeStates: SerializeStates,
    acceptedTypes:['application/json']
};