import { Home } from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Measurement from "./Pages/measurementPage/Measurement";
import OrderDetails from "./Pages/orderpage/OrderDetails";
import Login from "./Pages/authentication/Login";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/measurement' element={<Measurement />} />
        <Route path='/orderdetails' element={<OrderDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
