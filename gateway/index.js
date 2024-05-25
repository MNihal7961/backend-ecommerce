const express = require('express')
const cors = require('cors')
const proxy = require('express-http-proxy')

const app = express()

app.use(cors())
app.use(express.json())

const customerProxy = proxy("http://localhost:8001")
const productProxy = proxy("http://localhost:8002")
const shoppingProxy = proxy("http://localhost:8003")

app.use('/customer', customerProxy)
app.use('/shopping', shoppingProxy)
app.use('/', productProxy) // ROOT END POINTS ie,products

app.listen(8000, () => {

    console.log("Gateway Service Running ✅")
    console.log(`http://localhost:${8000}`)

})

