export type AppContextType ={
    name:null | string,
    pickedStyle: TemplateTypes | null,
    templates: TemplateTypes[],

    setPickedStyle:(pickedStyle: TemplateTypes)=> void;
    
    email?:string | null,
    phoneNumber?:number| null,
    country?:string | null,
    city?:string | null,
    jobTitle?:string | null,
    profPicture?:string | null,
    introduce?:string | null,
    previousJobs:PreviousJob[] | null,
    skills?:Skill[] | null,
    schools?:School[] | null,
    socials?:Social[] | null,
    languages?:Language[] | null,

    setName?:(name : string)=>void;
    setEmail:(email : string)=>void;
    setPhoneNumber:(phoneNumber:number)=>void;
    setCountry:(country:string)=>void;
    setCity:(city:string)=>void;
    setJobTitle:(jobTitle:string)=>void;
    setProfPicture?:(profPicture:string)=>void;
    setIntroduce:(introduce:string)=>void;

    setPreviousJobs:React.Dispatch<React.SetStateAction<PreviousJob[] | null>>;

    setSkills?:(skill:Skill)=>void;

    setSchools:React.Dispatch<React.SetStateAction<School[] | null>>;

    setSocials?:(social:Social)=>void;

    setLanguages?:(language:Language)=>void;

}

export type AppContextProviderProps = {
    children: React.ReactNode;
}

export type TemplateTypes = {
    id: number;
    styles: {
        page: {
            height?:string,
            width?:string,
            paddingBlock?:string,
            backgroundColor?: string;
            paddingInline?:string
        },
        profileContainer?:{
            backgroundColor?:string,
            width?:string,
            height?:string
        },
        nameTag?:{
            fontFamily?:string,
            fontSize?:string,
            fontWeight?:string,
        },
        jobTitle?:{
            fontFamily?:string,
            fontSize?:string,
            marginTop?:string, 
        },
        PersonalInfo?:{
            fontSize?:string,
            fontFamily?:string
        },
        ContentContainer?:{
            display?:string,
            flexDirection?:string,
            gap?:string
        }

    };
};
export type PreviousJob={
    id:number,
    jobTitle:string,
    employer:string,
    beginDate:Date,
    endDate:Date,
    city:string,
    description:string
}

export type Skill = {
    id:number,
    skillName:string,
    skillLevel:number
}
export type School={
    id:number,
    schoolName:string,
    degree:string,
    beginDate: Date,
    endDate:Date,
    city:string
}

export type Social={
    name:string,
    link:string
}

export type Language={
    languageName:string,
    languageLevel:number
}
