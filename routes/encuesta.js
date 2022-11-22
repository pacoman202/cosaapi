const { Router } = require('express')
const router = Router() //obtener la funcion Router

const{getEncuesta, postEncuesta, deleteEncuesta, putEncuesta, patchEncuesta } = require('../controllers/encuesta')


router.get('/',getEncuesta)
router.post('/',postEncuesta)
router.put('/',putEncuesta)
router.patch('/',patchEncuesta)
router.delete('/',deleteEncuesta)



module.exports = router