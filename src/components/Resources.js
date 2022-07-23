import NavigationButton from "./Button";
import "../components/Resources.css";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]};

export default function Resources(){
    return(
        <motion.div className="resources"
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
        transition={transition}>
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

            <div className="button">
                <Link className="navigation" to="/"><NavigationButton /></Link>
            </div>

            </div>
            </div>
        </motion.div>

    )
}