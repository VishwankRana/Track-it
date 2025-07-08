import Button from '@mui/material/Button';
import dayjs from "dayjs";
import deleteIcon from "@/assets/delete-icon.svg"
import editIcon from "@/assets/edit-icon.svg"


export default function TransactionDetailsTile({ transaction, handleDelete }) {
    return (
        <>
            {transaction && (
                <div className="TransactionDetailsTileParentDiv">
                    {transaction.map((txn, index) => (
                        <div key={txn._id || index} className="TransactionDetailsTileDiv flex w-full bg-[#3d495b] mt-5 min-h-15 rounded-2xl shadow-2xl">
                            <div className="titleP flex-6 flex justify-start px-2 items-center text-white text-xl font-mono ">{txn.title}</div>
                            <div className="merchantP flex-6 flex justify-start px-2 items-center text-white text-xl font-mono ">{txn.merchant}</div>
                            <div className="amountP flex-6 flex justify-start px-2 items-center text-white text-xl font-mono ">₹{txn.amount}</div>
                            <div className="DateTimeP flex-6 flex justify-start px-2 items-center text-white text-xl font-mono ">
                                {txn.date ? dayjs(txn.date).format("DD-MM-YYYY") : "No Date"} ({txn.time})
                            </div>
                            <div className="noteP flex-6 flex justify-start px-2 items-center text-white text-l font-sans">{txn.note}</div>
                            <div>

                                <div className='deleteBtnDiv flex justify-center w-full h-full px-2 py-2 flex-row'>
                                    <button className="cursor-pointer" onClick={() => handleDelete(txn._id)}>
                                        <img src={deleteIcon} alt="Delete icon" />
                                    </button>
                                    <button className='cursor-pointer'>
                                        <img src={editIcon} alt="Edit icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
