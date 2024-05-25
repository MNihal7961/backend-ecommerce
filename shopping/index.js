const express = require('express')

const app = express()

app.use(express.json())


app.use('/', (req, res, next) => {
    return res.status(200).send({ message: "Shopping service ok ✅" })
})

app.listen(8001, () => {

    console.log("Shopping Service Running ✅")
    console.log(`http://localhost:${8001}`)

}).on('error', (err) => {

    console.log(`Error in shopping ❌: ${err.message}`)
    process.exit(1)

})

