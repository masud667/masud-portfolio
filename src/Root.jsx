import React from 'react';
import Navbar from './Components/Navber/Navber';
import HeroSection from './Components/HeroSection/HeroSection';
import GlassSocialBar from './Components/GlassSocialBar';
import AboutMe from './Components/AboutMe/AboutMe';
import SkillsSection from './Components/SkillsSection/SkillsSection';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroSection />
            <GlassSocialBar></GlassSocialBar>
            <AboutMe />
            <SkillsSection />
        </div>
    );
};

export default Root;