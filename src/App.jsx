import { BrowserRouter, Route, Routes } from "react-router-dom";

import "../server";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import VanDetail from "./pages/VanDetail";
import Vans from "./pages/Vans";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/vans' element={<Vans />}></Route>
          <Route path='/vans/:id' element={<VanDetail />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
