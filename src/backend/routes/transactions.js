import express from 'express';
import Transactions from '../database/models/transactions.js';

const router = express.Router();

router.get('/api/trackit/transactions', async (req, res) => {
    try {
        const allTransactions = await Transactions.find();
        res.status(200).json(allTransactions);
    } catch (err) {
        res.status(500).json({ message: "Error fetching transactions", error: err });
    }
});

router.post('/api/trackit/transactions', async (req, res) => {
    try {
        const newTransaction = new Transactions(req.body);
        const savedTransaction = await newTransaction.save();
        res.status(201).json(savedTransaction);
    } catch (error) {
        res.status(500).json({ message: "Failed to save transaction", error });
    }
});

router.delete('/api/trackit/transactions/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTransaction = await Transactions.findByIdAndDelete(id);

        if (!deleteTransaction) {
            return res.status(404).json({ message: "Transaction not found" })
        }
        res.status(200).json({ message: "Transaction Deleted", deleteTransaction })
    }
    catch (error) {
        res.status(500).json({ message: "Failed to delete transaction", error });
    }
})


router.put('/api/trackit/transactions/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTransaction = await Transactions.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedTransaction) {
            return res.status(404).json({ message: "Transaction not found" });
        }

        res.status(200).json(updatedTransaction);
    } catch (error) {
        res.status(500).json({ message: "Failed to update transaction", error });
    }
});


export default router;
