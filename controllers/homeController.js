const homeController = {};

homeController.index = (request, response) => {//es una funcion de flecha

    //objeto
    const usuario = {
        "celular": "951423537",
        "edad": 23,
        "peso": 70,
        "nombre": "luis",
    }
    usuario.direccion = "jr tablacacha";

    response.render('home', { usuario: usuario }); //200 que esta bien  //500 error de la base de datos*/

}

module.exports = homeController; 