import { createContext, useContext, useState } from "react";
import { AppContextProviderProps, AppContextType, TemplateTypes } from "./AppContextTypes";


const AppContext = createContext<AppContextType | null>(null);

function AppProvider({children}:AppContextProviderProps){
    const [name,setName]=useState<string | null>("null")
    const [pickedStyle, setPickedStyle] = useState<TemplateTypes | null>(null);
    const templates = [
        {
            id: 0,
            styles:{
                page:{
                    backgroundColor: "red"
                    }
                }
        },
        {
            id: 1,
            styles:{
                page:{
                    backgroundColor: "blue"
                    }
                }
        }
    ]
    return(
        <AppContext.Provider value={{name,setName, templates, pickedStyle, setPickedStyle}}>
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