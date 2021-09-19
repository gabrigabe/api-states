const router = require('express').Router();
const TabelaEstados = require('./TabelaEstados');
const EstadosBrasil = require('./EstadosBrasil');
const SerializeStates = require('../Serialize').SerializeStates;

router.get('/', async (req, res) => {
    const results = await TabelaEstados.list();
    res.status(200);
    const serializer = new SerializeStates(res.getHeader('Content-Type'));
    res.send(serializer.serialize(results));
});

router.get('/:idEstado', async(req, res, next) =>{
    try {
        const id = req.params.idEstado;
        const estadosbrasil = new EstadosBrasil({id: id});
        await estadosbrasil.load();
        res.status(200);
        res.send(
            JSON.stringify(estadosbrasil)
        )
    } catch(error){
        next(error);
        }
});

router.post('/', async (req, res, next) =>{
    try{
    const received = req.body;
    const estadosbrasil = new EstadosBrasil(received);
    await estadosbrasil.create();
    res.status(201);
    res.send(
        JSON.stringify(estadosbrasil));

    }catch(error){
        next(error);
    };


});

router.put('/:idEstado', async (req, res, next) =>{
    try{
        const id = req.params.idEstado;
        const fieldsReceived = req.body;
        const fields = Object.assign({}, fieldsReceived, {id: id});
        const estadosbrasil = new EstadosBrasil(fields);
        await estadosbrasil.update();
        res.status(204);
        res.end();

    }catch(error){
        next(error);
    };
});

router.delete('/:idEstado', async (req, res, next) =>{
    try{
        const id = req.params.idEstado;
        const estadosbrasil = new EstadosBrasil({id: id});
        await estadosbrasil.load();
        await estadosbrasil.remove();
        res.status(204);
        res.end();

    }catch(error){
        next(error);
    };

});


module.exports = router;