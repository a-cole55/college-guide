import NavigationButton from "./Button";
import "../components/FinancialAid.css";
import Money from "../assets/moneyImg.png";
import {motion} from "framer-motion";
import {Link} from "react-router-dom"

const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]};

export default function FinancialAid(){
    return(
        <motion.div className="finaid"
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        duration= {transition}>
            <h1 className="pageTitle">Paying for College</h1>
            <div className="content">
                <div className="info">
            <p>Typically the cost of a college education is the most important deciding factors when
                determining which college to attend. Tuition, textbooks, and housing costs can quickly
                add up. Financial aid is a resource to help families reduce the financial burden of 
                a college degree. In this section, we will go over some different types of aid that 
                can make up a financial aid award. A financial aid award can consist of grants, loans, 
                and scholarships. It is worth noting, that in order to receive 
                financial aid, you have to apply at <a href="https://studentaid.gov/h/apply-for-aid/fafsa">
                https://studentaid.gov/h/apply-for-aid/fafsa</a>. It's important to check with your 
                college to see what's their financial aid priority deadline because this can impact
                the amount of financial aid you receive as some awards (such as grants) are awarded 
                on a first-come, first-serve basis (excluding the pell grant).
            </p>
            <img src={Money} alt="money animation"></img>
            <h2>Scholarships</h2>
            <p>Scholarships are free money, that does not have to be repaid. Some scholarships are 
                merit based (ie. academic or athletic performance), some are financial need based, and some are awarded based on a lottery
                system (ie. enter a drawing). There are national scholarships, as well as statewide, and local.
                To increase your chances of being awarded a scholarship, I recommend starting locally.
                Typically your high school counselor will have a list of scholarship opportunities for
                guidance on where to start. Some other local organizations to consider, banks, VFW, 
                community organizations (ie. parent associations), student organizations, churches, 
                businesses, etc. If you work, you may want to check with your employer to see if they 
                offer scholarships for students entering college as well.

                Be prepared, some scholarships may require a bit of work, whether this is an essay, interview,
                video recording, etc. If you need help on where to start searching for scholarships, some
                resources are listed below.
            </p>
            <h2>Grants</h2>
            <p>Grants are free money, that is financial need based (meaning your family income can impact whether
                 you would qualify). Grants are awarded as a part of your financial aid package directly
                from your college. There are national grants such as the pell grant and state grants (for example, 
                in Texas, there's the TPEG grant which stands for Texas Public Educational Grant).
            </p>
            <h2>Loans:</h2>
            <p>Loans are NOT free money, they have to be paid back (with interest). There are 3 type of loans that 
                can be included in your financial aid package: subsidized, Unsubsidized, and Parent Plus. Below we 
                will discuss the difference of each.</p>
            <h3>Subsidized</h3>
            <p>The subsidized loan is financial need based. You do have to complete the FAFSA in order to receive it.
                The subsidized loan does NOT accrue any interest while you're in school (enrolled in at least 6 credit
                hours). You will be expected to begin repaying the loan, 6 months after finishing school (graduation 
                or dropping below half-time enrollment (6 hours).
                </p>
            <h3>Unsubsidized</h3>
            <p>The Unsubsidized loan is NOT based on financial need, this means that pretty much anyone that applies for
                financial aid will be awarded the unsubsidized loan. Interest begins accruing immediately after it's
                disbursed and similar to the subsidized loan it has to be repaid beginning 6 months after finishiing
                school or dropping below half-tiime enrollment.
            </p>
            <h3>Parent PLUS</h3>
            <p>The Parent PLUS is unique because although it's awarded and included as a part of your financial aid package
                it's not actually your loan. As the name suggests, it would be your parent's loan. The Parent PLUS loan is 
                not need based but does require credit approval. Typically students are awarded approximately $5000 as a 
                starting Parent PLUS amount, but if credit approved, your parent has the option to increase this loan amount, 
                if interested. All they would need to do is contact your college, once approved for the loan to increase the 
                amount. Typically you can obtain more details on how to apply for the loan from your school's Financial aid
                office. You can also view more details here: <a href="https://studentaid.gov/plus-app/parent/landing">
                https://studentaid.gov/plus-app/parent/landing
                </a>
            </p>
            <h4>Special Circumstances</h4>
            <p>If you have a special circumstance such as parent divorce, conservatorship, loss of employment, etc. You can contact
                your college's financial aid office to see if you may qualify for additional aid. This is not guaranteed and determined
                by your school.
            </p>
            <h4>Texas Application For State Financial Aid (TASFA)</h4>
            <p>For Texas Residents, The Texas Application for State Financial Aid (TASFA) is used to collect information to help determine 
                eligibility for state financial aid programs that are administered by institutions of higher education in the state of Texas. 
                Students that are classified as a Texas Resident who cannot apply for federal financial aid using the Free Application for 
                Federal Student Aid (FAFSA) are encouraged to complete the TASFA. To review the FAFSA filing requirements, visit studentaid.gov 
                or visit the financial aid office at the institution you plan to attend. You can access the TASFA application from your 
                school, or <a href="http://www.collegeforalltexans.com/index.cfm?objectid=A3119543-CBF8-C202-F1B0EEFD5F4B9805">here</a> at 
                College for All Texans.</p>
            <h5>Tuition Waivers/Exemptions</h5>
            <p>There are many different waivers and tuition exemptions available to assist with college costs, for a complete list (as a Texas Resident), you can 
                visit <a href="http://www.collegeforalltexans.com/">http://www.collegeforalltexans.com/</a>. Some tuition exemptions include
                former foster care, military, and blind or deaf tuition exemptions.</p>
            <h4>Resources:</h4>
            <li><strong>Understand Subsidized and Unsubsized Loans </strong><a href="https://studentaid.gov/understand-aid/types/loans/subsidized-unsubsidized">https://studentaid.gov/understand-aid/types/loans/subsidized-unsubsidized</a></li>
            <li><strong>Texas Application for State Financial Aid </strong><a href="http://www.collegeforalltexans.com/index.cfm?objectid=A3119543-CBF8-C202-F1B0EEFD5F4B9805">http://www.collegeforalltexans.com/index.cfm?objectid=A3119543-CBF8-C202-F1B0EEFD5F4B9805</a></li>
            <li><strong>Former Foster Care Tuition Exemption </strong><a href="http://www.collegeforalltexans.com/apps/financialaid/tofa2.cfm?ID=551">http://www.collegeforalltexans.com/apps/financialaid/tofa2.cfm?ID=551</a></li>
            <li><strong>Military Tuition Exemption </strong><a href="http://www.collegeforalltexans.com/apps/financialaid/tofa2.cfm?ID=591">http://www.collegeforalltexans.com/apps/financialaid/tofa2.cfm?ID=591</a></li>
            <li><strong>Blind or Deaf Tuition Exemption </strong><a href="http://www.collegeforalltexans.com/apps/financialaid/tofa2.cfm?ID=547">http://www.collegeforalltexans.com/apps/financialaid/tofa2.cfm?ID=547</a></li>
            </div>
            <div className="button">
            <Link className="navigation" to="/housing"><NavigationButton /></Link>
            </div>
            </div>
        </motion.div>
    )
}