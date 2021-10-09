import React from "react";

import { Container, UserProfile, UserProfileLoading } from "./styles";

import logo from "../../assets/logo.svg";
import { useUser } from "../../contexts/userContext";
import DefaultImage from "../../assets/default_image.png";

const Navbar: React.FC = () => {
    const user = useUser();

    const userProfile = () => (
        <UserProfile>
            <p>{user.username}</p>
            <img src={user.avatar || DefaultImage} alt="ProfileImage" />
        </UserProfile>
    );

    const profileLoading = () => (
        <UserProfileLoading>
            <div className="name" />
            <div className="img" />
        </UserProfileLoading>
    );

    return (
        <Container>
            <div>
                <img src={logo} alt="Taggram" />
                {user.isLoading ? profileLoading() : userProfile()}
            </div>
        </Container>
    );
};

export default Navbar;
