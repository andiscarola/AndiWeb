import React from 'react'
import "./works.css";
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";


const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">Education  </h2>
            <span className="worksDesc">I'm a sophomore at the University of Texas at El Paso, maintaining a high GPA. As a research assistant on the 'Coding Like a Data Miner' team, we aim to revolutionize K-12 computer science education through data analysis and paper contributions</span>
            <div className="worksImgs">
                <img src={Portfolio1} alt="Portfolio" className="worksImg" />
                <img src={Portfolio2} alt="Portfolio" className="worksImg" />
                <img src={Portfolio3} alt="Portfolio" className="worksImg" />
                <img src={Portfolio4} alt="Portfolio" className="worksImg" />
                
            </div>
            
        </section>
    );
}

export default Works