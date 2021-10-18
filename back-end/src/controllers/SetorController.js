const Setor = require('../database/models/Setor');

module.exports = {

    async index(req, res) {
        const setores = await Setor.findAll();

        return res.json(setores);
    },
}