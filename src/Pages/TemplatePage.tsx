import { useNavigate } from "react-router-dom"
import { useApp } from "../Context/AppContext"


export default function TemplatePage(){
    const {templates, setPickedStyle} = useApp()
    const navigate = useNavigate()
    return(
        <div>
            <div className="ml-10 mt-5 text-[55px]">
                <p>Válassz templatet:</p>
            </div>
            <div className="ml-10 text-[25px] flex gap-5">
                {templates.map((item, index)=>(
                    <div onClick={()=>{setPickedStyle(item); navigate("/createCV/edit")}} key={index}>{item.styles.page.backgroundColor}</div>
                ))}
            </div>
            
            
        </div>
    )
}