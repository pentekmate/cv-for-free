import { useState } from "react"
import { useApp } from "../Context/AppContext"

export default function FormToCreateCV(){
    const {setName,setJobTitle,setEmail,setCity,setCountry,setPhoneNumber,setIntroduce,setPreviousJobs}=useApp()
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    return(
        <form className="flex flex-col gap-4 px-10 w-full" action="">
            <p className="font-bold text-[35px] font-title-font">Személyes Adatok</p>
            <div className="flex gap-4 w-full">
                <div className="flex flex-col w-full">
                    <label htmlFor="jobTitle">Betölteni kívánt munkakör</label>
                    <input className="" type="text" name="jobTitle" onChange={(e)=>setJobTitle(e.target.value)}/>
                </div>
                <div className="flex flex-col w-full">
                    kép
                </div>
            </div>
            <div className="flex gap-4 w-full">
                <div className="flex flex-col  w-full">
                    <label htmlFor="firstName font">Vezetéknév</label>
                    <input type="text" name="firstName" onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div className="flex flex-col  w-full">
                    <label htmlFor="lastName">Utónév</label>
                    <input type="text" name="lastName" onChange={(e)=>setLastName(e.target.value)}/>
                </div>
            </div>
            
            <div className="flex gap-4 w-full">
                <div className="flex flex-col w-full">
                    <label htmlFor="email">Email cím</label>
                    <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="phoneNumber">Telefonszám</label>
                    <input type="text" name="phoneNumber" onChange={(e)=>setPhoneNumber(Number(e.target.value))}/>
                </div>
            </div>
            <div className="flex gap-4 w-full">
                <div className="flex flex-col w-full">
                    <label htmlFor="country">Ország</label>
                    <input type="text" name="country" onChange={(e)=>setCountry(e.target.value)}/>
                </div>
               <div className="flex flex-col w-full">
                    <label htmlFor="city">Város</label>
                    <input type="text" name="city" onChange={(e)=>setCity(e.target.value)}/>
               </div>
            </div>
            <p className="font-bold text-[35px] mt-10 font-title-font">Szakmai Összefoglaló</p>
            <label htmlFor="desription">Írj magadról 2-4 mondatot.</label>
            <textarea name="description" onChange={(e)=>setIntroduce(e.target.value)}></textarea>

            <p>Korábbi munkahelyek</p>

            
        </form>
    )
}