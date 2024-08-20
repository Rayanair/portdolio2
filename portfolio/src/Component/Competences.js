import React,{useEffect} from 'react';
import "../App.css";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import html from "../media/html2.png"
import css from "../media/css.png"
import figma from "../media/figma.png"
import bootstrap from "../media/bootstrap.png"
import git from "../media/git.png"
import js from "../media/js.webp"
import laravel from "../media/laravel.png"
import node from "../media/node.png"
import php from "../media/php.png"
import react from "../media/react.png"
import sass from "../media/sass.png"
import sql from "../media/sql.png"
import swift from "../media/swift.png"
import symfony from "../media/symfony.png"
import wordpress from "../media/wordpress.png"
import python from "../media/python.png"


const Competences = () => {

    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <section id="competence">
            <h3 data-aos="zoom-in" data-aos-delay="200">Compétences</h3>
            <div className='container'>
                
            <div 
                 data-aos="fade-zoom-in"
                 data-aos-delay="500"
                 data-aos-duration="2000"
                 data-aos-once="true"
                 style={{ marginLeft: "40%"}}>
                <div className="bar"><img className="icone" src={html}/>HTML</div>
                
                </div>
                <div 
                 data-aos="fade-zoom-in"
                 data-aos-delay="500"
                 data-aos-duration="2000"
                 data-aos-once="true"
                 style={{ marginLeft: "2%"}}>
                <div className="bar"><img className="icone" src={python}/>Python</div>
                
                </div>
                <div 
                 data-aos="fade-zoom-in"
                 data-aos-delay="500"
                 data-aos-duration="1000"
                 data-aos-once="true"
                 style={{ marginLeft: "16%"}}>
                <div className="bar"><img className="icone" src={css}/>CSS</div>
                </div>
                <div 
                 data-aos="fade-zoom-in"
                 data-aos-delay="500"
                 data-aos-duration="2800"
                 data-aos-once="true"
                 style={{ marginLeft: "70%"}}>
                <div className="bar"><img className="icone" src={sass}/>SASS</div>
                </div>
                <div 
                 data-aos="fade-zoom-in"
                 data-aos-delay="500"
                 data-aos-duration="1000"
                 data-aos-once="true"
                 style={{ marginLeft: "85%"}}>
                <div className="bar"> <img className="icone" src={git}/>Git</div>
                </div>
                <div 
                 data-aos="fade-zoom-in"
                 data-aos-delay="500"
                 data-aos-duration="1000"
                 data-aos-once="true" style={{ marginLeft: "58%"}}>
                <div className="bar"><img className="icone" src={sql}/>Sql</div>
                </div>
                <div 
                 data-aos="fade-zoom-in"
                 data-aos-delay="500"
                 data-aos-duration="2000"
                 data-aos-once="true" style={{ marginLeft: "45%"}}>
                <div className="bar"><img className="icone" src={swift}/>Swift</div>
                </div>
                <div 
                 data-aos="fade-zoom-in"
                 data-aos-delay="500"
                 data-aos-duration="1000"
                 data-aos-once="true" style={{marginLeft: "35%"}}>
                <div className="bar"><img className="icone" src={bootstrap}/>Bootstrap</div>
                </div>
                <div 
                 data-aos="fade-zoom-in"
                 data-aos-delay="500"
                 data-aos-duration="1000"
                 data-aos-once="true"
                 style={{ marginLeft: "19%"}}>
                <div className="bar"><img className="icone" src={figma}/>Figma</div>
                </div>
                <div 
                 data-aos="fade-zoom-in"
                 data-aos-delay="500"
                 data-aos-duration="2800"
                 data-aos-once="true">
                <div className="bar" style={{ marginLeft: "80%"}}>déterminé</div>
                </div>
                <div 
                 data-aos="fade-zoom-in"
                 data-aos-delay="500"
                 data-aos-duration="2800"
                 data-aos-once="true"
                 style={{ marginLeft: "0%"}}>
                <div className="bar"><img className="icone" src={wordpress}/>Wordpress</div>
                </div>
                <div 
                 data-aos="fade-zoom-in"
                 data-aos-delay="500"
                 data-aos-duration="1500"
                 data-aos-once="true" style={{ marginLeft: "67%"}}>
                <div className="bar"><img className="icone" src={php}/>PHP</div>
                </div>
                <div 
                 data-aos="fade-zoom-in"
                 data-aos-delay="500"
                 data-aos-duration="2800"
                 data-aos-once="true">
                <div className="bar" style={{ marginLeft: "20%"}}>Calme</div>
              </div>
                <div 
                 data-aos="fade-zoom-in"
                 data-aos-delay="500"
                 data-aos-duration="500"
                 data-aos-once="true" style={{marginLeft: "36%"}}>
                <div className="bar"><img className="icone" src={js}/>Javascript</div> 
                </div>
                <div 
                 data-aos="fade-zoom-in"
                 data-aos-delay="500"
                 data-aos-duration="3000"
                 data-aos-once="true" style={{ marginLeft: "80%"}}>
                <div className="bar"><img className="icone" src={react}/>ReactJS</div>
                </div>
                <div 
                 data-aos="fade-zoom-in"
                 data-aos-delay="500"
                 data-aos-duration="2800"
                 data-aos-once="true" style={{ marginLeft: "55%"}}>
                <div className="bar"><img className="icone" src={symfony}/>Symfony</div>
                </div>
                <div 
                 data-aos="fade-zoom-in"
                 data-aos-delay="500"
                 data-aos-duration="1000"
                 data-aos-once="true" style={{marginLeft: "67%"}}>
                <div className="bar"><img className="icone" src={laravel}/>Laravel</div>
                </div>

                <div 
                 data-aos="fade-zoom-in"
                 data-aos-delay="500"
                 data-aos-duration="1000"
                 data-aos-once="true">
                <div className="bar" style={{ marginLeft: "2%"}}>sérieux</div>
            </div>

                <div 
                 data-aos="fade-zoom-in"
                 data-aos-delay="500"
                 data-aos-duration="1000"
                 data-aos-once="true" style={{marginLeft: "88%"}}>
                <div className="bar"><img className="icone" src={node}/>NodeJS</div> 
                </div>

            <div 
                 data-aos="fade-zoom-in"
                 data-aos-delay="500"
                 data-aos-duration="1000"
                 data-aos-once="true">
                <div className="bar" style={{ marginLeft: "45%"}}>consciencieux</div>
            </div>

            <div 
                 data-aos="fade-zoom-in"
                 data-aos-delay="500"
                 data-aos-duration="2800"
                 data-aos-once="true">
                <div className="bar" style={{ marginLeft: "67%"}}>Esprit d'equipe</div>
            </div>

            

            </div>     
        </section>
    )
   
} 

export default  Competences;

