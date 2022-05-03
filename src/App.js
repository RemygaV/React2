import { useState } from "react";

function App() {
    const [showGreeting, setShowGreeting] = useState(false);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    return (
        <>
            <input placeholder="What's your name?" onChange={(e) => {setName(e.target.value);}}/>
            <input placeholder="What's your surname?" onChange={(e) => {setSurname(e.target.value);}}/>

            <button onClick={() => name.length > 0 ? setShowGreeting(!showGreeting) : null}>

                {!showGreeting ? "Show" : "Hide"}
            </button>
            <label style = {{display : "block"}}>{showGreeting ? `Hi ${name}, ${surname}` : ""} </label>
        </>
    );
};

export default App;
