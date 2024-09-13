import React,{useEffect} from 'react';
import "../App.css";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import spotify from "../media/spotify2.png";
import snap from "../media/snapchat2.png";
import meetic from "../media/meetic2.png";
import ecommerce from "../media/ecommerce.jpg"
import myapp from "../media/my_app.jpg"
import driving from "../media/driving.png"

const Projects = () => {

    useEffect(() => {
        AOS.init();
      }, [])
    
    return(
        <section id="Projects">
            
                <h3>Projects</h3>
                <Carousel className='elcarou'>
                <div>
                        <h6 >Driving School</h6>
                        <img src={driving} onClick={() => window.open('https://github.com/EpitechWebAcademiePromo2024/W-WEB-350-LYN-4-1-drivingschool-rayan.souici', '_blank')} style={{"pointer-events": "all"}}/>
                        <p >En binôme, nous avons développé un site web pour une auto-école en utilisant le framework Django. 
                            Ce projet avait pour objectif de créer un espace de gestion des inscriptions, des cours, et des 
                            plannings pour les élèves et les moniteurs. Nous avons mis en place un système d'authentification 
                            pour les utilisateurs (élèves et administrateurs) ainsi qu’une interface pour la gestion des disponibilités 
                            et des réservations de créneaux de conduite.
                            </p>
                    </div>
                    <div>
                        <h6 >My_app</h6>
                        <img src={myapp} onClick={() => window.open('https://github.com/EpitechWebAcademiePromo2024/W-WEB-320-LYN-4-1-app-rayan.souici', '_blank')} style={{"pointer-events": "all"}}/>
                        <p >Dans le cadre de ce projet individuel, j'ai développé une application 
                            mobile en React Native qui exploite plusieurs fonctionnalités natives 
                            du téléphone, telles que la géolocalisation, l'appareil photo, et les notifications push. 
                            L'application permet aux utilisateurs de capturer des photos, de les géolocaliser, 
                            et de les partager avec d'autres utilisateurs. Ce projet m'a permis d'approfondir mes 
                            compétences en développement mobile tout en intégrant les API natives du téléphone.
                            </p>
                    </div>
                    <div>
                        <h6 >SPOTIFY</h6>
                        <img src={spotify} onClick={() => window.open('https://github.com/EpitechWebAcademiePromo2024/W-WEB-090-LYN-1-1-spotify-victor.imbo', '_blank')} style={{"pointer-events": "all"}}/>
                        <p >Dans le cadre d'un projet en groupe, nous avons réalisé une refonte complète de l'interface de Spotify sur un week-end. 
                            Le défi consistait à recréer les principales fonctionnalités de l'application (recherche, playlists, lecture de musique, etc.) 
                            tout en améliorant l'ergonomie et le design. 
                            Ce projet en rush nous a permis de mettre en pratique nos compétences en développement front-end en utilisant React JS.
                            </p>
                    </div>
                    <div>
                        <h6>SNAP</h6>
                        <img src={snap} onClick={() => window.open('https://github.com/EpitechWebAcademiePromo2024/W-JSC-502-LYN-2-1-snapchat-rayan.souici', '_blank')} style={{"pointer-events": "all"}}/>
                        <p>Dans le cadre d'un projet de groupe, nous avons recréé l'application Snapchat en utilisant React Native. 
                            Ce projet avait pour but de reproduire les fonctionnalités essentielles de Snapchat (envoi de snaps, messagerie) 
                            tout en nous familiarisant avec le développement d'applications mobiles cross-platform. 
                            Grâce à ce projet, nous avons renforcé nos compétences en développement mobile, gestion d'état et intégration d'API.
                            </p>
                    </div>
                    <div>
                        <h6 >Ecommerce</h6>
                        <img src={ecommerce} onClick={() => window.open('https://github.com/EpitechWebAcademiePromo2024/W-WEB-502-LYN-2-1-ecommerce-bachir.mekhalfia', '_blank')} style={{"pointer-events": "all"}}/>
                        <p >Dans le cadre d’un projet d’un mois en groupe, nous avons développé un site 
                            e-commerce en utilisant Symfony pour le back-end et React.js pour le front-end. 
                            Le site permettait aux utilisateurs de parcourir des produits, de les ajouter à un panier, 
                            de passer commande, et d’effectuer des paiements en ligne. Le projet nous a permis d'intégrer 
                            des technologies modernes tout en assurant une gestion fluide des produits, utilisateurs, 
                            et commandes via un tableau de bord administrateur.
                            </p>
                    </div>
                    <div>
                        <h6>MyMeetic</h6>
                        <img src={meetic} onClick={() => window.open('https://github.com/EpitechWebAcademiePromo2024/W-PHP-501-LYN-1-1-mymeetic-rayan.souici', '_blank')} style={{"pointer-events": "all"}}/>
                        <p>Dans le cadre d’un projet individuel, 
                            j’ai réalisé une refonte du site de rencontres Meetic en utilisant PHP et le modèle MVC (Modèle-Vue-Contrôleur). 
                            L’objectif principal était de concevoir un site fonctionnel permettant aux utilisateurs de s’inscrire, se connecter, 
                            créer et modifier des profils, et rechercher d’autres utilisateurs, tout en respectant les bonnes pratiques de développement web.
                            </p>
                    </div>
                    
                </Carousel>
        </section>
    )
   
} 

export default  Projects;