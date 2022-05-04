import finalPRLogo from "./finalPRLogo.png"
export default function Home() {
    return (
        <div className="col-12 p-0">
            <div id="page-container">
                <div id="content-wrap">
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
                    <footer id="footer">
                        <i><h6>Created by Patrick Rallings for</h6><h4>CTAC of Carolina Fintech Hub</h4>
                        </i>
                    </footer>
                </div>
            </div>
        </div>
    );
}