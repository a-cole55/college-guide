import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <NavBar />
          <Home />
      </div>
    </Router>
  );
}

export default App;
