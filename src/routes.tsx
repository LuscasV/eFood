import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";

const Rotas = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<Restaurant />} />
  </Routes>
  )
}

export default Rotas
