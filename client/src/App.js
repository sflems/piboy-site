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
                <p>Hello!</p>
                <Firstname {...sharedData} />
                <Message {...sharedData} />
            </header>
        </div>
    );
}

const Firstname = ({ first_name }) => {
    if (!first_name) return <div>Loading ....</div>;

    return <div>I am {first_name}</div>;
};

const Message = ({ isLoaded, message }) => {
    if (!isLoaded) return null;
    return <div>{message}</div>;
};

export default App;