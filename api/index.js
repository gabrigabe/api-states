const express = require('express');
const app = express();
const config = require('config');
const NotFound = require('./errors/NotFound');
const InvalidField = require('./errors/InvalidField');
const ValuesNotProvided = require('./errors/ValuesNotProvided');
const NotSuportedType = require('./errors/NotSuportedType')
const acceptedTypes = require('./Serialize').acceptedTypes;

app.use(express.json());
const router = require('./states');
app.use((req, res, next) =>{

    let reqType = req.header('Accept');

    if(reqType === '*/*'){
        reqType = 'application/json';
    };
    if(acceptedTypes.indexOf(reqType) === -1){
        res.status(406);
        res.end;
        return;
    };
    res.setHeader('Content-Type', reqType);
    next();


});
app.use('/api/states', router);
app.listen(config.get('api.porta'), () => console.log('API funcionando!'));

app.use((error, req, res, next)=> {
    let status = 500;
    if(error instanceof NotFound){
        status = 404;
    };
    if(error instanceof InvalidField || ValuesNotProvided){
        status = 400;
    };
    if(error instanceof NotSuportedType){
        status = 406;
    }

    res.status(status);
    res.send(
        JSON.stringify({msg:error.message, id:error.errorId})
    );
});
