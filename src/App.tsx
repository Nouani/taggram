import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import UserProvider from "./contexts/userContext";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <UserProvider>
                    <Navbar />
                    <Routes />
                </UserProvider>
            </BrowserRouter>
        </>
    );
};

export default App;
