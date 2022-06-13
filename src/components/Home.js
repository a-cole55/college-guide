import HomeLogo from "../assets/college.png";
import NavigationButton from "./Button";

export default function Home(){
    return(
        <div className="home">
        <div className="homeText">
          <h1>College Guide</h1>
          <span>Blah. Blah. Blah.</span>
        </div>
        <img src={HomeLogo} alt="homeLogo"></img>
        <NavigationButton />
      </div>
    )
}