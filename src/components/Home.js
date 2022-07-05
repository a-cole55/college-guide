import HomeLogo from "../assets/college.png";
import NavigationButton from "./Button";

export default function Home(){
    return(
        <div className="home">
        <div className="homeText">
          <h1>College Guide</h1>
          <span className="logo">If you can dream it, you can achieve it.</span>
        </div>
        <img src={HomeLogo} alt="home logo"></img>
        <a className="navigation" href="/choose"><NavigationButton /></a>
      </div>
    )
}