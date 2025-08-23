import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a new context
const GlobalContext = createContext();

// Custom hook to use the GlobalContext easily
export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

// Create a provider component
export const GlobalProvider = ({ children }) => {
    // Example of global state (You can add more states as needed)


    const [scrwidth, setWidth] = useState(window.innerWidth);
    const [activePage , setActivePage] = useState("Home")


    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        // Add event listener
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        };

    }, []);

    



    return (
        <GlobalContext.Provider value={{
            scrwidth,
            activePage , setActivePage
        }}>
            {children}
        </GlobalContext.Provider>
    );
};
