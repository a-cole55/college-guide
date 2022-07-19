import NavBar from "./components/NavBar";
import { BrowserRouter as Router} from 'react-router-dom';
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {

  return (
    <Router>
      <div className="App">
          <NavBar />
          <div className="content">
            <AnimatedRoutes/>
          </div>
      </div>
    </Router>
  );
}

export default App;
