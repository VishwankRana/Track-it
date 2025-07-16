import ButtonMain from "./buttons/sideTransactionBtn"


export default function Sidebar() {
    return (
        <aside>
            <div className="sideBarParentDiv flex justify-center items-center bg- bg-[#000101] w-full h-20 text-white border-b-[1px] border-white">

                <h1 className="text-4xl font-mono">Track it.</h1>

                {/* <div className="buttonsDiv flex justify-center items-center">
                    <ButtonMain />
                </div> */}
            </div>
        </aside>
    )
}