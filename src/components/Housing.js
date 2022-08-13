import NavigationButton from "./Button";
import "../components/Housing.css";
import {motion} from "framer-motion";
import {Link} from "react-router-dom"

const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]};

export default function Housing(){
    return(
        <motion.div className="housing"
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
        duration= {transition}>
            <h1 className="pageTitle">Housing</h1>
            <div className="content">
                <div className="info">
            <p>Deciding whether to live on or off-campus is another big decision for you to make.
                Some schools require all first-year students to live on-campus, so if this is the case for you, fortunately
                this decision has been made for you and you can move on to the "costs" section below to see what costs are 
                associated with living on-campus. If you need to decide which housing option is best for you, then stick
                around, this section is for you.
            </p>
            <h2>On-Campus</h2>
            <p>Living on-campus means that you will be living on your college campus in either a dorm or college apartment.
                Typically with an on-campus dormitory, you will have a roommate (or multiple roommates). To secure on-campus
                housing, you will have to complete a housing application and pay your housing deposit (once admitted to the 
                college of your choice). It's important to factor this expense into your first-year college expenses and make
                note of your housing application (and deposit) deadlines. This information can be found on your college's housing
                webpage.
            </p>
            <h2>Off-Campus</h2>
            <p>If you decide to live off-campus, securing housing is completely your responsibility. You will be responsible for
                researching apartments, evaluating the costs, and finding a roommate(s). When living off-campus it's important to
                consider the distance from campus, neighborhood safety, commute time to and from school, transportation to and from
                school, etc.
            </p>
            <h2>Costs</h2>
            <h3>On Campus</h3>
            <p>When living on-campus, you will be responsible for the following expenses: housing fee, meal plan, parking permit (if
                you have a car), and personal essentials (ie. hair products, grooming essentials, etc.)
            </p>
            <h3>Off campus</h3>
            <p>When living off-campus, you will be responsible for the following expenses: rent, utilities, food, gas (if you have a car),
                and personal essentials.
            </p>
            <h2>Deciding What's Best For You</h2>
            <p>There are pros and cons associated with both options, for example, when living on-campus you are near your classes and 
                on-campus resources so you won't have to worry about commute times and feeling disconnected from your school. But you may
                have smaller living spaces with less privacy than having your own apartment. When living off campus, you may spend more
                time travelling to and from school, so instead of sleeping in on class day, you may have to wake up an hour earlier than 
                you would have if living on campus BUT you may save on housing costs by living off campus and splitting housing costs with
                a roommate. There's no right or wrong answer when deciding whether to live on-campus or not, it's only important that you
                do what's best for you.            </p>
                

                <div className="button">
                    <Link className="navigation" to="/resources"><NavigationButton /></Link>
                </div>
                
                </div>
            </div>
        </motion.div>

    )
}