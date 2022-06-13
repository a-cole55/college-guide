import {Link} from "react-router-dom"

export default function NavBar(){
    return(
        <header className="App-header">
        <nav>
          <a href="/"><img src="" alt="logo"></img></a>
          <ul className="mainNav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/choose">Choosing a College</Link></li>
            <li><a href="/admission">College Admissions</a></li>
            <li><a href="/finaid">Paying for College</a></li>
            <li><a href="/housing">Housing</a></li>
            <li><a href="/resources">College Resources</a></li>
          </ul>
        </nav>
      </header>
    )
}