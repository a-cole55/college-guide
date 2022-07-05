import NavigationButton from "./Button";
import "../components/ChooseCollege.css"
import ChooseCollegeImage from "../assets/chooseCollege.jpg"

export default function ChooseCollege(){
    return(
        <div className="chooseCollege">
            <h1 className="pageTitle">Choosing the Best College for You</h1>
            <img src={ChooseCollegeImage} alt="student"></img>
            <p>Deciding which college to spend your next 2-4 years at is a HUGE decision. 
                There are so many factors to consider that can impact your college experience, such as admission requirements, costs, majors, etc. 
                but that's why we're here. I recommend using a <a href="https://www.excelstemplates.com/download?pid=20&tid=12">College Comparison Worksheet</a> similar to this one
                or you can create your own spreadsheet to list the pros and cons of each school. This step is crucial in narrowing down the best
                college(s) for you. Now for the fun part, let's discuss what's important to you when deciding on a college, some factors may include:
            </p>
            <ul>
                <li>
                    <h2>Location</h2>
                    <p>Your distance home is important, especially if plan to vist family and friends back home often. Travel costs can quickly add up
                        so to reduce costs and time spent travelling, it may be best to choose a college that's closer to home.
                        Also, if you don't have a car, it may be a good idea to consider moving to a city with public 
                        transportation, and ride-share services.
                    </p>
                </li>
                <li>
                    <h2>Costs</h2>
                    <p>Costs probably should've been listed first because it is typically one of the biggest deciding
                    factors. Most colleges/universities list your estimated costs and expenses (including tuition,
                    housing, textbooks, and personal expenses). I recommend making not of the perspective costs for each
                    college. Similar to the college comparison worksheet linked above, there are <a href="https://www.act.org/content/act/en/students-and-parents/college-planning-resources/paying-for-college/estimating-the-cost-of-college.html">
                    College Cost Comparison Templates</a> as well.

                    </p>
                </li>
                <li>
                    <h2>2 or 4 Year College</h2>
                    <p>Deciding between a 2 year or 4 year school is another factor to consider. If you are concerned about costs or 
                        meeting the admission requirements of a 4 year college, then a community college may
                        be the best option. Typically your first, two years of college are dedicated to your core classes anyways 
                        (English, Math, Science, History, Government, and Electives) regardless if you are attending a community college
                        or university. By attending a community college, you are taking the same courses that you would at a university  
                        but for a much higher price tag.</p>
                </li>
                <li>
                    <h2>Major</h2>
                    <p>Different schools may offer different majors (or areas of study). Another factor to consider when choosing a college
                        is whether they offer the major that you're interested in studying. Some colleges are more well known for specific majors. 
                        For example, Sam Houston State University is well known for the Criminal Justice program.
{/*                         
                        *Side note: if you are unsure of what you would like to study in college, there are some free online assessments that 
                        can help get you started. Check out the following resources for more guidance:
                        <ul>
                            <li>Major/Career Assessment</li>
                            <li>Resource 2</li>
                            <li>Resource 3</li>
                        </ul> */}
                    </p>
                </li>
                <li>
                    <h2>Size</h2> 
                    <p>Would you prefer larger class sizes or smaller classes? A large class can have as many as 200-500 students in one class. 
                        A smaller class size can be as few as 15-20 students.
                    </p>
                </li>
            </ul>
        
            <p>There are many more factors to be considered (ie. diverstiy, clubs/organizations, housing, etc). It's important that you take the time
                to really consider what's important to you. Once you have determined what factors are important to you, you can narrow down the best
                school for you that meets your criteria. Ask family and friends what other factors to consider. Your high school counselor is another
                great resource!
            </p>

            <div className="button">
                <a className="navigation" href="/admission"><NavigationButton /></a>
            </div>
            {/* <footer>
                <h6>Resources:</h6>
                <a href="http://www.collegeforalltexans.com/index.cfm?objectid=6316E4DD-C14F-738B-0D78B8A1D99D9DC8">CollegeforAllTexas</a>
            </footer> */}
        </div>
    )
}