import { Home } from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Measurement from "./Pages/measurementPage/Measurement";
import OrderDetails from "./Pages/orderpage/OrderDetails";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/measurement' element={<Measurement />} />
        <Route path='/orderdetails' element={<OrderDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
