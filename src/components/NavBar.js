import {Link} from "react-router-dom"

export default function NavBar(){
    return(
        <header className="App-header">
        <nav>
          <a href="/"><img src="" alt="logo"></img></a>
          <ul className="mainNav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/choose">Choosing a College</Link></li>
            <li><Link to="/admission">College Admissions</Link></li>
            <li><Link to="/finaid">Paying for College</Link></li>
            <li><Link to="/housing">Housing</Link></li>
            <li><Link to="/resources">College Resources</Link></li>
          </ul>
        </nav>
      </header>
    )
}