const TabelaEstados = require("./TabelaEstados");
const InvalidField = require ('../errors/InvalidField');
const ValuesNotProvided = require ('../errors/ValuesNotProvided');

class EstadosBrasil{
    constructor({id, nome, regiao, populacao, capital, area}){
        this.id = id;
        this.nome = nome;
        this.regiao = regiao;
        this.populacao = populacao;
        this.capital = capital;
        this.area = area;
  };

  async create(){
      this.check();
      const results = await TabelaEstados.insert({
          nome: this.nome,
          regiao: this.regiao,
          populacao: this.populacao,
          capital: this.capital,
          area: this.area
      })
      this.id = results.id;
  };

  async load(){
      const found = await TabelaEstados.catchId(this.id);
      this.id = found.id;
      this.nome = found.nome;
      this.regiao = found.regiao;
      this.populacao = found.populacao;
      this.capital = found.capital;
      this.area = found.area;

  };

  async update(){
      await TabelaEstados.catchId(this.id);
      const fields = ['nome', 'regiao', 'populacao', 'capital', 'area'];
      const fieldsToUpdate = {};


      fields.forEach((field) => {
          const value = this[field];
          
          if(typeof value === 'string' && value.length > 0){
              fieldsToUpdate[field] = value;
          };
      });
          if(Object.keys(fieldsToUpdate).length === 0){
              throw new ValuesNotProvided;
        };
         await TabelaEstados.update(this.id, fieldsToUpdate);
  };

    check(){
        const fields =  ['nome', 'regiao', 'populacao', 'capital', 'area'];
        fields.forEach(field =>{
            const value = this[field];
            if(typeof value !== 'string' || value.length === 0){
                throw new InvalidField;
            };

        });

  };
     remove(){
    return TabelaEstados.remove(this.id);
     };

};

module.exports = EstadosBrasil;