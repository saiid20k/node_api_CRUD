const express = require("express")
const app = express()
const con = require('./utiil/mysql')

app.use(express.json())


app.get("/", (req, res) => {
    res.status(200).send("Home Page Route Works")
})

app.use("/products", require('./routes/productsRoutes'))

app.use("/categories", require('./routes/categoryRoutes'))



// App Port
app.listen("3000", () => {
    console.log("App Listen in Port 3000")  
})