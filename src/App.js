import { Home } from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Measurement from "./Pages/measurementPage/Measurement";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/measurement' element={<Measurement />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
