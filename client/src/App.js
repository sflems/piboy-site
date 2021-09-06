import { useEffect, useState } from "react";
import { getSharedData } from "./utils";

import "./App.css";
import NavBar from "./components/NavBar.js"
import LogoSVG from "./media/logo.svg"
import Layer1SVG from "./media/layer1.svg"
import Layer2SVG from "./media/layer2.svg"

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
        <div className="m-0">
            <NavBar />
            <Spacer1 />
            <main className="blue pb-2">
                <Logo className="" {...sharedData} />
                <Message className="" {...sharedData} />                
                <Greeting className="" {...sharedData} />
            </main>
            <Spacer2 />
            <footer className="mt-auto text-white-50">
                <p>Copyright &copy; {d.getFullYear()} {sharedData.site_name}. All rights reserved.</p>
            </footer>
        </div>

    );
}

const Logo = () => {
    return <img src={LogoSVG} alt="Piboy Splash Logo" className="Splash-logo" type="image/svg+xml"></img>
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

// eslint-disable-next-line no-unused-vars
const Spacer1 = () => {
    return <div className="spacer layer1 mt-n5 mb-n2" style={{ backgroundImage: `url(${Layer1SVG})` }}></div>;
}

const Spacer2 = () => {
    return <div className="spacer layer2 flip mb-n5" style={{ backgroundImage: `url(${Layer2SVG})` }}></div>;
}

export default App;