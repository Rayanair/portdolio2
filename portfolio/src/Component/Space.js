import React,{useState } from 'react';
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpaceShuttle} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

const Space = () => {

    const navigate = useNavigate()

    const [invad, setInvad] = useState(false)
    
    function Blackhole(){
        setInvad(true);
        
        const interval = setInterval(() => {
            navigate("/Portfolio");
          }, 3000);
    }
    
    return(
        <div className="space">
            <h1>Cliquez</h1>
            <div className='blackhole' style={invad ? {
                transition: "5s",
                width: "2000px",
                height: "2000px",
        } : {} }>
                <div className='hole' style={invad ? {
                transition: "5s",
                width: "2000px",
                height: "2000px",
        } : {} }></div>
                </div>
                
            <FontAwesomeIcon className="elicon" style={invad ? {
                transition: "4s",
                paddingLeft: "1000px",            
        } : {} } icon={faSpaceShuttle} beatFade size='2xl' onClick={() => Blackhole()}/>
        </div>
    )
   
} 

export default Space;