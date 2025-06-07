import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Planos from './components/pages/Planos'; 
import Main from "./main";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} /> 
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/planos" element={<Planos />} /> 
            </Routes>
        </BrowserRouter>
    );
}

export default App;