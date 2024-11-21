 const express = require ('express')
 const app = express()

app.use (express.json())

 app.use ('/', (req, res, next) => {
   console.log (new Date().toLocaleDateString(), req.method, req.path)

   next()
})

app.use ('/site', express.static ('public'))
 
app.post('/users', (req, res) => {
   console.log(req.get('Content-Type'))
   dados = req.body
   console.log(dados)
   res.send (`Informação recebida com sucesso. Seja bem vindo ${dados.nome}`)
})

app.get ('/users/:nome', (req, res) => {
   res.send (`Olá ${req.params.nome} - cidade: ${req.query.cidade}`)
})

app.get ('/dados', (req, res) => {
   console.log(req.get('Content-Type'))
   if (req.accepts('application/json')) {
      res.send ({message: 'Olá amigo JSON'})
   }
   else {
      res.send('<h1>Olá</h1>')
   }
   //res.format ({
   //   'text/html': () => {
   //      res.send ('<h1>Olá</h1>')
   //   },
   //   'application/json': () => {
   //      res.send ({message: 'Olá'})
   //   }
   //})
})

app.listen (3000, () => {
   console.log ('Server is running on http://localhost:3000')
})