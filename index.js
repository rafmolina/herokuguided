const dotenv = require("dotenv").config()
const express = require("express")
const cors = require("cors")

const app = express()
const port = process.env.PORT || 9000

app.use(cors())
app.use(express.json())

app.use("/api/*", (_, res) =>{
    res.json({data:"IT LIIIIVES, IT LIIIVES!!"})
})

app.listen(port, () => {
    console.log(`server is alive on port ${port}`)
})


// console.log("its ah me mario")
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USERNAME)
// console.log(process.env.PORT)