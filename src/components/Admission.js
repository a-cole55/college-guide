import NavigationButton from "./Button"
export default function Admission(){
    return(
        <div className="admissions">
            <h1 className="pageTitle">Applying to College</h1>
            <div className="button">
            <a className="navigation" href="/finaid"><NavigationButton /></a>
            </div>
        </div>

    )
}