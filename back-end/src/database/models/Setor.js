const { Model, DataTypes } = require('sequelize');

class Setor extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            codigo: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'setores'
        })
    }
}

module.exports = Setor;