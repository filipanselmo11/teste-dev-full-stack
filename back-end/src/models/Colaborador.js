const { Model, DataTypes } = require('sequelize');

class Colaborador extends Model {
    static init (sequelize) {
        super.init({
            cpf: DataTypes.STRING,
            nome: DataTypes.STRING,
            setor: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'colaboradores'
        })
    }
}

module.exports = Colaborador;