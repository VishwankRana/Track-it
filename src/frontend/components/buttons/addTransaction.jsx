import { Button } from "@/components/ui/button";
import addIcon from "@/assets/add_box.png"


export default function AddTransaction({ setShowAddModal }) {
    return (
        <>
            <div className="flex-wrap items-center gap-2 md:flex-row inline-block">
                <Button
                    onClick={() => setShowAddModal(true)}
                    variant="outline"
                    className="bg-white text-black hover:bg-[#b8fc53bc] border-2 border-black h-12 w-55 cursor-pointer text-lg">
                    Add Transaction
                    <img src={addIcon} alt="Add" className="w-7 h-7" />
                </Button>

            </div >
        </>
    )
}