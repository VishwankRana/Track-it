import { Button } from "@/components/ui/button"

export default function ButtonMain() {
    return (
        <div className="flex flex-wrap items-center gap-2 md:flex-row">
            <Button variant="outline" className="bg-[#b8fc53] hover:bg-[#b8fc53bc] w-62 cursor-pointer text-lg text-black">Transactions</Button>
        </div >
    )
}
