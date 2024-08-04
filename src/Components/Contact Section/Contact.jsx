import './contact.css'
import { BsInstagram } from "react-icons/bs";
import { TbArrowBigRightLines } from "react-icons/tb";

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
                                <a href="https://www.instagram.com/vlad_steau/" className='flex'>
                                    Send Message<TbArrowBigRightLines className='icon'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact;