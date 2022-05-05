import {useState} from "react";
import Welcome from "./Welcome";
import Page from "./Page";

export default function App() {
    const [currentPage, setCurrentPage] = useState('Welcome')
    const enter = () => {
        setCurrentPage('Page')
        console.log('Set current page to Page')
    }
    if (currentPage == 'Welcome') {
        return (
            <Welcome onClickEnter={enter}/>
        )
    } else {
        return (
            <Page />
        )
    }
}
