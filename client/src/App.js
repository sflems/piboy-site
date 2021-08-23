import { useEffect, useState } from "react";
import { getSharedData } from "./utils";

import "./App.css";

function App() {
    const [sharedData, setSharedData] = useState({ isLoaded: false });

    useEffect(() => {
        getSharedData().then((data) => {
            console.log(data);
            setSharedData({ ...data, isLoaded: true });
        });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <Greeting {...sharedData} />
                <Message {...sharedData} />
            </header>
        </div>
    );
}

const Greeting = ({ first_name, site_name }) => {
    if (!first_name) return <div>Loading ....</div>;

    return <div>My name is {first_name}. I am a freelance developer and web designer, and the founder of <a href="/" class="App-link">{site_name}</a></div>;
};

const Message = ({ isLoaded, message }) => {
    if (!isLoaded) return null;
    return <div>{message}</div>;
};

export default App;