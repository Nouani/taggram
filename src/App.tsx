import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Navbar />
                <Routes />
            </BrowserRouter>
        </>
    );
};

export default App;
