const express = require('express');
const app = express();

const productos= [
    {
        "title": "revista",
        "price":123,
        "id": 1
    },{
        "title": "tenedores",
        "price":113,
        "id": 2

    },{
        "title": "platos",
        "price":223,
        "id": 3

    }
]

app.listen(8080,console.log('servidor arriba'));

app.get('/productos',(req,res)=>{
    res.send({productos});
})


app.get('/producto/random',(req,res)=>{
   const maxRango = productos.length;
    const producto = Math.floor(Math.random()* maxRango)
   res.send({producto: productos[producto]});
})

