const { response } = require('express');


const userGet = (req, res = response) => {

    const { msh, Nombre, api} = req.query;
    res.json({
        msg: 'get API - Controlador',
        msh, Nombre, api
    });
}

const userPut = (req, res = response) => {

    const {id} = req.params;
    res.json({
        msg: 'put API - Controlador',
        id
    });
}

const userPost = (req, res = response) => {
    const { nombre, edad } = req.body;
    res.json({
        msg: 'post API - Controlador',
        nombre,edad 
    });
}

const userDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - Controlador'
    });
}

module.exports = {
    userGet, userPut, userPost, userDelete
}