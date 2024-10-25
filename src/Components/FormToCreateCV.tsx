import { useApp } from "../Context/AppContext"

export default function FormToCreateCV(){
    const {setName}=useApp()
    return(
        <form className="flex flex-col" action="">
            <label htmlFor="name">Neve</label>
            <input type="text" name="name" onChange={(e)=>setName(e.target.value)}/>

            <label htmlFor="desription">Bemutatkozás</label>
            <textarea name="description"></textarea>

            <p>Korábbi munkahelyek</p>

            
        </form>
    )
}