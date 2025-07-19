import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom";

export default function NavDashboardBtn() {

    const dashboardNavigate = useNavigate();

    return (
        <div className="flex flex-wrap items-center gap-2 md:flex-row">
            <Button
                variant="outline"
                className="bg-[#b8fc53] hover:bg-[#b8fc53bc] w-62 cursor-pointer text-lg text-black"
                onClick={() => dashboardNavigate('/trackit/dashboard')}>Dashboard</Button>
        </div >
    )
}
