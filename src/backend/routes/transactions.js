import express from 'express'
import mongoose from 'mongoose'
import Transactions from './backend/database/models/transactions.js'

const app = express()
app.use(express.json())

app.post('/api/trackit/transactions/', async (req, res) => {
    try {
        const newTransaction = new Transactions(req.body);
        const savedTransaction = await newTransaction.save();
        res.status(201).json(savedTransaction);
    } catch (error) {
        res.status(500).json({ message: "Failed to save transaction", error });
    }
});