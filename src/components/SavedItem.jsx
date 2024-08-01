/* eslint-disable react/prop-types */
function SavedItem({ item, index, onDelete }) {
  return (
    <div className="flex gap-1 items-center justify-between">
      <h2>{item}</h2>
      <button
        onClick={() => onDelete(index)}
        className="rounded-full py-0.5 px-2.5 bg-red-400 text-white hover:bg-red-600"
      >
        X
      </button>
    </div>
  );
}

export default SavedItem;
