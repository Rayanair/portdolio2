import React,{useEffect} from 'react';
import "../App.css";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import livre from "../media/livre.jpg"
import dessin from "../media/dessin.jpg"
import boxe from "../media/boxe.jpg"
import jeux from "../media/jeux video.jpg"
import science from "../media/science.jpg"

const Hobbies = () => {

    useEffect(() => {
        AOS.init();
      }, [])
    
    return(
        <section id="Hobbies">
            <h3>Centres d'intêrets</h3>
        <div class="pictures">

            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                    <div style={{backgroundColor: "white"}}>
                            <p style={{color: "black"}}>Lecture</p>
                    </div>
                    </div>
                    <div class="flip-box-back">
                    <img src={livre} alt="Livres"/>
                    </div>
                </div>
            </div>

            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                    <div style={{backgroundColor: "#d9d9d9"}}>
                            <p  style={{color: "#585858"}} >Dessin</p>
                    </div>
                    </div>
                    <div class="flip-box-back">
                    <img src={dessin} alt="dessin"/>
                    </div>
                </div>
            </div>

            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                    <div style={{backgroundColor: "#989898"}}>
                            <p>Boxe</p>
                    </div>
                    </div>
                    <div class="flip-box-back">
                    <img src={boxe} alt="boxe"/>
                    </div>
                </div>
            </div>

            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                    <div style={{backgroundColor: "#5d5d5d"}}>
                            <p style={{color: "#b9b9b9"}}>Science</p>
                            <p style={{color: "#b9b9b9"}}>high-teck</p>
                    </div>
                    </div>
                    <div class="flip-box-back">
                    <img src={science} alt="science"/>
                    </div>
                </div>
            </div>

            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                    <div style={{backgroundColor: "#2b2b2b"}}>
                    <p style={{color: "white"}}>Jeux videos</p>
                    </div>
                    </div>
                    <div class="flip-box-back">
                    <img src={jeux} alt="Livres"/>
                    </div>
                </div>
            </div>

        </div>
   
    </section>
    )
   
} 

export default  Hobbies;