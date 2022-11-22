const Encuesta = require('../models/encuesta')

const getEncuesta = async (req, res) =>{
    const Encuesta1 = await Encuesta.find()
    res.json({
        msg: 'Encuesta GET API',
        Encuesta1
    })
}

const postEncuesta = (req, res) =>{
    const {nombreEncuesta, fecha,  documentoEncuestado, edad, genero, empleado} = req.body

    const Encuesta1 = new Encuesta ({nombreEncuesta, fecha,  documentoEncuestado, edad, genero, empleado})
    Encuesta1.save()

    res.json({
        msg:'Encuesta POST API',
        Encuesta1
    })
}

const putEncuesta = async(req, res) =>{
    const {nombreEncuesta,fecha,documentoEncuestado,edad,genero,empleado} = req.body
    const Encuesta1 = await Encuesta.findOneAndUpdate({nombreEncuesta:nombreEncuesta},{fecha:fecha,documentoEncuestado:documentoEncuestado,edad:edad,genero:genero,empleado:empleado})

    res.json({
        msg:'Encuesta PUT API',
        Encuesta1
    })
}

const patchEncuesta = async(req, res) =>{
    const {nombreEncuesta, fecha} = req.body
    const Encuesta1 = await Encuesta.findOneAndUpdate({nombreEncuesta : nombreEncuesta}, {fecha: fecha})

    res.json({
        msg:'Encuesta PATCH API',
        Encuesta1
    })
}

const deleteEncuesta = async(req, res) =>{
    const{nombreEncuesta} = req.query

    const nombre1 = await Encuesta.findOneAndDelete ({ nombreEncuesta : nombreEncuesta })

    res.json({
        msg:'Encuesta DELETE API'
    })
}



module.exports = {
    getEncuesta,
    postEncuesta,
    putEncuesta,
    patchEncuesta,
    deleteEncuesta
}
