import { useState, useEffect } from "react";
import AddTransaction from "./buttons/addTransaction";
import AddModal from "./modals/addTransactionModal";
import TransactionDetailsTile from "./detailsTile";
import EditTransactionModal from "./modals/editTransactionsModal";
import BasicMonthSelect from "./monthPicker";
import dayjs from "dayjs";
import Sidebar from './sidebar';


export default function TransactionMain() {
    const [showAddModal, setShowAddModal] = useState(false);
    const [transaction, setTransaction] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(dayjs().month());

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
                method: "DELETE",
            });

            if (!res.ok) throw new Error("Failed to delete Transaction");
            setTransaction((prev) => prev.filter((txn) => txn._id !== id));
        } catch (err) {
            console.error("❌ Error deleting transaction:", err.message);
        }
    };

    const handleEdit = async (id, updatedData) => {
        try {
            const res = await fetch(`http://localhost:5000/api/trackit/transactions/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedData),
            });

            if (!res.ok) throw new Error("Failed to update Transaction");
            const updatedTxn = await res.json();

            setTransaction((prev) =>
                prev.map((txn) => (txn._id === id ? updatedTxn : txn))
            );
            setShowEditModal(false);
        } catch (err) {
            console.error("❌ Error Updating transaction:", err.message);
        }
    };


    const filteredTransactions = transaction.filter(
        (txn) => dayjs(txn.date).month() === selectedMonth
    );

    const totalExpense = filteredTransactions.reduce((acc, txn) => acc + Number(txn.amount), 0);

    return (
        <div className="flex-1 flex flex-col min-h-screen">
            <Sidebar />

            <div className="headerMain flex items-center h-[78px] w-full border-b border-white">

                <h1 className="text-white ml-5 text-3xl font-serif tracking-[0.1em]">Transactions</h1>
            </div>
            <div className="mainContent flex-1 w-full overflow-auto p-5">
                <div>
                    <AddTransaction setShowAddModal={setShowAddModal} />
                </div>

                <div className="monthlyOverViewDiv flex items-center justify-between px-5">
                    <BasicMonthSelect setSelectedMonth={setSelectedMonth} />

                    <div className='overallSpendDiv text-red-500 text-[40px] font-mono'>
                        -{totalExpense}
                    </div>
                </div>

                {showAddModal && (
                    <AddModal
                        setShowAddModal={setShowAddModal}
                        setTransaction={setTransaction}
                    />
                )}

                <div className="detailsParentDiv">
                    <div className="detailsDiv flex w-full mt-6 justify-start text-white text-xl font-serif tracking-[0.1em]">
                        <p className="w-[160px] flex justify-center px-2">Title</p>
                        <p className="w-[160px] flex justify-center px-2">Merchant</p>
                        <p className="w-[120px] flex justify-center px-2">Amount</p>
                        <p className="w-[214px] flex justify-center px-2">Date/Time</p>
                        <p className="w-[380px] flex justify-center px-2">Note</p>
                    </div>

                    {filteredTransactions.length > 0 ? (
                        <TransactionDetailsTile
                            transaction={filteredTransactions}
                            handleDelete={handleDelete}
                            setShowEditModal={setShowEditModal}
                            setSelectedTransaction={setSelectedTransaction}
                        />
                    ) : (
                        <div className="flex justify-center items-center w-full h-[200px]">
                            <p className="text-white text-2xl font-serif tracking-wide border-2 border-white p-5 bg-red-500">
                                No transaction was made!!
                            </p>
                        </div>
                    )}

                </div>
            </div>

            {showEditModal && (
                <EditTransactionModal
                    setShowEditModal={setShowEditModal}
                    transaction={selectedTransaction}
                    handleEdit={handleEdit}
                />
            )}
        </div>
    );
}
