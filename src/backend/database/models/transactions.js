import mongoose from "mongoose";

const transactionsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    note: {
        type: String,
    }

})

const Transactions = mongoose.model("Transaction", transactionsSchema)
export default Transactions;