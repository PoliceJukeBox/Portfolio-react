import './skill.css'
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoJavascript, IoLogoSass } from "react-icons/io";
import { SiCss3, SiCplusplus, SiC, SiMysql } from "react-icons/si";
import { FaHtml5, FaNodeJs, FaPython, FaGitSquare, FaGithub, FaLinux } from "react-icons/fa";

function Skills(){

    return(
        <>
        <section id="skill" className='skills container section'>
            <div className="sectionTitle">
                <span className="titleNumber">02.</span>
                <h5 className="titleText">Skills 
                    <div className="underline"><span></span></div>
                </h5>
            </div>

            <div className="skillsContainer grid">

                <div className="skillGroup">
                    <div className="groupTitle">
                        <h2 className='title'>Web Development</h2>
                        <span className="subTitle">2 years experience</span>
                    </div>

                    <div className="generalSkills">

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <TbBrandReactNative className='icon'/>
                            </div>
                            <span className="skillName">React</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <IoLogoJavascript className='icon'/>
                            </div>
                            <span className="skillName">JavaScript</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <IoLogoSass className='icon'/>
                            </div>
                            <span className="skillName">Sass</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <SiCss3 className='icon'/>
                            </div>
                            <span className="skillName">Css3</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <FaHtml5  className='icon'/>
                            </div>
                            <span className="skillName">Html5</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <FaNodeJs className='icon'/>
                            </div>
                            <span className="skillName">NodeJs</span>
                        </div>

                    </div>
                </div>

                <div className="skillGroup">
                    <div className="groupTitle">
                        <h2 className='title'>Programming Languages</h2>
                        <span className="subTitle">2 years experience</span>
                    </div>

                    <div className="generalSkills">

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <FaPython  className='icon'/>
                            </div>
                            <span className="skillName">Python</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <SiCplusplus className='icon'/>
                            </div>
                            <span className="skillName">C++</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <SiC className='icon'/>
                            </div>
                            <span className="skillName">C</span>
                        </div>

                    </div>
                </div>

                <div className="skillGroup">
                    <div className="groupTitle">
                        <h2 className='title'>Other Skills</h2>
                        <span className="subTitle">2 years experience</span>
                    </div>

                    <div className="generalSkills">

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <FaGitSquare className='icon'/>
                            </div>
                            <span className="skillName">Git</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <FaGithub className='icon'/>
                            </div>
                            <span className="skillName">Github</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <FaLinux className='icon'/>
                            </div>
                            <span className="skillName">Linux</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <SiMysql className='icon'/>
                            </div>
                            <span className="skillName">SQL</span>
                        </div>

                    </div>
                </div>
            </div>

        </section>
        </>
    )
}

export default Skills;