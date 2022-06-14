import NavigationButton from "./Button"
export default function Admission(){
    return(
        <div className="admissions">
            <h1 className="pageTitle">Applying to College</h1>
            <div className="button">
                <NavigationButton prop="/choose"/>
            </div>
        </div>

    )
}