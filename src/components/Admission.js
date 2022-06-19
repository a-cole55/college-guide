import NavigationButton from "./Button";
import SearchBar from "./SearchBar";
import CollegeData from "./CollegeData.json";

export default function Admission(){
    return(
        <div className="admissions">
            <h1 className="pageTitle">Applying to College</h1>
            <p>Now that you've narrowed down your top 3-5 colleges, it's time to prepare for the admissions process. 
                Please note: the application process can vary from college to college so it's important to always visit your college of choice
                website to confirm the steps you will need to take to apply. But I have drafted some general criteria that's needed.</p>
            <ul>
                <li><strong>Step 1:</strong> Make a list of important college deadlines:</li>
                    <ul>
                    <li>Application Deadline</li>
                    <li>Scholarship Deadline</li>
                    <li>Financial Aid Deadline</li>
                    <li>Housing Application Deadline</li>
                    </ul>
                <li><strong>Step 2:</strong> Apply: The link to the college application can be found on the college admissions page. Enter the college
                name here in the search bar:</li>
                <SearchBar placeholder="Search College by Name" data={CollegeData}/>
                <p>Special Note: If you are interested in attending a school in Texas, many Texas colleges use <a href="https://goapplytexas.org/">goapplytexas.org</a> for students to apply.
                    If the college(s) you plan to attend, use <a href="https://goapplytexas.org/">ApplyTexas</a> this is great because you can complete one college application and use it for 
                    several different colleges.
                    Also, Texas schools offer automatic admission for students that graduate in the top 10% of their class. More info <a href="http://www.collegeforalltexans.com/?objectid=6D0B8C2F-C987-12B0-27CAFED91FACC7FB">here</a>.
                </p>
                <li><strong>Step 3:</strong> Pay Application Fee:</li> There is typically an application fee to apply to a college, costs range from about
                $25-$50 depending on the school. This fee is paid directly to the college. If you received free/reduced lunch in high school, you may qualify for a application fee waiver. Also if you were 
                qualified for a fee waiver for the ACT/SAT, you could have your college application fees waived as well. More information below.
                Feel free to reach out to your high school counselor or college's admission counselor for more information.
                Here are a few good resources for more information as well:
                <ul>
                    <li><a href="https://blog.prepscholar.com/college-application-fee-waiver">https://blog.prepscholar.com/college-application-fee-waiver</a></li>
                    <li><a href="https://www.nerdwallet.com/article/loans/student-loans/college-application-fee-waiver">https://www.nerdwallet.com/article/loans/student-loans/college-application-fee-waiver</a></li>
                    <li>If you take the SAT/ACT, there's a fee waiver for that as well! Just visit: <a href="https://satsuite.collegeboard.org/sat/registration/fee-waivers">SAT</a> or <a href="https://www.act.org/content/act/en/products-and-services/the-act/registration/fees/fee-waivers.html">ACT</a></li>
                </ul>
                <li><strong>Step 4:</strong> Submit transcripts and ACT/SAT scores (if required):</li>
                {/* <li><strong>Step 1:</strong> Make a list of important college deadlines:</li> */}
            </ul>
            <p>Some additional steps may be required depending on the school, so it's important to do your research and visit your college's website for additional details.</p>
            <div className="button">
            <a className="navigation" href="/finaid"><NavigationButton /></a>
            </div>
        </div>

    )
}