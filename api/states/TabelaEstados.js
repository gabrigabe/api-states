const Modelo = require('./ModeloTabela');
const NotFound = require('../errors/NotFound');

module.exports = {
    list () {
        return Modelo.findAll();
    },
    insert (estadosbrasil){
        return Modelo.create(estadosbrasil);
    },
    async catchId(id){
        const found = await Modelo.findOne({
            where:{id: id}
        });

        if(!found){
            throw new NotFound();
        };
        return found;
    },
    update(id, fieldsToUpdate){
        return Modelo.update(fieldsToUpdate,{where:{id:id}});
    },
    remove(id){
        return Modelo.destroy({ where: {id: id}});
    },

};