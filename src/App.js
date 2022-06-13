import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ChooseCollege from "./components/ChooseCollege";
import Admission from "./components/Admission";
import FinancialAid from "./components/FinancialAid";
import Housing from "./components/Housing";
import Resources from "./components/Resources";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <NavBar />
          <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/choose" element={<ChooseCollege/>} />
            <Route path="/admission" element={<Admission/>} />
            <Route path="/finaid" element={<FinancialAid/>} />
            <Route path="/housing" element={<Housing/>} />
            <Route path="/resources" element={<Resources/>} />
          </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
