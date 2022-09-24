import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import DashIndex from "./Dashboard/DashIndex";
import "antd/dist/antd.css";

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
