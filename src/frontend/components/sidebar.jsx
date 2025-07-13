import ButtonMain from "./buttons/sideTransactionBtn"


export default function Sidebar() {
    return (
        <aside>
            <div className="sideBarParentDiv bg-[#000101] w-64 min-h-full bg-englishViolet text-white flex flex-col p-4 border-r-[1px] border-white">

                <h1 className="text-4xl font-mono">Track it.</h1>

                <div className="buttonsDiv flex mt-[55px] justify-center">
                    <ButtonMain />
                </div>
            </div>
        </aside>
    )
}