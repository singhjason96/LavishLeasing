import React from 'react';
import SectionOne from './SectionOne';
import GradientBackground from './GradientBackground'
import NavBar from './NavBar';
import About from './About';
import {AddTestimonials} from '../components/AddTestimonials';
import TestimonialsSnippet from './TestimonialsSnippet';


const HomePage = () => {

    return(
        <GradientBackground>
            <NavBar />
            <SectionOne />
            <About />
            <AddTestimonials />
            <TestimonialsSnippet />
        </GradientBackground>
            
    )
}

export default HomePage