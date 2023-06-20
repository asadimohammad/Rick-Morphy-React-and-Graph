import React from "react";
import { Characters } from "./components/characters/Characters";
import "./App.css";

const App = () => {
    return (
        <div>
            <h1 className="header">Rick and Morty Application</h1>
            <Characters />
        </div>
    );
};

export default App;
