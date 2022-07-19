import Home from "./Home";
import ChooseCollege from "./ChooseCollege";
import Admission from "./Admission";
import FinancialAid from "./FinancialAid";
import Housing from "./Housing";
import Resources from "./Resources";
import { Route, Routes, useLocation}  from "react-router-dom";

import {AnimatePresence} from 'framer-motion'

export default function AnimatedRoutes() {
    const location = useLocation();
    return(
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>} />
            <Route path="/choose" element={<ChooseCollege/>} />
            <Route path="/admission" element={<Admission/>} />
            <Route path="/finaid" element={<FinancialAid/>} />
            <Route path="/housing" element={<Housing/>} />
            <Route path="/resources" element={<Resources/>} />
      </Routes>
    </AnimatePresence>
    )
};