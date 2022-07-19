import HomeLogo from "../assets/college.png";
import NavigationButton from "./Button";
import { motion } from "framer-motion";
import {Link} from "react-router-dom"

export default function Home(){
    return(
        <motion.div 
        className="home"
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}>
        <div className="homeText">
          <h1>College Guide</h1>
          <span className="logo">If you can dream it, you can achieve it.</span>
        </div>
        <img src={HomeLogo} alt="home logo"></img>
        <Link className="navigation" to="/choose"><NavigationButton /></Link>
      </motion.div>
    )
}