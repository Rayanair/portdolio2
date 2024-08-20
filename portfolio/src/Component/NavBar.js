import React from 'react';
import "../App.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Incluez le JavaScript de Bootstrap

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light fixed-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#Presentation" className="nav-link">Présentation</a>
                    </li>
                    <li className="nav-item">
                        <a href="#parcours" className="nav-link">Parcours</a>
                    </li>
                    <li className="nav-item">
                        <a href="#competence" className="nav-link">Compétences</a>
                    </li>
                    <li className="nav-item">
                        <a href="#Projects" className="nav-link">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#Hobbies" className="nav-link">Centre d'intêrets</a>
                    </li>
                    <li className="nav-item">
                        <a href="#Coordonne" className="nav-link">Coordonnées</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;