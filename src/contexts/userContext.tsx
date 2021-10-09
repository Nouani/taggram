import React, { useContext, createContext, useEffect, useState } from "react";
import { User } from "../data/interfaces";
import api from "../services/api";

interface IUserContext extends User {
    isLoading: boolean;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export function useUser(): IUserContext {
    return useContext(UserContext);
}

const UserProvider: React.FC = data => {
    const { children } = data;
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({} as User);

    async function getUser() {
        setIsLoading(true);

        const response = await api.get("/me");

        setUser(response.data);

        setIsLoading(false);
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <UserContext.Provider value={{ ...user, isLoading }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
