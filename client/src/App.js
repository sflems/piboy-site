import { useEffect, useState } from "react";
import { getSharedData } from "./utils";

import "./App.css";
import logo from "./media/logo.svg"

function App() {
    const [sharedData, setSharedData] = useState({ isLoaded: false });
    var d = new Date()

    useEffect(() => {
        getSharedData().then((data) => {
            console.log(data);
            setSharedData({ ...data, isLoaded: true});
        });
    }, []);

    return (
        <>
            <header className="layer1 spacer">
            </header>
            <main className="px-3 m-0 blue">
                <Logo {...sharedData} />
                <Message {...sharedData} />                
                <Greeting {...sharedData} />
            </main>
            <Spacer2 />
            <footer className="mt-auto text-white-50">
                <p>Copyright &copy; {d.getFullYear()} {sharedData.site_name}. All rights reserved.</p>
            </footer>
        </>

    );
}

const Logo = () => {
    return <img src={logo} alt="Piboy Splash Logo" className="Splash-logo" ></img>
};

const Message = ({ isLoaded, message }) => {
    if (!isLoaded) return null;
    return <div className="h4">{message}</div>;
};

const Greeting = ({ first_name, site_name }) => {
    if (!first_name || !site_name) return <div>Loading ....</div>;
    return <div className="lead">
                My name is {first_name}. I'm a freelance web developer, and founder of <br/>
                <a href="/" className="link-info">{site_name}</a>
           </div>;
};

const Spacer1 = () => {
    return <div className="spacer layer1"></div>;
}

const Spacer2 = () => {
    return <div className="spacer layer2 flip"></div>;
}

export default App;