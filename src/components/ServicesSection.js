import React from 'react';
import '../styles/styles.css';

const services = [
    { title: 'Call Center Solutions', description: 'Efficient call center management services.' },
    { title: 'Customer Support', description: '24/7 support for your customers.' },
    { title: 'Back Office Services', description: 'Seamless back-office solutions for businesses.' }
];

const ServicesSection = () => {
    return (
        <section className="services" id="services">
            <h2>Our Services</h2>
            <div className="service-cards">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
