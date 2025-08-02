// import { useState } from "react";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";

// export default function DateRangePicker({ dateRange, setdateRange }) {

//     return (
//         <>
//             <button
//                 popoverTarget="rdp-popover"
//                 className="input input-border"
//                 style={{ anchorName: "--rdp" }}
//             >
//                 {dateRange?.from && dateRange?.to
//                     ? `${dateRange.from.toLocaleDateString()} - ${dateRange.to.toLocaleDateString()}`
//                     : "Pick a date range"}
//             </button>

//             <div
//                 popover="auto"
//                 id="rdp-popover"
//                 className="dropdown"
//                 style={{ positionAnchor: "--rdp" }}
//             >

//                 <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
//                     <DayPicker
//                         mode="range"
//                         selected={dateRange}
//                         onSelect={setdateRange}
//                         className="text-white"
//                         modifiersClassNames={{
//                             selected: "bg-blue-500 text-white",
//                             range_middle: "bg-gray-700 m-0 p-0",
//                             today: "text-yellow-400 font-bold"
//                         }}
//                     />

//                 </div>
//             </div>
//         </>
//     );
// }

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function DateRangePicker({ onApply }) {
    const [tempRange, setTempRange] = useState();

    return (
        <div>

            <div>
                <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
                    <DayPicker
                        mode="range"
                        selected={tempRange}
                        onSelect={setTempRange}
                        className="text-white"
                    />
                    <div className="flex justify-end mt-3 gap-2">
                        <button
                            className="btn btn-sm btn-outline"
                            onClick={() => {
                                setTempRange(undefined);
                                if (typeof onApply === "function") {
                                    onApply(undefined);
                                }
                            }}
                        >
                            Clear
                        </button>
                        <button
                            className="btn btn-sm btn-primary"
                            onClick={() => onApply(tempRange)}
                            disabled={!tempRange?.from || !tempRange?.to}
                        >
                            Apply
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

