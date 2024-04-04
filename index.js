const express = require('express')
const port = 3500
const app = express()

app.use(express.text()) 
app.use(express.json()) 
app.use(express.urlencoded({extended:false})) 


// PROCEDIMIENTO 4

//http://localhost:3500/hello/:AlvaroCuba
app.get('/hello/:username' , (req, res ) => {
    console.log(typeof req.params.username)
    res.send(`Hello ${req.params.username.toUpperCase()}`)
})
//http://localhost:3500/add/4/6
app.get('/add/:x/:y' , (req, res ) => {
    const { x, y } = req.params
    res.send(`Result: ${ parseInt(x) + parseInt(y)}`)
})

//http://localhost:3500/users/:Alvaro/photo
app.get('/users/:username/photo' , (req, res ) => {
    if (req.params.username.toUpperCase() === "ALVARO") {
        return res.sendFile ('./img/tecsup.jpg' , {
            root:__dirname 
        }) 
    }
    res.send('El usuario no tiene acceso ')
})
//http://localhost:3500/name/:AlvaroCuba/age/:20
app.get('/name/:name/age/:age' , (req, res ) => {
res.send(`el usuario ${req.params.name} tiene ${req.params.age} anos`)
})

// PROCEDIMIENTO 3

//http://localhost:3500/user_request
app.post('/user_request' , (req, res) => {
    console.log(req.body)
    res.send('nuevo usuario creado')
}) 



//http://localhost:3500/products
app.get('/products' , (req, res ) => {
    res.send('listar productos')
})

//http://localhost:3500/products
app.post('/products' , (req, res ) => {
    res.send('Creando productos ')
})

//http://localhost:3500/products
app.put('/products' , (req, res ) => {
    res.send('Actualizando productos')
})

//http://localhost:3500/products
app.delete('/products' , (req, res ) => {
    res.send('Eliminar productos ')
})

//http://localhost:3500/products
app.patch('/products' , (req, res ) => {
    res.send('Actualizando una parte del producto')
})

//PROCEDIMIENTO 2

http://localhost:3500/
app.get('/' , (req, res ) => {
    res.send('Hola mundo ')
})

//http://localhost:3500/pmyfile
app.get('/pmyfile' , (req, res ) => {
    res.sendFile('./img/tecsup.jpg' , {
        root:__dirname 
    })
})

//http://localhost:3500/user
app.get('/user' , (req, res ) => {
    res.json({
        nombres: "Alvaro",
        apellidos:"Cuba",
        edad: 40 ,
        points: [ 1, 2, 3],
        adress: {
            ciudad : "Lima ",
            distrito: "Lima",
            calle: "Lima"
        }
    })
})

//http://localhost:3500/isalive
app.get('/isalive' , (req, res ) => {
    res.sendStatus(204)
})

// puerto 
app.listen(port)
console.log(`server in port ${port}`)


