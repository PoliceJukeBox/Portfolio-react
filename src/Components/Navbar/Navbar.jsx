import { useState } from 'react';
import './navbar.css'
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";



function Navbar(){

    const [active, setActive] = useState('navBar');
    const [activeDots, setActiveDots] = useState('toggleNavBar')

    const showNavBar = () =>{
        setActive('navBar activeNavBar');
        setActiveDots('toggleNavBar activeDots');
    }

    const removeNavBar = () =>{
        setActive('navBar ');
        setActiveDots('toggleNavBar');
    }

    const [activeHeader, setActiveHeader] = useState('header');
    const addBg = () =>{
        if(window.scrollY >= 10){
            setActiveHeader('header activeHeader');
        }else{
            setActiveHeader('header');
        }
    }

    window.addEventListener('scroll', addBg);

    return(
        <>
        <header className={activeHeader}>
            <div className="logoDiv">
                <h1 className="logo"><a href="#home">Sv.</a></h1>
            </div>

            <div className={active}>
                <ul onClick={removeNavBar} className="navLists">
                    <li className="navItem">
                        <a href="#about" className='navLink'><span className='headerNumber'>1.</span>About</a>
                    </li>
                    <li className="navItem">
                        <a href="#skill" className='navLink'><span className='headerNumber'>2.</span>Skills</a>
                    </li>
                    <li className="navItem">
                        <a href="#projects" className='navLink'><span className='headerNumber'>3.</span>Projects</a>
                    </li>
                    <li className="navItem">
                        <a href="#contact" className='navLink'><span className='headerNumber'>4.</span>Contact</a>
                    </li>
                    <button className="btn"><a href="SteauVladCV.pdf" download="SteauVladCV.pdf">Resume</a></button>
                </ul>

                <div onClick={removeNavBar} className="closeNavBar">
                    <AiFillCloseCircle className='icon'/>
                </div>
            </div>

            <div onClick={showNavBar} className={activeDots}>
                <TbGridDots className='icon'/>
            </div>

        </header>
        </>
    )
}

export default Navbar;