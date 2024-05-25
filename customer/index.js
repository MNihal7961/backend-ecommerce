const express = require('express')

const app = express()

app.use(express.json())


app.use('/', (req, res, next) => {
    return res.status(200).send({ message: "Customer service ok ✅" })
})

app.listen(8001, () => {

    console.log("Customer Service Running ✅")
    console.log(`http://localhost:${8001}`)

}).on('error', (err) => {

    console.log(`Error in customer ❌: ${err.message}`)
    process.exit(1)

})

