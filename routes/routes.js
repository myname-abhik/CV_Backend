const express = require('express');
const Controller = require('../controller/Controller')
const router = express.Router();
router.get('/test', (req,res) =>{
    res.send('Welcome to the API');
})
router.post('/insert',Controller.Insert_Content)
router.get('/insert',Controller.Get_Content)
router.get('/insert/:name',Controller.Get_Particular)


module.exports = router;
