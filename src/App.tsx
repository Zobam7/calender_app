import { format } from "date-fns";
import { useState } from "react";
import Calender from "./calender/Calender";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const resetDate = () => setCurrentDate(new Date());
  return (
    <div className="mt-16 flex flex-col items-center">
      <div className="mb-5 flex flex-col items-center gap-3">
        <p>Selected Date: {format(currentDate, "dd LLLL yyyy")}</p>
        <button
          onClick={resetDate}
          className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-4 py-1 rounded text-sm"
        >
          Today
        </button>
      </div>
      <Calender value={currentDate} onChange={setCurrentDate} />
    </div>
  );
}

export default App;
