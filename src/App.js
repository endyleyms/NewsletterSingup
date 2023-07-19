import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SingUp from "./pages/Singup";
import { Sucess } from "./pages/Sucess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SingUp />} />
        <Route path="/sucess" element={<Sucess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
