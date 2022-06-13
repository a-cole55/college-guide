import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ChooseCollege from "./components/ChooseCollege";
import Admissions from "./components/Admissions";
import FinancialAid from "./components/FinancialAid";
import Housing from "./components/Housing";
import Resources from "./components/Resources";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Router>
          <NavBar />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/choose" element={<ChooseCollege/>} />
              <Route path="/admissions" element={<Admissions/>} />
              <Route path="/financialaid" element={<FinancialAid/>} />
              <Route path="/housing" element={<Housing/>} />
              <Route path="/resources" element={<Resources/>} />
            </Routes>
          </Router>

      </div>
  );
}

export default App;
