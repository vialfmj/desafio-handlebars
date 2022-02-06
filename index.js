const express = require('express')
const app= express()
const port= 3000
const hbs= require('express-handlebars')

app.engine('handlebars',hbs.engine())
app.set("views",'./views/hbs')
app.set("view engine","handlebars")

app.get("/", (req, res, next)=>{

    let data = {
        nombre: 'franco',
        apellido: 'vial',
        edad: 27,
        email: "franco@mail.com",
        telefono: "155555555"
    }
    
    res.render("index", data);
})


const server =app.listen(port,()=>{
    console.log(`escuchando el puerto: ${port}`)
})
server.on('error',error=>console.log(`error en el servidor: ${error}`))

