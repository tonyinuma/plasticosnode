const warehouseController = {};

warehouseController.index = (request, response) => {
    response.render("warehouse/index");
};

module.exports = warehouseController;
