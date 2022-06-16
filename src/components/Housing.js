import NavigationButton from "./Button"
export default function Housing(){
    return(
        <div className="housing">
            <h1 className="pageTitle">Housing</h1>
            <h2>On-Campus</h2>
            <h2>Off-Campus</h2>
            <h2>Costs</h2>
            <h2>Deciding What's Best For You</h2>
            <div className="button">
            <a className="navigation" href="/resources"><NavigationButton /></a>
            </div>
        </div>

    )
}