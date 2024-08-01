import { useEffect, useState } from "react";
import SavedItems from "./SavedItems";
import Header from "./Header";
import { useLocalStorageState } from "./useLocalStorageState";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
function App() {
  const [data, setData] = useState("");
  const [savedItems, setSavedItems] = useLocalStorageState([], "Saved");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  async function fetchData() {
    try {
      setIsLoading(true);
      const res = await fetch(
        "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
      );
      const body = await res.json();
      console.log(body[0]);
      setData(body[0]);
      setIsLoading(false);
      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  function handleSave() {
    const isThere = savedItems.find((item) => item === data);
    if (!isThere) {
      setSavedItems((prev) => [...prev, data]);
      toast.success("Successfully Saved");
    } else {
      toast.error("Already saved in List");
    }
  }

  async function handleRandomQuote() {
    await fetchData();
  }

  function handleDelete(index) {
    setSavedItems((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col md:flex-row items-center md:justify-center gap-6 bg-[#e8e8e8]">
        <div className="flex justify-center items-center flex-col w-3/4 md:w-1/2">
          <h1 className="p-6 text-xl md:text-2xl font-semibold w-full min-h-52 text-center flex items-center justify-center bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 rounded-lg shadow-md ">
            {isLoading && "Fetching Random Quote Please wait...."}
            {!isLoading && !error && `${data}`}
            {error && "Unknown error occurred 😞"}
          </h1>
          <div className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 m-4 font-bold text-md md:text-lg justify-around items-center">
            <button
              onClick={handleSave}
              className="bg-gradient-to-l from-slate-300 to-slate-100 border border-slate-300 p-2 px-4 md:p-3 md:px-6  rounded-lg shadow-sm hover:-translate-y-0.5 hover:shadow-md duration-200 text-amber-800"
            >
              Add to Favourites
            </button>
            <button
              onClick={handleRandomQuote}
              className="bg-gradient-to-l from-slate-300 to-slate-100 border border-slate-300 p-2 px-4 md:p-3 md:px-6 rounded-lg shadow-sm hover:-translate-y-0.5 hover:shadow-md duration-200"
            >
              Get Random Quote
            </button>
          </div>
        </div>
        <Toaster position="top-center" />
        <div className="text-center">
          <SavedItems items={savedItems} onDelete={handleDelete} />
        </div>
      </div>
    </>
  );
}

export default App;
