import { createContext, useContext, useState } from "react";
import { AppContextProviderProps, AppContextType } from "./AppContextTypes";


const AppContext = createContext<AppContextType | null>(null);

function AppProvider({children}:AppContextProviderProps){
    const [name,setName]=useState<string | null>("null")
    return(
        <AppContext.Provider value={{name,setName}}>
            {children}
        </AppContext.Provider>
    )
}

function useApp(){
    const context = useContext(AppContext);
    if (!context) throw new Error("useApp must be used within an AppProvider");
    return context;
}

export { AppProvider, useApp };