const Colaborador = require('../database/models/Colaborador');

module.exports = {

    async index(req, res) {
        const colaboradores = await Colaborador.findAll();

        return res.json(colaboradores);
    },

    async create(req, res) {
        const { cpf, nome, setor } = req.body;

        const colaborador = await Colaborador.create({ cpf, nome, setor });

        return res.status(200).json({ message: 'Usuário(a) criado com sucesso!' });
    },

    async findOne(req, res) {
        const id = req.params.id;

        const colaborador = await Colaborador.findByPk(id);

        if (!colaborador) {
            return res.status(400).json({ error: "Usuário(a) não encontrado" });
        } else {
            return res.json(colaborador);
        }
    },

    async update(req, res) {
        const id = req.params.id;

        const colaborador = await Colaborador.update(req.body, { where: { id: id } });

        if (!colaborador) {
            return res.status(400).json({ error: 'Usuário(a) não encontrado' });
        } else {
            return res.status(200).json({ message: 'Usuario(a) atualizado com sucesso!' });
        }

    },

    async delete(req, res) {
        const id = req.params.id;

        const colaborador = await Colaborador.findByPk(id);

        if (!colaborador) {
            return res.status(400).json({ error: 'Usuário não encontrado' });
        } else {
            colaborador.destroy()
        }

        return res.status(200).json({ message: 'Usuário(a) deletado com sucesso!' });
    },

    async deleteAll(req, res) {
        const colaboradores = await Colaborador.destroy({ where: {}, truncate: false });

        return res.status(200).json({ message: "Usuários deletados com sucesso!" });
    }
}