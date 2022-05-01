const userController = {};

userController.index = (request, response) => {//es una funcion de flecha

    //objeto
    const luis = {
        "celular": "951423537",
        "edad": 23,
        "peso": 70,
    }
    luis.direccion = "jr tablacacha";

    response.status(200).send(luis); //200 que esta bien  //500 error de la base de datos*/
}

module.exports = userController; 