import { useApp } from "../Context/AppContext"

export default function CVPreview(){
    const {name} = useApp()
    return(
        <div>
           <p>{name}</p> 
        </div>
    )
}