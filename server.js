require("dotenv").config()
const express = require('express')
const noteRoutes = require('./routes/api/noteRoutes')
const htmlRoutes = require('./routes/api/htmlRoutes')


const app = express()
// initializes the routes with express
// noteRoutes(app)
// htmlRoutes(app)
// sets port to the environment variable port or 3001 if not provided
// in this case the env port is 4001
const PORT = process.env.PORT 
// creates a route for each file in the public folder
app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is available at PORT ${PORT}`)

})