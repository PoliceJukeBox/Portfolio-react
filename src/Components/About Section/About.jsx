import React from 'react';
import './about.css'
import { TbCloudDownload } from "react-icons/tb";
// import img from '../../assets/PozaSteauVlad.jpg';

function About(){

    return(
        <>
        <section id="about" className='about section container'>
            <div className="sectionTitle">
                <span className="titleNumber">01.</span>
                <h5 className="titleText">About Me  
                    <div className="underline"><span></span></div>
                </h5>
            </div>

            <div className="sectionContent grid">
                <div className="textSection">
                    <h4>
                    I'm a succses-driven and determined developer. I have
                    experience using HTML, Sass, Javascript and React to build
                    accessible component-based web pages and systems. <br />
                    Ability to deliver quality results using the multiple web 
                    technologies listed above, also having experience with some software languages such
                    as Python or C++. <br />
                    I'm a passionate person willing to learn more technologies to
                    become a better developer than I was yesterday, determined and
                    result oriented.
                    </h4>

                    <div className="aboutBtn">
                        <a href="SteauVladCV.pdf" download="SteauVladCV.pdf" className="flex">
                            Download CV <TbCloudDownload className='icon'/>
                        </a>
                    </div>
                </div>

                {/* <div className="aboutImgDiv">
                    <img src={img} alt="Image Steau Vlad" className='aboutImg'/>
                </div> */}
            </div>
        </section>
        </>
    )
}

export default About;