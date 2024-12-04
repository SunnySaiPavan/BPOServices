import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialSlider from '../components/TestimonialSlider';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <ServicesSection />
            <TestimonialSlider />
            <ContactForm />
            <Footer />
        </>
    );
};

export default HomePage;
