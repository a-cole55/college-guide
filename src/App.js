import HomeLogo from "./assets/college.png"
import NavigationButton from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <img src="" alt="logo"></img>
          <ul className="mainNav">
            <li><a href="/choosing">Choosing a College</a></li>
            <li><a href="/admissions">College Admissions</a></li>
            <li><a href="/finaid">Paying for College</a></li>
            <li><a href="/housing">Housing</a></li>
            <li><a href="/resources">College Resources</a></li>
          </ul>
        </nav>
      </header>
      <div className="home">
        <div className="homeText">
          <h1>College Guide</h1>
          <span>Blah. Blah. Blah.</span>
        </div>
        <img src={HomeLogo} alt="homeLogo"></img>
        <NavigationButton />
      </div>
    </div>
  );
}

export default App;
