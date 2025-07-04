import { useState } from "react";
import AddTransaction from "./buttons/addTransaction"
import AddModal from "./modals/addTransactionModal"

export default function TransactionMain() {

    const [showAddModal, setShowAddModal] = useState(false);

    return (
        <div className="flex-1 flex flex-col min-h-screen">
            <div className="headerMain flex items-center h-[78px] w-full border-b border-white">
                <h1 className="text-white ml-5 text-3xl font-serif tracking-[0.1em]">
                    Transactions
                </h1>
            </div>
            <div className="mainContent flex-1 w-full overflow-auto p-5">
                <div> <AddTransaction setShowAddModal={setShowAddModal} /> </div>
                <div> {showAddModal && <AddModal setShowAddModal={setShowAddModal} />}</div>

                <div className="showTransactionParentDiv w-full h-20 border-2 border-red-50 mt-5">
                    <div className="transactionTitle">

                    </div>
                </div>


            </div>
        </div>
    );
}


