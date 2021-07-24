const router = require('express').Router();
const {User} = require('../../db');

router.get('/', async (req, res) =>{
    const users = await User.findAll();
    res.json(users);
})

router.post('/', async (req, res) =>{
    const user = await User.create(req.body);
    res.json(user);
})

router.put('/:usuarioid', async (req, res) =>{
    await User.update(req.body,{
        where:{idUsuario:req.params.usuarioid}
    });
    res.json({sucess:'Usuario actualizado'});
})

router.delete('/:usuarioid', async (req, res) =>{
    await User.destroy(req.body,{where:{
        idUsuario:req.params.usuarioid}});
        res.json({sucess:'Usuario Eliminado'});
})

module.exports = router;