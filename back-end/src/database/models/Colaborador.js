const { Model, DataTypes } = require('sequelize');

class Colaborador extends Model {
    static init(sequelize) {
        super.init({
            cpf: DataTypes.STRING,
            nome: DataTypes.STRING,
            cargo: DataTypes.STRING,
            codigo_setor: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'colaboradores',
        })
    }

    static associate(models) {
        this.belongsTo(models.Setor, { foreignKey: 'codigo_setor', as: 'codigoSetor' });
    }
}

module.exports = Colaborador;