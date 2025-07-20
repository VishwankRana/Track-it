export default function CategoryTypeUI({ category }) {
    const categoryStyles = {
        Food: "bg-green-200 text-green-800 border-2 border-green-800",
        Travel: "bg-blue-200 text-blue-800 border-2 border-blue-800",
        Groceries: "bg-orange-200 text-orange-800 border-2 border-orange-800",
        Rent: "bg-yellow-200 text-yellow-800 border-2 border-yellow-800",
        Shopping: "bg-pink-200 text-pink-800 border-2 border-pink-800",
        Healthcare: "bg-cyan-200 text-cyan-800 border-2 border-cyan-800",
        Entertainment: "bg-violet-200 text-violet-800 border-2 border-violet-800",
        Gym: "bg-red-200 text-red-800 border-2 border-red-800",
        Other: "bg-gray-200 text-gray-800 border-2 border-gray-800",
    };

    const appliedStyle = categoryStyles[category] || "bg-white text-black";

    return (
        <div className={`TransactionCategoryTypeDiv flex items-center justify-center w-[100px] h-[40px] rounded-xl ${appliedStyle}`}>
            <p className="text-sm font-semibold">{category}</p>
        </div>
    );
}
