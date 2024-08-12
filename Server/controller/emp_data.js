const express = require('express')
const router = express.Router()
const Employee = require('../models/employee')

router.get('/',async(req,res) =>{
    try{
        const emp = await Employee.find()
        res.json(emp)
    }
    catch(err){
        res.send('Error'+err)
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const emp = await Employee.findById(req.params.id)
        res.json(emp)
    }
    catch(err){
        res.send('Error' +err)
    }
})

router.post('/',async(req,res)=>{
    const emp= new Employee({
        empid : req.body.empid,
        name : req.body.name,
        designation : req.body.designation,
        permanent : req.body.permanent
    })

    try{
        const a1 = await emp.save()
        res.json(a1)
    }
    catch(err){
        res.send('Error')
    }
})

router.patch('/:id', async(req,res)=>{
    try{
        const emp = await Employee.findById(req.params.id)
        emp.permanent = req.body.permanent
        const a1 = await emp.save()
        res.json(a1)
    }
    catch(err){
        res.send('Error')
    }
})

router.delete('/:id',async(req,res)=>{
    try{
      const result =  await Employee.deleteOne({_id : req.params.id})
      res.send('Deleted')
        
    }
    catch(err){
        res.send('Error')
    }
})

module.exports = router