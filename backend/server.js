const app = require('./app')
const connectDatabase = require('./db/Database')


//Get PORT from config.
if(process.env !== 'PRODUCTION'){
    require('dotenv').config({
        path:"configs/.env"
    })
}

// Handling uncaught exception.
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`)
    console.log(`Shutting down server for handling uncaught exception.`)
})

// Unhandled promise rejection.
process.on("unHandledRejection", (err) => {
    console.log(`Shutting down server for ${err.message}`)
    console.log(`Shutting down server for unhandled promise rejection.`)

    server.close(() => {
        process.exit(1)
    })
})

//connect DB
connectDatabase()

// Start server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})
