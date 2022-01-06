import Homepage from "./Components/Homepage/Homepage";
import { useState } from "react";
import Loader from "./Components/Loader/Loader";

function App() {
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, 4000);

  return (
    <div className="App">
      {
        loader ? <Loader /> : <Homepage />
      }
    </div>
  );
}

export default App;
