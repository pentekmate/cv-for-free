export type AppContextType ={
    name:null | string,
    pickedStyle: TemplateTypes | null,
    templates: TemplateTypes[],
    setName:(name : string)=>void;
    setPickedStyle:(pickedStyle: TemplateTypes)=> void;
    
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
