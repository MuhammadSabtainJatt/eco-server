const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

// create app 
const app = express()

// cors 
app.use(cors())
app.use(express.json())

// // Routes
const productRoute=require("./src/Routes/ProductRoute")

app.use("/",productRoute)

const Auth=require("./src/Routes/AuthUserRoute")
app.use("/",Auth)

// Connection 

mongoose.connect(process.env.CONNECTION_STRING, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error"))
db.once("open", () => {
    console.log('Connected to MongoDB')
    const port = process.env.PORT
    app.listen(port, () => {
        console.log(`Server is Listining on Port ${port}`)
    })
})

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

// create app 
const app = express()

// cors 
app.use(cors())
app.use(express.json())

// // Routes
const productRoute=require("./src/Routes/ProductRoute")

app.use("/",productRoute)

const Auth=require("./src/Routes/AuthUserRoute")
app.use("/",Auth)

// Connection 

mongoose.connect(process.env.CONNECTION_STRING, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error"))
db.once("open", () => {
    console.log('Connected to MongoDB')
    const port = process.env.PORT
    app.listen(port, () => {
        console.log(`Server is Listining on Port ${port}`)
    })
})

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

// create app 
const app = express()

// cors 
app.use(cors())
app.use(express.json())

// // Routes
const productRoute=require("./src/Routes/ProductRoute")

app.use("/",productRoute)

const Auth=require("./src/Routes/AuthUserRoute")
app.use("/",Auth)

// Connection 

mongoose.connect(process.env.CONNECTION_STRING, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error"))
db.once("open", () => {
    console.log('Connected to MongoDB')
    const port = process.env.PORT
    app.listen(port, () => {
        console.log(`Server is Listining on Port ${port}`)
    })
})

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

// create app 
const app = express()

// cors 
app.use(cors())
app.use(express.json())

// // Routes
const productRoute=require("./src/Routes/ProductRoute")

app.use("/",productRoute)

const Auth=require("./src/Routes/AuthUserRoute")
app.use("/",Auth)

// Connection 

mongoose.connect(process.env.CONNECTION_STRING, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error"))
db.once("open", () => {
    console.log('Connected to MongoDB')
    const port = process.env.PORT
    app.listen(port, () => {
        console.log(`Server is Listining on Port ${port}`)
    })
})

