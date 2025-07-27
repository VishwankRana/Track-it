import "cally";

export default function FilterButton({ handleCategoryFilter }) {
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
                                    onChange={(e) => handleCategoryFilter(category, e.target.checked)}
                                />
                                <span className="text-sm">{category}</span>
                            </li>
                        ))}
                    </ul>
                </li>

                {/* Date Filter */}
                <li className="dropdown dropdown-left">
                    <div tabIndex={0} role="button" className="btn w-full">Date</div>
                    <ul tabIndex={0} className="dropdown-content menu h-auto w-auto mr-1">
                        <calendar-date class="cally bg-base-100 border border-base-300 shadow-lg rounded-box">
                            <svg aria-label="Previous" className="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                            <svg aria-label="Next" className="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                            <calendar-month></calendar-month>
                        </calendar-date>
                    </ul>
                </li>
            </ul>
        </div>
    );
}