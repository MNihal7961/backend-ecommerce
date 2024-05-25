const express = require('express')

const app = express()

app.use(express.json())


app.use('/', (req, res, next) => {
    return res.status(200).send({ message: "Product service ok ✅" })
})

app.listen(8002, () => {

    console.log("Product Service Running ✅")
    console.log(`http://localhost:${8002}`)

}).on('error', (err) => {

    console.log(`Error in product ❌: ${err.message}`)
    process.exit(1)

})

