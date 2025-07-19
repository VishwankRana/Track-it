import Navbar from "./navbar"


export default function TrackitDashboard() {
    return (
        <div className="DashboardMainDiv m-0 p-0 w-full h-full">
            <Navbar />
            <div className="headerMain flex items-center h-[78px] w-full">
                <h1 className="text-white ml-5 text-3xl font-serif tracking-[0.1em]">Dashboard</h1>
            </div>

            <div className="MainParentDashboardDiv flex flex-row p-5">
                {/* First Column of Dashboard  */}
                <div className="MainDivOneDashboard flex flex-col">
                    <div className="TotalBalanceCard w-87 h-52 text-white bg-[#5dc7ee] rounded-2xl">
                        <div className="TotalBalanceCardNameDiv flex flex-col justify-between py-2 px-3 h-31">
                            <p className="text-xl font-semibold">Balance Card</p>
                            <p className="text-lg">Vishwank Rana</p>
                        </div>
                        <div className="TotalBalanceDiv flex flex-col h-19 px-3 justify-end">
                            <h6 className="text-[10px]">Balance Amount</h6>
                            <p className="text-2xl font-bold">$500000</p>
                        </div>
                    </div>

                    <div className="DailyLimitCardDiv h-20 w-87 bg-red-300 mt-5 rounded-2xl p-2 font-semibold">
                        <div><p>Daily Limit</p></div>
                    </div>

                    <div className="SavingPlansCardDiv bg-emerald-500 w-87 h-auto min-h-30 mt-5 rounded-2xl">
                        <p className="font-semibold p-2">Savings Plan</p>
                    </div>
                </div>

                {/*Second Column of Dashboard  */}

                <div className="MainDivTwoDashboard flex flex-col ml-5">

                    <div className="TotalIncomeSavingsExpenseParentDiv flex flex-row gap-3">
                        <div className="TotalIncomeDiv h-50 w-56 bg-red-500 rounded-2xl p-2">
                            <p className="font-semibold">Total Income</p>
                        </div>

                        <div className="TotalSavingsDiv h-50 w-56 bg-yellow-300 rounded-2xl p-2">
                            <p className="font-semibold">Total Savings</p>
                        </div>

                        <div className="TotalExpenseDiv h-50 w-56 bg-green-300 rounded-2xl p-2  ">
                            <p className="font-semibold">Total Expense</p>
                        </div>
                    </div>


                    <div className="CashFlowParentDiv w-174 h-70 bg-pink-200 mt-5 rounded-2xl p-2">
                        <h2 className="font-semibold">Cash Flow</h2>
                    </div>

                </div>

                {/*Third Column of Dashboard*/}

                <div className="MainDivThirdDashboard flex flex-col ml-5">
                    <div className="StatsCardDiv bg-cyan-500 h-124 w-103 rounded-2xl">
                        <h2 className="font-semibold p-2 ">Statistics</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}