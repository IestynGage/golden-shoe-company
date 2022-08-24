import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import CartScreen from "./screens/CartScreen/CartScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import OrderDetailScreen from "./screens/OrderDetailScreen/OrderDetailScreen";

import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/orders" element={<CartScreen />} />
          <Route path="/orders/*" element={<OrderDetailScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
