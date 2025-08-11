import React from 'react';
import Navbar from './Components/Navber/Navber';
import HeroSection from './Components/HeroSection/HeroSection';
import GlassSocialBar from './Components/GlassSocialBar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroSection />
            <GlassSocialBar></GlassSocialBar>
        </div>
    );
};

export default Root;