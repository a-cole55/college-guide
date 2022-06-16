import NavigationButton from "./Button"
export default function FinancialAid(){
    return(
        <div className="finaid">
            <h1 className="pageTitle">Paying for College</h1>
            <h2>Scholarships</h2>
            <h2>Financial Aid</h2>
            <h3>Grants</h3>
            <h3>Loans</h3>
            <h4>Subsidized</h4>
            <h4>Unsubsidized</h4>
            <h4>Parent PLUS</h4>
            <h4>Private Loans</h4>
            <h4>Special Circumstances</h4>
            <h5>Special Circumstance Form</h5>
            <h5>Form if you take courses 2 different colleges</h5>
            <h5>Waivers</h5>
            <h6>Foster Care/Adoption Waiver</h6>
            <h6>Veterans</h6>
            <div className="button">
            <a href="/housing"><NavigationButton /></a>
            </div>
        </div>
    )
}