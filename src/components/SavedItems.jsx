/* eslint-disable react/prop-types */
import SavedItem from "./SavedItem";
function SavedItems({ items, onDelete }) {
  return (
    <div className="md:w-[600px] md:flex md:flex-col md:h-[700px] p-2.5">
      <h3 className="text-green-500 font-bold text-3xl bg-slate-300 shadow-xl rounded-xl py-5 px-28 w-full">
        Your Favourite Quotes
        <p className="text-sm text-slate-700">
          Your saved quotes are now stored in local storage and do not disappear
          on refresh
        </p>
      </h3>

      <ul className="overflow-y-auto p-2 max-h-[600px]">
        {items.map((item, index) => {
          return (
            <li
              key={index}
              className="w-full mt-6 mb-2 text-lg font-medium bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 p-4 rounded-md shadow-sm cursor-pointer hover:-translate-y-0.5 hover:shadow-md duration-200"
            >
              <SavedItem item={item} index={index} onDelete={onDelete} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SavedItems;
