import {useState} from "react";
import Welcome from "./Welcome";
import Home from "./Home";

export default function App() {
    const [currentPage, setCurrentPage] = useState('Welcome')
    const enter = () => {
        setCurrentPage('Home')
        console.log('Set current page to Home')
    }
    if (currentPage == 'Welcome') {
        return (
            <Welcome onClickEnter={enter}/>
        )
    } else {
        return (
            <Home />
        )
    }
}
