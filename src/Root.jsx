import React from 'react';
import Navbar from './Components/Navber/Navber';
import HeroSection from './Components/HeroSection/HeroSection';
import GlassSocialBar from './Components/GlassSocialBar';
import AboutMe from './Components/AboutMe/AboutMe';
import SkillsSection from './Components/SkillsSection/SkillsSection';
import Education from './Components/Education/Education';
import ProjectsShowcase from './Components/Projects/ProjectsShowcase';
import ContactForm from './Components/Contact/ContactForm';
import Footer from './Components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <GlassSocialBar />
            <AboutMe />
            <SkillsSection />
            <Education />
            <ProjectsShowcase />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Root;