import Button from '@mui/material/Button';
import dayjs from "dayjs";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function TransactionDetailsTile({ transaction, handleDelete, handleEdit, setShowEditModal,
    setSelectedTransaction }) {

    return (
        <>
            {transaction && (
                <div className="TransactionDetailsTileParentDiv">
                    {transaction.map((txn, index) => (
                        <div key={txn._id || index} className="TransactionDetailsTileDiv flex w-full bg-[#b8fc53] mt-5 min-h-15 rounded-2xl shadow-2xl justify-between">
                            <div className="titleP w-[160px] flex justify-center px-2 items-center text-[#110e1b] text-xl font-mono ">{txn.title}</div>
                            <div className="merchantP w-[160px] flex justify-center px-2 items-center text-[#110e1b] text-xl font-mono ">{txn.merchant}</div>
                            <div className="amountP w-[120px] flex justify-center px-2 items-center text-[#110e1b] text-xl font-mono ">₹{txn.amount}</div>
                            <div className="DateTimeP w-[214px] flex justify-center px-2 items-center text-[#110e1b] text-xl font-mono  ">
                                {txn.date ? dayjs(txn.date).format("DD-MM-YYYY") : "No Date"} ({txn.time})
                            </div>
                            <div className="noteP w-[380px] flex justify-start px-2 items-center text-[#110e1b] text-xl font-sans">{txn.note}</div>
                            <div className='TransactionCategoryTypeDiv flex items-center'>Category</div>



                            <div>

                                <div className='deleteBtnDiv m-[0px] p-[0px] w-55 rounded-2xl flex justify-end items-center h-full px-2 py-2 flex-row'>
                                    <Button variant="contained"
                                        onClick={() => handleDelete(txn._id)}
                                        sx={{
                                            height: "40px",
                                            width: "90px",
                                            backgroundColor: '#ff0600',
                                            borderRadius: '8px',
                                            boxShadow: 2,
                                            textTransform: 'none',
                                            marginRight: 1,
                                            fontWeight: 500,


                                            '&:hover': {
                                                backgroundColor: '#b00600',
                                                boxShadow: 4,
                                            }
                                        }}


                                        startIcon={<DeleteIcon />}>
                                        Delete
                                    </Button>

                                    <Button variant="contained"
                                        onClick={() => { setShowEditModal(true), setSelectedTransaction(txn); }}
                                        sx={{
                                            height: "40px",
                                            width: "90px",
                                            backgroundColor: '#053afe',
                                            borderRadius: '8px',
                                            boxShadow: 2,
                                            textTransform: 'none',
                                            marginRight: 1,
                                            fontWeight: 500,


                                            '&:hover': {
                                                backgroundColor: '#053acb',
                                                boxShadow: 4,
                                            }
                                        }}
                                        startIcon={<EditIcon />}>
                                        Edit
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div >
            )
            }
        </>
    );
}
