export type AppContextType ={
    name:null | string,
    setName:(name : string)=>void;
}

export type AppContextProviderProps = {
    children: React.ReactNode;
}