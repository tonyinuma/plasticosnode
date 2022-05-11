const userController = {};

userController.index = (request, response) => {

    response.render('users/index');
}

module.exports = userController; 