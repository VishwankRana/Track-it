import ButtonMain from "./buttons/NavTransactionBtn"
import NavDashboardBtn from "./buttons/NavDashboardBtn"


export default function Navbar() {
    return (
        <aside>
            <div className="NavBarParentDiv bg-[#000101] w-full h-20 text-white border-b-[1px] border-white flex items-center">

                <div className="LogoDiv 600 w-60">
                    <h1 className="text-4xl font-mono ml-5">Track it.</h1>
                </div>

                <div className="buttonsDiv flex justify-center flex-row w-full gap-5">
                    <ButtonMain />
                    <NavDashboardBtn />
                </div>
            </div>
        </aside>
    );
}
