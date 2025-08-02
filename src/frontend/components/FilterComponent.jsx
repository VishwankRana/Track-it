import "cally";
// import Calender from "./calender";
import DateRangePicker from "./calender"

export default function FilterButton({ handleCategoryFilter, ClearCategoryFilter, selectedCategories, dateRange, setDateRange, onApply }) {
    const categories = [
        "Food", "Groceries", "Rent", "Shopping",
        "Healthcare", "Entertainment", "Travel", "Gym", "Other"
    ];

    return (

        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1 bg-white text-black">Filter</div>

            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box w-52 p-0 shadow-sm">
                {/* Category Filter */}
                <li className="dropdown dropdown-left">
                    <div tabIndex={0} role="button" className="btn w-full">Category</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 mr-2 z-10 w-52 p-2 rounded-box shadow-sm">
                        {categories.map((category, index) => (
                            <li key={index} className="flex items-center flex-row gap-2 px-2 py-1">
                                <input
                                    type="checkbox"
                                    className="checkbox flex checkbox-sm"
                                    checked={selectedCategories.includes(category)}
                                    onChange={() => handleCategoryFilter(category)}
                                />
                                <span className="text-sm">{category}</span>

                            </li>
                        ))}
                        <div className="clearBtnDiv flex justify-end m-2">
                            <button
                                className="btn btn-sm bg-red-700"
                                onClick={ClearCategoryFilter}
                            >
                                Clear
                            </button>
                        </div>
                    </ul>
                </li>


                {/* Date Filter */}
                <li className="dropdown dropdown-left">
                    <div tabIndex={0} role="button" className="btn w-full">Date</div>
                    <ul tabIndex={0} className="dropdown-content menu h-auto w-auto mr-1">
                        <DateRangePicker onApply={setDateRange} />
                    </ul>
                </li>
            </ul>
        </div>

    );
}