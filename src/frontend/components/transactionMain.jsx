import { useState, useEffect } from "react";
import AddTransaction from "./buttons/addTransaction"
import AddModal from "./modals/addTransactionModal"
import TransactionDetailsTile from "./detailsTile"
import dayjs from "dayjs";


export default function TransactionMain() {

    const [showAddModal, setShowAddModal] = useState(false);
    const [transaction, setTransaction] = useState([]);
    const [selectedDate, setSelectedDate] = useState(dayjs());

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/trackit/transactions");
                const data = await res.json();
                setTransaction(data);
            } catch (err) {
                console.error("❌ Failed to fetch transactions:", err.message);
            }
        };

        fetchTransactions();
    }, []);

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/api/trackit/transactions/${id}`, {
                method: 'DELETE',
            });

            if (!res.ok) throw new Error("Failed to delete Transaction")
            setTransaction((prev) => prev.filter((txn) => txn._id !== id))
        } catch (err) {
            console.error("❌ Error deleting transaction:", err.message);
            console.log("🗑️ Deleting transaction with ID:", id);
        }
    }

    return (

        <div className="flex-1 flex flex-col min-h-screen">
            <div className="headerMain flex items-center h-[78px] w-full border-b border-white">
                <h1 className="text-white ml-5 text-3xl font-serif tracking-[0.1em]">
                    Transactions
                </h1>
            </div>
            <div className="mainContent flex-1 w-full overflow-auto p-5">
                <div> <AddTransaction setShowAddModal={setShowAddModal} /> </div>
                <div> {showAddModal && <AddModal setShowAddModal={setShowAddModal} setTransaction={setTransaction} />}</div>



                <div className="detailsParentDiv">
                    <div className="detailsDiv flex w-full mt-6 justify-start text-white text-xl font-serif tracking-[0.1em]">
                        <p className="flex justify-start flex-5 px-2">Title</p>
                        <p className="flex justify-start flex-5 px-2">Merchant</p>
                        <p className="flex justify-start flex-5 px-2">Amount</p>
                        <p className="flex justify-start flex-5 px-2">Date/Time</p>
                        <p className="flex justify-start flex-5 px-2">Note</p>
                    </div>
                </div>

                <TransactionDetailsTile
                    transaction={transaction}
                    handleDelete={handleDelete}
                />


                {/* {transaction && (
                    <div>
                        {transaction.map((txn, index) => (
                            <div key={txn._id || index} className="showTransactionParentDiv w-full border-2 border-red-50 mt-5">
                                <div className="text-white flex justify-between items-center ">
                                    {txn.title} - ₹{txn.amount}
                                    <div><button onClick={() => handleDelete(txn._id)} className="border-2 bg-red-600 cursor-pointer">Delete</button></div>
                                </div>
                            </div>
                        ))}

                    </div>
                )} */}
            </div>
        </div>
    );

}