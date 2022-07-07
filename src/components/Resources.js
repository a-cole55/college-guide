import NavigationButton from "./Button";
import "../components/Resources.css";


export default function Resources(){
    return(
        <div className="resources">
            <h1 className="pageTitle">College Resources</h1>
            <h2>Parking and Transportation</h2>
            <h2>Textbooks</h2>
            <h2>Advising</h2>
            <h2>Mental Health</h2>
            <h2>Career Counseling</h2>
            <h2>Transfer Resources</h2>
            <h2>Campus Organizations</h2>
            <div className="button">
                <NavigationButton prop="/choose"/>
            </div>
        </div>

    )
}