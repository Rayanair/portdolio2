import React,{useEffect} from 'react';
import "../App.css";
import 'bootstrap/dist/css/bootstrap.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from "../media/IMG_0554.webp"
import MyPDF from '../media/Rayan-Souici-CV.pdf';

const Presentation = () => {

    useEffect(() => {
        AOS.init();
      }, [])
    
    return(
        <section id="Presentation">
        <div>
        <h1>SOUICI Rayan</h1>
        <h2>Dèveloppeur Full-Stack</h2>
        <h5>21 ans</h5>   
        <h5>06 89 08 24 08</h5>  
        <h5>Lyon</h5>    
        <img  src={image} alt="moi"/>

        <div class="button">
            <a href={MyPDF} target='_black' download> Télécharger CV</a>
        </div>
        </div>

        <div>
            <h4>Présentation</h4>
        <p>
        Bonjour, je suis Rayan Souici, étudiant à Epitech dans le cadre de la formation Web@cademie. 
        Je suis passionné par le développement web et je travaille actuellement pour devenir développeur web. 
        Mon parcours me permet de maîtriser les technologies front-end et back-end, 
        et je suis enthousiaste à l'idée de créer des projets innovants. Découvrez mes réalisations et 
        n'hésitez pas à me contacter pour toute collaboration !


        </p>
        </div>
    </section>
    )
   
} 

export default  Presentation;