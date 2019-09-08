import React from 'react';
import './App.css';
import ResultTable from "../ResultTable";
import Header from "../Header";
import TournamentTable from "../TournamentTable";

function App() {
    return (
        <div>
            <Header/>
            <TournamentTable/>
            <ResultTable/>

        </div>
    );
}

export default App;
