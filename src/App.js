import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home.jsx";
import Imagesearch from "./Imagesearch/Imagesearch.jsx";
import Currenttime from "./smartwatch/Currenttime.jsx";
import Error from "./smartwatch/Error.jsx";
import Smartwatch from "./smartwatch/Smartwatch.js";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* Your application content */}

          {/* Define your routes here */}
          <Routes>
            <Route path="/" exact element={<Smartwatch />} />
            <Route path="/imagesearch" exact element={<Imagesearch />} />
            <Route path="*" element={<Error />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
