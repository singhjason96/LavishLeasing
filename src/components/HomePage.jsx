import React from 'react';
import SectionOne from './SectionOne';
import GradientBackground from './GradientBackground'
import NavBar from './NavBar';
import About from './About';


const HomePage = () => {

    return(
        <GradientBackground>
            <NavBar />
            <SectionOne />
            <About />
        </GradientBackground>
            
    )
}

export default HomePage