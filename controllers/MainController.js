const mainController = {};

mainController.home = (req, res) => {
    res.render("index");
};

module.exports = mainController;