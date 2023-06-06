const { Actor } = require('../models/index');

const getAllActors = async (req, res) => {
    try {
        const actors = await Actor.find()
        return res.status(200).json({ actors })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getActor = async (req, res) => {
    try {
        const { id } = req.params;
        const actor = await Actor.findById(id)
        if (actor) {
            return res.status(200).json({ actor });
        }
        return res.status(404).send('Actor with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllActors,
    getActor
}