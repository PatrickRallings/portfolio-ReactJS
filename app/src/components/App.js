import {useState} from "react";
import Welcome from "./Welcome";
import PageTemplate from "./PageTemplate";

export default function App() {
    const [currentPage, setCurrentPage] = useState('Welcome')
    const enter = () => {
        setCurrentPage('PageTemplate')
        console.log('Set current page to PageTemplate')
    }
    if (currentPage == 'Welcome') {
        return (
            <Welcome onClickEnter={enter}/>
        )
    } else {
        return (
            <PageTemplate />
        )
    }
}
