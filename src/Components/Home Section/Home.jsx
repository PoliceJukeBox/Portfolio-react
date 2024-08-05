import './home.css';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { TbArrowBigRightLines } from "react-icons/tb";
import { FiChevronsDown } from "react-icons/fi";

function Home(){

    return(
        <>
        <section id="home" className='home section'>

            <div className="leftIcons">
                <div className="socials grid">
                    <a href="" target='_blank'>
                        <AiFillGithub className='icon'/>
                    </a>
                    <a href="" target='_blank'>
                        <AiFillLinkedin className='icon'/>
                    </a>
                    <a href="" target='_blank'>
                        <AiFillInstagram className='icon'/>
                    </a>
                </div>
            </div>

            <div className="container homeContainer">
                <span className="introText">
                    Hi my name is,
                </span>
                <h1 className="title">
                    Steau Vlad
                </h1>
                <span className="subTitle">
                    I develope scalable web based applications
                    and software.
                </span>
                <p className="homeParagraph">
                   I code within required coding standards and
                   styles to serve the exact need.  
                </p>
                <div className="lowerHomeSection">
                    <button className="contactBtn">
                        <a href="#contact" className="flex">
                            Contact Me <TbArrowBigRightLines className='icon'/>
                        </a>
                    </button>
                    <div className="scrollDiv">
                        <a href="#about" className="flex">
                            <h6 className='scroll'>Scroll Down</h6>
                            <FiChevronsDown className='icon'/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="rightEmail">
                <div>
                    <div className="emailAddress">
                        <a href="https://mailto:vlad.steau11@gmail.com"
                        target='_blank'>
                            vlad.steau11@gmail.com
                        </a>
                    </div>
                    <div className="line">

                    </div>
                </div>
            </div>

        </section>
        </>
    )
}

export default Home;