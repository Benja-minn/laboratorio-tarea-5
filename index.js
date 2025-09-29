const express = require('express')

const app = express()

app.listen(8000, () => {
    console.log('estamos escuchando el puerto los 8000')
})


 app.get('/', (req, res) => {
    res.send('holiiiiii t amo')
 })