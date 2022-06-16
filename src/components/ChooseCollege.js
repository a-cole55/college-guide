import NavigationButton from "./Button";

export default function ChooseCollege(){
    return(
        <div className="chooseCollege">
            <h1 className="pageTitle">Choosing the Best College for You</h1>
            <p>Deciding which college to spend your next 2-4 years with is a BIG decision. 
                Understanding important aspects___ that can impact your college experience is ...
                But that's why we're here. I recommend creating either a spreadsheet or __________ 
                to lists pros and cons of each school, this will be crucial for narrowing down the best
                college(s) for you. Now for the important part, let's discuss what's important when deciding on a college:</p>
            <h2>Location</h2>
            <p>Distance from your family. If you plan to travel home often, it may be a better decision
                to choose a location that's not too far from home (to reduce costs and time spent travelling).
                If you don't have a car, it may be a good idea to consider moving to a city with public 
                transportation, and ride-share services.
            </p>
            <h2>Costs</h2>
            <p>Costs probably should've been listed first because it is typically one of the biggest deciding
                factors. Most colleges/universities list your estimated costs and expenses (including tuition,
                housing, textbooks, and personal expenses). I recommend making not of the perspective costs for each
                college.
            </p>
            <h2>4 Year or 2 Year College/University</h2>
            <p>Deciding between a 4 year college or 2 year, if you are looking to cut back on costs or you're concerned
                that your gpa may not be competitive enough for the 4 year college of your choice, a 2 year college may
                be the way to go. Typically your first, two years of college are dedicated to your core classes anyways 
                (English, Math, Science, History, Government, and Electives) so you would more than likely be taking those
                same courses your first, two years at a 4 year college as well but for a much higher price tag.</p>
            <h2>Major</h2>
            <p>Depending on what you're interested in studying, this may help you decide which college is the best choice
                for you. Some colleges are more well __renown___ for specific majors. Side note: if you are unsure
                of what you would like to study, check out the following resources for more guidance:
                <ul>
                    <li>Major/Career Assessment</li>
                    <li>Resource 2</li>
                    <li>Resource 3</li>
                </ul>
            </p>
            <h2>Size</h2> Would you prefer larger class sizes or smaller class sizes? A large class can have as many as 200-500 students in one class
            (example school, The University of Texas at Austin). A smaller class size can be as few as 15-20 students.
            <h2>Diversity</h2>
            <div className="button">
                <a className="navigation" href="/admission"><NavigationButton /></a>
            </div>
        </div>
    )
}