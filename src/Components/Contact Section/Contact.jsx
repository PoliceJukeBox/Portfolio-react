import './contact.css'
import { BsInstagram } from "react-icons/bs";
import { TbArrowBigRightLines } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Contact(){

    return(
        <>
        <section id="contact" className='contact section container'>
            <div className="sectionTitle">
                <span className="titleNumber">04.</span>
                <h5 className="titleText">Contact 
                    <div className="underline"><span></span></div>
                </h5>
            </div>

            <div className="contactContainer grid">
                <div className="socialContacts grid">
                    <h3>Talk to me</h3>

                    <div className="cards grid">

                        <div className="card">
                            <div>
                                <BsInstagram className='icon'/>
                            </div>
                            <h4>Instagram</h4>
                            <span className="userName">@vlad_steau</span>

                            <div>
                                <a href="https://www.instagram.com/vlad_steau/"
                                className='flex' target='_blank'>
                                    Send Message<TbArrowBigRightLines className='icon'/>
                                </a>
                            </div>
                        </div>

                        <div className="card">
                            <div>
                                <FaLinkedin className='icon'/>
                            </div>
                            <h4>LinkedIn</h4>
                            <span className="userName">@vlad steau</span>

                            <div>
                                <a href="https://www.linkedin.com" 
                                className='flex' target='_blank'>
                                    Send Message<TbArrowBigRightLines className='icon'/>
                                </a>
                            </div>
                        </div>

                        <div className="card">
                            <div>
                                <FaGithub className='icon'/>
                            </div>
                            <h4>GitHub</h4>
                            <span className="userName">PoliceJukeBox</span>

                            <div>
                                <a href="https://github.com/PoliceJukeBox"
                                className='flex' target='_blank'>
                                    Send Message<TbArrowBigRightLines className='icon'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form grid">
                    <h3>Send me an email</h3>

                    <form action="">
                        <input type="text" placeholder='Enter your Name'/>
                        <input type="email" placeholder='Enter your Email'/>
                        <textarea name="sessage" placeholder='Enter your message'></textarea>
                        <button className="formBtn" type='submit' name='submit'>Send Email</button>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact;