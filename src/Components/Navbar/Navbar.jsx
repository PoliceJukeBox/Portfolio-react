import './navbar.css'

function Navbar(){

    return(
        <>
        <header className='header'>
            <div className="logoDiv">
                <h1 className="logo"><a href="#home">Sv.</a></h1>
            </div>

            <div className="navBar">
                <ul className="navList">
                    <li className="navItem">
                        <a href="#about">1.<span>About</span></a>
                    </li>
                    <li className="navItem">
                        <a href="#skills">2.<span>Skills</span></a>
                    </li>
                    <li className="navItem">
                        <a href="#projects">3.<span>Projects</span></a>
                    </li>
                    <li className="navItem">
                        <a href="#contact">4.<span>Contact</span></a>
                    </li>
                    <button className="btn"><a href="">Resume</a></button>
                </ul>

                <div className="closeNavBar">
                    
                </div>
            </div>
        </header>
        </>
    )
}

export default Navbar;