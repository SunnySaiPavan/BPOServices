import React from 'react';
import '../styles/styles.css';

const testimonials = [
    { name: 'John Doe', feedback: 'Excellent services, highly recommend!' },
    { name: 'Jane Smith', feedback: 'Outstanding support and professionalism.' }
];

const TestimonialSlider = () => {
    return (
        <section className="testimonials" id="testimonials">
            <h2>What Our Clients Say</h2>
            <div className="testimonial-slider">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial">
                        <p>"{testimonial.feedback}"</p>
                        <h4>- {testimonial.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialSlider;
