import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home"
import CreateProduct  from "@/pages/CreateProduct";
import Product from "@/pages/Product";
import Navbar from "@/components/Header";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createproduct" element={<CreateProduct />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
