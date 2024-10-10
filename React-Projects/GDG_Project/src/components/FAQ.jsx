import React, { useState } from 'react';
import '../CssFiles/FAQ.css'; 

const FAQ = () => {
const [activeIndex, setActiveIndex] = useState(null);

const faqs = [
        {
        question: 'What is GDG?',
        answer: 'Google Developer Groups (GDG) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDG, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.',
        },
        {
        question: 'How can you become a part of GDG ?',
        answer: 'We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior. It’s a two step process involving form filling and personal interview. Students acing both rounds are selected to be the part of the core team.',
        },
        {
        question: 'What does a GDG Lead do?',
        answer: 'A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.',
        },
        {
        question: 'How is DSC related to Google?',
        answer: 'A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.',
        },
        {
        question: 'How to reach us?',
        answer: 'Mail us at "dsc.rknec@gmail.com',
        }
    ];

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="faq-section">
        {faqs.map((faq, index) => (
            <div key={index} className="faq-container">
            <div className="question-container" onClick={() => handleToggle(index)}>
                <span className="question">{faq.question}</span>
                <i className={`fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`} />
            </div>
            {activeIndex === index && (
                <div className="answer-container">
                <p className="answer">{faq.answer}</p>
                </div>
            )}
            </div>
        ))}
        </div>
    );
};

export default FAQ;