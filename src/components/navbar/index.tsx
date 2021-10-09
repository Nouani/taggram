import React from "react";

import { Container, UserProfile } from "./styles";

import logo from "../../assets/logo.svg";

const Navbar: React.FC = () => {
    return (
        <Container>
            <div>
                <img src={logo} alt="Taggram" />
                <UserProfile>
                    <p>Vinicius</p>
                    <img
                        src="https://avatars.githubusercontent.com/u/49238044?v=4"
                        alt="Profile"
                    />
                </UserProfile>
            </div>
        </Container>
    );
};

export default Navbar;
