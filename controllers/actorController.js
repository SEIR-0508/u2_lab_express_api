const { Actor } = require("../models");

const getActors = async (req, res) => {
    const actors = await Actor.find({});
    res.json(actors);
};

const getActorById = async (req, res) => {
    try {
        const { id } = req.params;
        const actor = await Actor.findById(id);
        if (!actor) throw Error("Actor not in database");
        res.json(actor);
    } catch (e) {
        console.log(e);
        res.send("beepboop you meesed up the url");
    }
};

module.exports = {
    getActors,
    getActorById,
};
