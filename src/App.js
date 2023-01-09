import React from "react";
import './App.css';
import Sidebar from "./components/Sidebar";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import About from "./pages/About";
import Analytics from "./pages/Analytics";
import Comment from "./pages/Comment";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <BrowserRouter>
    <Sidebar>
    <Routes>
    <Route path="/" element={<Dashboard/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/analytics" element={<Analytics/>}/>
      <Route path="/comment" element={<Comment/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/productList" element={<ProductList/>}/>
    </Routes>
    </Sidebar>
    </BrowserRouter>
  );
}

export default App;
