import React from 'react';
import NavBar from '../Component/NavBar';
import Parcours from '../Component/Parcours';
import Competences from '../Component/Competences';
import Presentation from '../Component/Presentation';
import Projects from '../Component/Projects';
import Hobbies from '../Component/Hobbies';

const Portfolio = () => {

    return(
        <div className='back'>
            <NavBar />
            <Presentation />
            <Parcours />
            <Competences/>
            <Projects/>
            <Hobbies/>
        </div>
    )
   
} 

export default Portfolio;