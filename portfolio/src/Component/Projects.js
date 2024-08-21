import React,{useEffect} from 'react';
import "../App.css";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import spotify from "../media/spotify.png";
import snap from "../media/snap.png";
import meetic from "../media/meetic.png";

const Projects = () => {

    useEffect(() => {
        AOS.init();
      }, [])
    
    return(
        <section id="Projects">
            
                <h3>Projects</h3>
                <Carousel className='elcarou'>
                    <div>
                        <h6 >SPOTIFY</h6>
                        <img src={spotify} onClick={() => window.open('https://github.com/EpitechWebAcademiePromo2024/W-WEB-090-LYN-1-1-spotify-victor.imbo', '_blank')} style={{"pointer-events": "all"}}/>
                        <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer 
                            took a galley of type and scrambled it to make a type specim
                            </p>
                    </div>
                    <div>
                        <h6>SNAP</h6>
                        <img src={snap} onClick={() => window.open('https://github.com/EpitechWebAcademiePromo2024/W-JSC-502-LYN-2-1-snapchat-rayan.souici', '_blank')} style={{"pointer-events": "all"}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer 
                            took a galley of type and scrambled it to make a type specim
                            </p>
                    </div>
                    <div>
                        <h6>MyMeetic</h6>
                        <img src={meetic} onClick={() => window.open('https://github.com/EpitechWebAcademiePromo2024/W-PHP-501-LYN-1-1-mymeetic-rayan.souici', '_blank')} style={{"pointer-events": "all"}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer 
                            took a galley of type and scrambled it to make a type specim
                            </p>
                    </div>
                    
                </Carousel>
        </section>
    )
   
} 

export default  Projects;