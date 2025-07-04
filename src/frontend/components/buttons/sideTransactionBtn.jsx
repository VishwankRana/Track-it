import { Button } from "@/components/ui/button"

export default function ButtonMain() {
    return (
        <div className="flex flex-wrap items-center gap-2 md:flex-row">
            <Button variant="outline" className="bg-[#FC7753] hover:bg-[#fc7853c2] w-62 cursor-pointer text-lg ">Transactions</Button>
        </div >
    )
}
