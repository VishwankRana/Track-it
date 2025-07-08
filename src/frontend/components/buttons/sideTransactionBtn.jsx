import { Button } from "@/components/ui/button"

export default function ButtonMain() {
    return (
        <div className="flex flex-wrap items-center gap-2 md:flex-row">
            <Button variant="outline" className="bg-[#002029] hover:bg-[#004052] w-62 cursor-pointer text-lg ">Transactions</Button>
        </div >
    )
}
