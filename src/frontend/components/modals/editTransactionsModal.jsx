import { useState, useEffect } from "react";
import BasicDatePicker from '../datepicker'
import BasicTimePicker from '../timePicker'
import CategorySelectIndicator from '../CategorySelector'

export default function EditTransactionModal({ transaction, handleEdit, setShowEditModal }) {
    const [title, setTitle] = useState("");
    const [merchant, setMerchant] = useState("");
    const [amount, setAmount] = useState("");
    const [note, setNote] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [category, setCategory] = useState("");

    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setShowEditModal(false);
        }, 300);
    };

    // Pre-fill input fields when modal opens or transaction changes
    useEffect(() => {
        if (transaction) {
            setTitle(transaction.title || "");
            setMerchant(transaction.merchant || "");
            setAmount(transaction.amount || "");
            setNote(transaction.note || "");
            setDate(transaction.date?.substring(0, 10) || "");
            setTime(transaction.time || "");
            setCategory(transaction.category || "");
        }
    }, [transaction]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedTxn = {
            title,
            merchant,
            amount,
            note,
            date,
            time,
            category
        };

        handleEdit(transaction._id, updatedTxn);
    };

    return (
        <div className="modalDiv fixed inset-0 bg-[rgba(0,0,0,0.4)] z-50 flex justify-center items-center">
            <div
                className={`bg-[#b8fc53] w-150 p-6 rounded-[20px] border-2 border-black 
                    ${isClosing
                        ? 'animate-out fade-out-0 zoom-out-95'
                        : 'animate-in fade-in-0 zoom-in-95'} 
                        duration-300`}
            >

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    <div className="flex justify-between">

                        <h1 className="text-2xl font-bold mb-6 text-black font-sans">Edit a Transaction</h1>

                        <div className="CategoryDiv h-[36.4px]">
                            <CategorySelectIndicator category={category} setCategory={setCategory} />
                        </div>


                        <div>
                            <BasicTimePicker time={time} setTime={setTime} />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="transaction-date" className="mb-1 text-sm font-medium text-black">Transaction Date</label>
                        <BasicDatePicker date={date} setDate={setDate} />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="transactionTitle" className="mb-1 text-sm font-medium text-black">Title</label>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Title"
                            className="bg-white text-black border border-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"

                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="transactionMerchant" className="mb-1 text-sm font-medium text-black">Merchant</label>
                        <input
                            value={merchant}
                            onChange={(e) => setMerchant(e.target.value)}
                            placeholder="Merchant"
                            className="bg-white text-black border border-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>


                    <div className="flex flex-col">
                        <label htmlFor="transactionAmount" className="mb-1 text-sm font-medium text-black">Amount</label>
                        <input
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            type="number"
                            placeholder="Amount"
                            className="bg-white text-black border border-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"

                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="transactionNote" className="mb-1 text-sm font-medium text-black">Note</label>
                        <input
                            type="text"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder="Note"
                            className="bg-white text-black border border-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                    <div className="flex justify-end gap-2">

                        <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 cursor-pointer">
                            Save
                        </button>


                        <button
                            type="button"
                            // onClick={() => setShowEditModal(false)}
                            onClick={handleClose}
                            className="bg-red-500 ml-2 text-black px-4 py-2 rounded hover:bg-red-600"
                        >
                            Cancel
                        </button>

                    </div>
                </form>
            </div>
        </div >
    );
}
