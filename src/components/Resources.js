import NavigationButton from "./Button";
import "../components/Resources.css";
import {motion} from "framer-motion"


export default function Resources(){
    return(
        <motion.div className="resources"
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
        transition={{duration: 1}}>
            <h1 className="pageTitle">College Resources</h1>
            <div className="content">
                <div className="info">
            <h2>COMING SOON</h2>
            {/* <h2>Parking and Transportation</h2>
            <h2>Textbooks</h2>
            <h2>Advising</h2>
            <h2>Mental Health</h2>
            <h2>Career Counseling</h2>
            <h2>Transfer Resources</h2>
            <h2>Campus Organizations</h2> */}
            </div>
            <div className="button">
                <NavigationButton prop="/choose"/>
            </div>
            </div>
        </motion.div>

    )
}