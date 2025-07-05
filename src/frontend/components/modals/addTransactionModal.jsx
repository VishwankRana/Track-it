import { use } from "react";
import { useState } from "react";

export default function AddModal({ setShowAddModal, setTransaction }) {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setShowAddModal(false);
        }, 300);
    };


    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [note, setNote] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const transactionData = {
            title,
            amount: Number(amount),
            note
        }

        try {
            const res = await fetch("http://localhost:5000/api/trackit/transactions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, amount, note })
            });

            if (!res.ok) throw new Error("Failed to add transaction");
            const data = await res.json();
            console.log("Transaction saved!!", data);
            setTransaction((prev) => [...prev, data]);

            setIsClosing(true);
            setTimeout(() => {
                setShowAddModal(false);
            }, 300);
        } catch (err) {
            console.error("❌ Error submitting form:", err.message);
        }



    };

    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] z-50 flex justify-center items-center">
            <div
                className={`bg-[#b8fc53] w-full max-w-md p-6 rounded-[20px] border-2 border-black 
        ${isClosing
                        ? 'animate-out fade-out-0 zoom-out-95'
                        : 'animate-in fade-in-0 zoom-in-95'} 
        duration-300`}
            >
                <h1 className="text-2xl font-bold mb-6 text-black font-sans">Add a Transaction</h1>

                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                    <div className="flex flex-col">
                        <label htmlFor="transactionTitle" className="mb-1 text-sm font-medium text-black">Title</label>
                        <input
                            type="text"
                            id="transactionTitle"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            name="transactionTitle"
                            className="bg-white border border-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="e.g., Grocery shopping"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="transactionAmount" className="mb-1 text-sm font-medium text-black">Amount</label>
                        <input
                            type="number"
                            id="transactionAmount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            name="transactionAmount"
                            className="bg-white border border-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="₹1000"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="transactionNote" className="mb-1 text-sm font-medium text-black">Note</label>
                        <input
                            type="text"
                            id="transactionNote"
                            name="transactionNote"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            className="bg-white border border-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="Leave a Note"
                        />
                    </div>

                    <div className="mt-4 flex flex-row justify-end">
                        <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 cursor-pointer">
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={handleClose}
                            className="bg-red-500 ml-2 text-black px-4 py-2 rounded hover:bg-red-600"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

