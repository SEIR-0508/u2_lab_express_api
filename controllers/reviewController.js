const { Review } = require("../models");

const getReviews = async (req, res) => {
    const reviews = await Review.find({});
    res.json(reviews);
};

const getReviewById = async (req, res) => {
    try {
        const { id } = req.params;
        const review = await Review.findById(id);
        if (!review) throw Error("Review not found");
        res.json(review);
    } catch (e) {
        console.log(e);
        res.send("beepboop you meesed up the url");
    }
};

module.exports = {
    getReviews,
    getReviewById,
};
