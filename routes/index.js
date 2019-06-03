const express= require('express');
const router= express.Router();

const tarea= require('../models/task');

router.get('/', async (req, res)=>{
    const tar = await tarea.find();
    res.render('index',{tar});
});
router.post('/add', async(req, res)=>{
    //res.render('index');
    const tar= new tarea(req.body);
    await tar.save();
    res.redirect('/');
});
router.get('/actualizar/:id', async (req,res) =>{
    const {id}= req.params;
    const tar= await tarea.findById(id);
    tar.estado = !tar.estado;
    await tar.save();    
    res.redirect('/')
    
});
router.get('/editar/:id', async (req,res) =>{
    const {id}= req.params;
    const tar= await tarea.findById(id);
    res.render('edit',{
        tar
    });
});
router.post('/editar/:id', async (req,res) =>{
    const {id}= req.params;
    await tarea.update({_id:id},req.body);
    res.redirect('/');
});
router.get('/delete/:id', async (req,res) =>{
    const {id}= req.params;
    await tarea.remove({_id:id});
    res.redirect('/')
});
module.exports = router;