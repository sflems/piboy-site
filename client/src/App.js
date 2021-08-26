import { useEffect, useState } from "react";
import { getSharedData } from "./utils";

import "./App.css";

const MEDIA_URL = "/media/"

function App() {
    const [sharedData, setSharedData] = useState({ isLoaded: false, mediaURL: MEDIA_URL });
    var d = new Date()

    useEffect(() => {
        getSharedData().then((data) => {
            console.log(data);
            setSharedData({ ...data, isLoaded: true, mediaURL: MEDIA_URL });
        });
    }, []);

    return (
        <>
            <header className="mb-n5 p-0 h-0">
            </header>
            <Spacer1 />
            <main className="px-3 blue">
                <Logo {...sharedData} />
                <Message {...sharedData} />                
                <Greeting {...sharedData} />
            </main>
            <Spacer2 />
            <footer class="mt-auto text-white-50">
                <p>Copyright &copy; {d.getFullYear()} {sharedData.site_name}. All rights reserved.</p>
            </footer>
        </>

    );
}

const Logo = ({ mediaURL }) => {
    let logo_src = mediaURL + "logo.svg"
    return <img src={logo_src} alt="Piboy Splash Logo" className="Splash-logo" ></img>
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
    return <div className="spacer layer2"></div>;
}

export default App;