export default function Welcome({onClickEnter}) {
    return (
        <div className="welcome col-12 p-0">
            <div id="page-container">
                <div id="content-wrap">
                    <span id="splash-overlay" className="splash"/>
                    <span id="welcome" className="z-depth-4"/>
                    <header className="navbar-fixed col-12 p-0">
                        <nav className="navbar" id="navCont">
                            <a style={{marginLeft: '3%', marginTop: '7px'}}></a>
                            <a style={{marginRight: '39.5%'}} className="navLinks cardButton splbtn">
                                <button onClick={onClickEnter} className="wiggle" style={{paddingLeft: '100px', paddingRight: '100px'}}>Enter
                                </button>
                            </a>
                        </nav>
                    </header>
                    <section className="portWelcome">
                        <div>
                            <p style={{fontSize: '200px', fontWeight: 'bolder'}}>Welcome</p>
                        </div>
                        <div>
                            <p style={{fontSize: '50px'}}><strong>to Patrick Rallings' Portfolio</strong></p>
                        </div>
                    </section>
                    <footer id="footer">
                        <i><h6>Created by Patrick Rallings for</h6><h4>CTAC of Carolina Fintech Hub</h4>
                        </i>
                    </footer>
                </div>
            </div>
        </div>
    );
}