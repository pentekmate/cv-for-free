import { useApp } from "../Context/AppContext"

export default function CVPreview(){
    const {name, pickedStyle} = useApp()
    return(
        <div style={pickedStyle?.styles.page}>
           <p>{name}</p> 
        </div>
    )
}