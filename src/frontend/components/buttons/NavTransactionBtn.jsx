import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function ButtonMain() {

    const transactionNavigate = useNavigate();

    return (
        <div className="flex flex-wrap items-center gap-2 md:flex-row">
            <Button
                variant="outline"
                className="bg-white hover:bg-[#b8fc53bc] w-62 cursor-pointer text-lg text-black"
                onClick={() => transactionNavigate("/trackit/transactions")}>Transactions</Button>
        </div >
    )
}
