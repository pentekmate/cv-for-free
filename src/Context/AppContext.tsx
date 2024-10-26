import { createContext, useContext, useEffect, useState } from "react";

import { AppContextProviderProps, AppContextType, TemplateTypes,Language, PreviousJob, School, Skill, Social } from "./AppContextTypes";
import { fontFamily } from "html2canvas/dist/types/css/property-descriptors/font-family";




const AppContext = createContext<AppContextType | null>(null);

function AppProvider({children}:AppContextProviderProps){
    const [pickedStyle, setPickedStyle] = useState<TemplateTypes | null>(null);
    const templates = [
        {
            id: 0,
            styles:{
                page:{
                    backgroundColor: "white",
                    paddingInline:"40px",
                    paddingBlock:"20px",
                    height:"816px",
                    width:"579px"
                    },
                profileContainer:{
                    display:"flex",
                    gap:20,
                    backgroundColor:"yellow",
                    width:"100%",
                    height:"200px",
                },
                nameTag:{
                    fontFamily:"Poppins",
                    fontSize:"30px",
                    fontWeight:"600",
                    marginTop:"15px"
                },
                jobTitle:{
                    fontFamily:"Poppins",
                    fontSize:"15px",
                },
                PersonalInfo:{
                    fontSize:'13px',
                    fontFamily:'Inter'
                },

                

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
    const [name,setName]=useState<string | null>("Péntek Máté")
    const [email,setEmail]=useState<string | null>("erno801@gmail.com")
    const [phoneNumber,setPhoneNumber]=useState<number | null>(11111111111111)
    const [country,setCountry]=useState<string | null>('Magyarország')
    const [city,setCity]=useState<string | null>('Hajdúnánás')
    const [jobTitle,setJobTitle]=useState<string | null>('Szoftverfejlesztő')
    const [profPicture,setProfPicture]=useState<string | null>(null)
    const [introduce,setIntroduce]=useState<string | null>(`Proaktív személyiség, nyitottság új technológiák elsajátítására. 
Jelenleg munkamellett is, folyamatosan képzem magam, és szívesen küzdök meg különböző problémákkal.`)

    const [previousJobs,setPreviousJobs]=useState<PreviousJob[] | null>([
        {
            id:0,
            city:"Hajdúnánás",
            description:"Design tervek alapján , webappok megtervezése, létrehozása csapatban. Prototipusok készítése Reactban, Javascript,ContextApi,Tailwindcss nyelven UI/UX csapattal szorosan együttműködve.",
            employer:"Sajtgyárkft",
            jobTitle:"Profi sajtgyártó",
            beginDate:new Date("2011-01-11"),
            endDate:new Date("2012-01-22")
        },
        {
            id:1,
            city:"Hajdúnánás",
            description:"Design tervek alapján , webappok megtervezése, létrehozása csapatban. Prototipusok készítése Reactban, Javascript,ContextApi,Tailwindcss nyelven UI/UX csapattal szorosan együttműködve.",
            employer:"Sajtgyárkft",
            jobTitle:"Profi sajtgyártó",
            beginDate:new Date("2011-01-11"),
            endDate:new Date("2012-01-22")
        },
        {
            id:1,
            city:"Hajdúnánás",
            description:"Design tervek alapján , webappok megtervezése, létrehozása csapatban. Prototipusok készítése Reactban, Javascript,ContextApi,Tailwindcss nyelven UI/UX csapattal szorosan együttműködve.",
            employer:"Sajtgyárkft",
            jobTitle:"Profi sajtgyártó",
            beginDate:new Date("2011-01-11"),
            endDate:new Date("2012-01-22")
        }
    ])

    const[skills,setSkills]=useState<Skill[] | null>(null)

    const [schools,setSchools]=useState<School[] | null>([{
        id:0,
        beginDate:new Date("2011-01-11"),
        endDate:new Date("2012-01-22"),
        city:'Debrecen',
        degree:'Szoftverfejlesztő-és tesztelő',
        schoolName:'Debreceni SZC Beregszászi Pál Technikum és Kollégium'
    }])
    
    const[socials,setSocials]=useState<Social[] | null>(null)

    const[languages,setLanguages]=useState<Language[] | null>(null)

    useEffect(()=>{
        if(pickedStyle)
        localStorage.setItem('pickedStyle', JSON.stringify(pickedStyle));
    },[pickedStyle])



    return(
        <AppContext.Provider value={{name,
        setName,
        setJobTitle,
        jobTitle,
        templates,
        pickedStyle, 
        setPickedStyle,
        email,
        setEmail,
        country,
        setCountry,
        phoneNumber,
        setPhoneNumber,
        city,
        setCity,
        previousJobs,
        setPreviousJobs,
        introduce,
        setIntroduce,
        schools,
        setSchools,
        }}>
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