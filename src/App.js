import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Products from "./components/Products/Products";
import Product from "./components/Products/Product/Product";

function App() {
  return (
    <div className="App">
     <Navbar />
    
    <Routes>
    <Route path="/" element={<Home/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       
       <Route path="/products" element={<Products/>}></Route>
       <Route path="/products:id" element={<Product/>}></Route>
     </Routes>
   
    </div>
  );
}

export default App;
