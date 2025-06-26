import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Planos from './components/pages/Planos'; 
import ForgotPassword from './components/pages/ForgotPassword';
import ResetPassword from './components/pages/ResetPassword';
import TermsOfUse from "./components/pages/TermsOfUse";
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import Main from "./main";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} /> 
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/forgot-password/:userId/:token" element={<ResetPassword />} />
                <Route path="/register" element={<Register />} />
                <Route path="/planos" element={<Planos />} /> 
                <Route path="/terms-of-use" element={<TermsOfUse />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;