import { useNavigate } from "react-router-dom"

export default function Home(){
    const navigate = useNavigate()
    return(
        <div>
            <button onClick={()=>navigate('/createCV/templates')}>CSinálok egy cvt</button>
        </div>
    )
}