import NavBar from "./components/NavBar";
import { BrowserRouter as Router} from 'react-router-dom';
import AnimatedRoutes from "./components/AnimatedRoutes";
import SupportEngine from "./SupportEngine/index.js";

function App() {

  return (
    <Router>
      <div className="App">
          <NavBar />
          <div className="content">
            <AnimatedRoutes/>
            <SupportEngine style= {{position: "fixed", bottom: "20px", right: "50px"}}/>
          </div>
      </div>
    </Router>
  );
}

export default App;
