import finalPRLogo from "./finalPRLogo.png";

export default function Nav() {
    return (
        <nav className="navbar" id="navCont">
            <a style={{marginLeft: '3%'}} href="index.html"><img className="logoPR"
                                                                 src={finalPRLogo}
                                                                 alt="Initials PR" height="65px"/></a>
            <ul className="navList">
                <li className="navLinks"><a href="index.html">
                    <button>Welcome</button>
                </a></li>
                <li className="navLinks"><a href="home.html">
                    <button>About</button>
                </a></li>
                <li className="navLinks"><a href="interests.html">
                    <button>Interests</button>
                </a></li>
                <li className="navLinks"><a href="projects.html">
                    <button>Projects</button>
                </a></li>
            </ul>
        </nav>
    )
}