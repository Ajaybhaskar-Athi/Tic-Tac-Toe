
import React from "react";
import ReactDOM from 'react-dom/client';
import TicTacToe from "./Components/TicTacToe";
const  App=()=>{
    return(
        <>
        <TicTacToe></TicTacToe>
        </>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);