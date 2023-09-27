require("dotenv").config()
const express = require('express')
const noteRoutes = require('./routes/noteRoutes')
const htmlRoutes = require('./routes/htmlRoutes')


const app = express()
// sets port to the environment variable port or 3001 if not provided
// in this case the env port is 4001
const PORT = process.env.PORT || 3001
// creates a route for each file in the public folder
app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/', noteRoutes)
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`Server is available at PORT ${PORT}`)

})