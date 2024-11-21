 const express = require ('express')
 const app = express()

 app.use ('/', (req, res, next) => {
   console.log (new Date().toLocaleDateString(), req.method, req.path)

   next()
})

app.use ('/site', express.static ('public'))
 
 app.listen (3000, () => {
    console.log ('Server is running on http://localhost:3000')
 })