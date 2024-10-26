import { useState } from "react"
import { useApp } from "../Context/AppContext"
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import ExampleTheme from "../ExampleTheme";
import ToolbarPlugin from "../plugins/ToolbarPlugin";
import PreviousJobs from "./PreviousJobs";

export default function FormToCreateCV(){
    const placeholder = 'Ide írj...';

    const editorConfig = {
        namespace: 'React.js Demo',
        onError(error: Error) {
            throw error;
          },
        nodes: [],
        theme: ExampleTheme,
    };
    const {setName}=useApp()
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    
    //adding previous jobs
    const [prevJobs, setPrevJobs] = useState<JSX.Element[]>([<PreviousJobs key="0" />]);
    const handleJobs =()=>{
        setPrevJobs([...prevJobs, <PreviousJobs key={prevJobs.length} />]);
    }


    return(
        <form className="flex flex-col px-10 w-full gap-4" action="">
            <p className="font-bold text-[35px]">Személyes Adatok</p>
            <div className="flex gap-8 w-full">
                <div className="flex flex-col w-full">
                    <label htmlFor="jobTitle">Betölteni kívánt munkakör</label>
                    <input className="" type="text" name="jobTitle" onChange={(e)=>setJobTitle(e.target.value)}/>
                </div>
                <div className="flex flex-col w-full">
                    kép
                </div>
            </div>
            <div className="flex gap-8 w-full">
                <div className="flex flex-col  w-full">
                    <label htmlFor="firstName">Vezetéknév</label>
                    <input type="text" name="firstName" onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div className="flex flex-col  w-full">
                    <label htmlFor="lastName">Utónév</label>
                    <input type="text" name="lastName" onChange={(e)=>setLastName(e.target.value)}/>
                </div>
            </div>
            <div className="flex gap-8 w-full">
                <div className="flex flex-col w-full">
                    <label htmlFor="email">Email cím</label>
                    <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="phoneNumber">Telefonszám</label>
                    <input type="text" name="phoneNumber" onChange={(e)=>setphoneNumber(e.target.value)}/>
                </div>
            </div>
            <div className="flex gap-8 w-full">
                <div className="flex flex-col w-full">
                    <label htmlFor="country">Ország</label>
                    <input type="text" name="country" onChange={(e)=>setCountry(e.target.value)}/>
                </div>
               <div className="flex flex-col w-full">
                    <label htmlFor="city">Város</label>
                    <input type="text" name="city" onChange={(e)=>setCity(e.target.value)}/>
               </div>
            </div>
            
            <p className="font-bold text-[35px] mt-10">Szakmai Összefoglaló</p>
            <div className="w-full flex flex-col">
                <p >Írj magadról 2-4 mondatot.</p>
                <LexicalComposer initialConfig={editorConfig}>
                    <div className="editor-container">
                        <ToolbarPlugin />
                        <div className="editor-inner">
                        <RichTextPlugin
                            contentEditable={
                            <ContentEditable
                                className="editor-input"
                                aria-placeholder={placeholder}
                                placeholder={
                                <div className="editor-placeholder">{placeholder}</div>
                                }/>
                            }
                            ErrorBoundary={LexicalErrorBoundary}
                        />
                        </div>
                    </div>
                </LexicalComposer>
            </div>

            <p className="font-bold text-[35px] mb-5">Korábbi munkahelyek</p>
            <div>
                <div className="flex flex-col gap-4">
                    {prevJobs}
                </div>
                
                <div className="flex justify-end text-blue-400 mt-2" onClick={handleJobs}>+ Új hozzáadása</div>
            </div>              
            
        </form>
    )
}