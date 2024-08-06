import './projects.css'
import { FiGithub } from "react-icons/fi";

function Project(){

    return(
        <>
        <section id="projects" className='projects container section'>
            <div className="sectionTitle">
                <span className="titleNumber">03.</span>
                <h5 className="titleText">Projects 
                    <div className="underline"><span></span></div>
                </h5>
            </div>

            <div className="projectContainer grid">
                {
                    data.map(({id, github, image, liveLink, desc, demo, title, tech1, tech2, tech3, tech4}) =>{
                        return(
                            <div key={id} className="singleProject">
                                <div className="externalLinks flex">
                                    <div className="goToPageLink">
                                        <a href={demo} target='_blank'>Go to site</a>
                                    </div>
                                    <div className="githubIcon">
                                        <a href={github} target='_blank'>
                                            <FiGithub className='icon'/>
                                        </a>
                                    </div>
                                </div>

                                <div className="imgDiv">
                                    <a href="" target='_blank'>
                                        <img src={image} alt={title} />
                                    </a>
                                </div>

                                <div className="projectTitle">
                                    <h3>{title}</h3>
                                </div>

                                <div className="desc">
                                    {desc}
                                </div>

                                <div className="technologies flex">
                                    <small>{tech1}</small>
                                    <small>{tech2}</small>
                                    <small>{tech3}</small>
                                    <small>{tech4}</small>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
        </>
    )
}

export default Project;