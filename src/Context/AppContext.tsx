import { createContext, useContext, useState } from "react";
import { AppContextProviderProps, AppContextType, Language, PreviousJob, School, Skill, Social } from "./AppContextTypes";


const AppContext = createContext<AppContextType | null>(null);

function AppProvider({children}:AppContextProviderProps){
    const [name,setName]=useState<string | null>(null)
    const [email,setEmail]=useState<string | null>(null)
    const [phoneNumber,setPhoneNumber]=useState<number | null>(null)
    const [country,setCountry]=useState<string | null>(null)
    const [city,setCity]=useState<string | null>(null)
    const [jobTitle,setJobTitle]=useState<string | null>(null)
    const [profPicture,setProfPicture]=useState<string | null>(null)
    const [introduce,setIntroduce]=useState<string | null>(null)

    const [previousJobs,setPreviousJobs]=useState<PreviousJob[] | null>(null)

    const[skills,setSkills]=useState<Skill[] | null>(null)

    const [schools,setSchools]=useState<School[] | null>(null)
    
    const[socials,setSocials]=useState<Social[] | null>(null)

    const[languages,setLanguages]=useState<Language[] | null>(null)



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