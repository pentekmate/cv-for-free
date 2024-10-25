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
    previousJobs?:PreviousJob[] | null,
    skills?:Skill[] | null,
    schools?:School[] | null,
    socials?:Social[] | null,
    languages?:Language[] | null,

    setName?:(name : string)=>void;
    setEmail?:(email : string)=>void;
    setPhoneNumber?:(phoneNumber:number)=>void;
    setCountry?:(country:string)=>void;
    setCity?:(city:string)=>void;
    setJobTitle?:(jobTitle:string)=>void;
    setProfPicture?:(profPicture:string)=>void;
    setIntroduce?:(introduce:string)=>void;

    setPreviousJobs?:(previousJob:PreviousJob)=>void;

    setSkills?:(skill:Skill)=>void;

    setSchools?:(school:School)=>void;

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
            backgroundColor: string;
        };
    };
};
export type PreviousJob={
    jobTitle:string,
    employer:string,
    beginDate:Date,
    endDate:Date,
    city:string,
    description:string
}

export type Skill = {
    skillName:string,
    skillLevel:number
}
export type School={
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
