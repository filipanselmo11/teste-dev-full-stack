const Colaborador = require('../models/Colaborador');

module.exports = {

    async index(req, res) {
        const colaboradores = await Colaborador.findAll();

        return res.json(colaboradores);
    },

    async create(req, res) {
        const { cpf, nome, setor } = req.body;

        const colaborador = await Colaborador.create({ cpf, nome, setor });

        return res.json(colaborador);
    },

    async findOne(req, res) {
        const id = req.params.id;

        const colaborador = await Colaborador.findByPk(id);

        return res.json(colaborador);
    },

    async update(req, res) {
        const id = req.params.id;

        const colaborador = await Colaborador.update(req.body, { where: { id: id }});

        return res.json(colaborador);
    },

    async delete(req, res) {
        const id = req.params.id;

        const colaborador = await Colaborador.findByPk(id);

        if(!colaborador) {
            return res.status(400).json({ error: 'Usuário não encontrado' });
        } else {
            colaborador.destroy()
        }

        return res.json(colaborador);
    },

    async deleteAll(req, res) {
        const colaboradores = await Colaborador.destroy({ where: {}, truncate: false });

        return res.json(colaboradores);
    }
}