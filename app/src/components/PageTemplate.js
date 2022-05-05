import Nav from "./Nav";
import Footer from "./Footer";

export default function PageTemplate() {
    let component = <Nav />
    return (
        <div className="col-12 p-0">
            <div id="page-container">
                <div id="content-wrap">
                    <Nav />
                    {component}
                    <Footer />
                </div>
            </div>
        </div>
    );
}