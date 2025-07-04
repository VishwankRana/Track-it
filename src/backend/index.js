import express from 'express'
import connectDB from './database/config.js'
const app = express()
connectDB();


app.get('/', (req, res) => {
    res.send("Hello from backend")
})


app.listen(5000, () => {
    console.log("Listening on port 5000")
})