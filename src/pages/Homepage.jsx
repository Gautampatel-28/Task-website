import {React} from "react";
import "../css/Homepage.css";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Homepage = () => {

    return(
        <>  
    
        <div className="bg-color">
        <Contact />
      
        <Footer />
        </div>
   
        </>
    )
};

export default Homepage;