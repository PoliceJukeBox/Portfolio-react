import './skill.css'
import { TbBrandReactNative } from "react-icons/tb";

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
                            <div className="iconBox">
                                <TbBrandReactNative className='icon'/>
                            </div>
                            <span className="skillName">React</span>
                        </div>
                        
                        <div className="singleSkill">
                            <div className="iconBox">
                                <TbBrandReactNative className='icon'/>
                            </div>
                            <span className="skillName">React</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox">
                                <TbBrandReactNative className='icon'/>
                            </div>
                            <span className="skillName">React</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox">
                                <TbBrandReactNative className='icon'/>
                            </div>
                            <span className="skillName">React</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox">
                                <TbBrandReactNative className='icon'/>
                            </div>
                            <span className="skillName">React</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox">
                                <TbBrandReactNative className='icon'/>
                            </div>
                            <span className="skillName">React</span>
                        </div>

                    </div>
                </div>
            </div>

        </section>
        </>
    )
}

export default Skills;