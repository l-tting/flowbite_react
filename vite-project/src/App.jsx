import { Routes,Route } from "react-router-dom";
import Header from "./assets/Components/Bars/Header";
import Register from "./assets/Pages/Register";
import Login from "./assets/Pages/Login";
import Landing from "./assets/Pages/Landing";
import DashBoard from "./assets/Pages/DashBoard";
import Products from "./assets/Pages/Products";
import Sales from "./assets/Pages/Sales";
import Contact from "./assets/Pages/Contact";
import NotFound from "./assets/Pages/404";
import Footer from "./assets/Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={< Landing/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
