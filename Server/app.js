const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const empRouter =require('./controller/emp_data')

const url = 'mongodb://localhost:27020,localhost:27021,localhost:27022/cbit2?replicaSet=m101';
const app = express()
mongoose.connect(url)
const con = mongoose.connection

con.on('open',()=>
{
    console.log('connected...')
})

app.use(cors())
app.use(express.json())

app.use('/emp_data',empRouter)
app.listen(3000,()=>{
    console.log('Server started')
})