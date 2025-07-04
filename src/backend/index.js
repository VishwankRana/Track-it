import express from 'express'
import cors from "cors";
import connectDB from './database/config.js'
import transactionRoutes from './routes/transactions.js';
const app = express()

app.use(cors())
app.use(express.json());
connectDB();

app.use(transactionRoutes);

app.get('/', (req, res) => {
    res.send("Hello from backend")
})


app.listen(5000, () => {
    console.log("Listening on port 5000")
})