import React, { ReactNode, createContext, useContext, useState } from "react";

interface MyContextType {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    isPaymentSuccess: boolean;
    setIsPaymentSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MyProviderProps {
    children: ReactNode;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isPaymentSuccess, setIsPaymentSuccess] = useState<boolean>(false);

    return (
        <MyContext.Provider value={{ isLoading, setIsLoading, isPaymentSuccess, setIsPaymentSuccess }}>
            {children}
        </MyContext.Provider>

    )
}

const useMyContext = (): MyContextType => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyProvider');
    }
    return context;
};

export { useMyContext, MyProvider };
