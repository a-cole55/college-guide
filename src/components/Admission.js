import NavigationButton from "./Button";
import SearchBar from "./SearchBar";
import CollegeData from "./CollegeData.json";
import application from "../assets/application.jpg";
import "../components/Admission.css";

export default function Admission(){
    return(
        <div className="admissions">
            <h1 className="pageTitle">Applying to College</h1>
            <p>Now that you've narrowed down your college choices to 3-5 schools, it's time to prepare for college admission. Here is a general list of steps that you will need to take in order to be
                admitted into a school. <strong>Please note: the admission process can vary from school to school so it's important to pay close attention to 
                application deadlines, requirements, etc.</strong></p>
            <img src={application} alt="college application"></img>
            <p><strong>Step 1:</strong> Make a list of important college deadlines, such as the application deadline, scholarship deadlines,
                financial aid deadline, and housing application deadline.
            </p>
            <p>
            <strong>Step 2:</strong> Apply: The link to your college application can be found on the admissions page of your college of
                choice. To navigate to your school's webpage, you can use the search bar below.
            </p>
            <SearchBar placeholder="Search College by Name" data={CollegeData}/>
            <p className="belowSearch"><strong>Special Note:</strong> If you are interested in attending a school in Texas, many Texas colleges use <a href="https://goapplytexas.org/">goapplytexas.org</a> for students to apply.
                If your college(s) use <a href="https://goapplytexas.org/">ApplyTexas</a> this is great because you can complete one application and use it for 
                each Texas college of your choice.
                Also, Texas schools offer automatic admission for students that graduate in the top 10% of their class. More info <a href="http://www.collegeforalltexans.com/?objectid=6D0B8C2F-C987-12B0-27CAFED91FACC7FB">here</a>.
            </p>
            <p>
            <strong>Step 3:</strong> Pay Application Fee: There is typically an application fee, costs range from approximately $25-$50 depending on the school. 
                This fee is paid directly to the college. More infomation on how to make the payment can be found on your college admissions page.
                <br></br>
                <br></br>
                Note: If you received free/reduced lunch in high school, you should qualify for an application fee waiver. Also, if you
                qualified for a fee waiver for the ACT/SAT, you can have your college application fees waived as well (more information below).
                Feel free to reach out to your high school counselor or college's admission counselor for more information.
            </p>

            <p><strong>Step 4:</strong> Submit transcripts and ACT/SAT scores (if applicable).</p>
            <p>Some additional steps may be required depending on the school, so it's important to do your research and visit your college's website for additional details.</p>

            <h4>Additional Resources:</h4>

            <li><strong>College Application Fee Waiver: </strong><a href="https://blog.prepscholar.com/college-application-fee-waiver">https://blog.prepscholar.com/college-application-fee-waiver</a></li>
            <li><strong>College Application Fee Waiver: </strong><a href="https://www.nerdwallet.com/article/loans/student-loans/college-application-fee-waiver">https://www.nerdwallet.com/article/loans/student-loans/college-application-fee-waiver</a></li>
            <li><strong>SAT/ ACT Fee Waiver</strong>, visit here for <a href="https://satsuite.collegeboard.org/sat/registration/fee-waivers">SAT</a> or <a href="https://www.act.org/content/act/en/products-and-services/the-act/registration/fees/fee-waivers.html">ACT</a>.</li>
            <li><strong>College for All Texans: </strong><a href="http://www.collegeforalltexans.com/index.cfm?objectid=6316E4DD-C14F-738B-0D78B8A1D99D9DC8">http://www.collegeforalltexans.com</a></li>
            
            <div className="button">
            <a className="navigation" href="/finaid"><NavigationButton /></a>
            </div>
        </div>

    )
}