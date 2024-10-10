import React, { useState } from 'react';
import '../CSS_Files/FAQ.css'; 

const FAQ = () => {
const [activeIndex, setActiveIndex] = useState(null);

const faqs = [
        {
        question: 'What is PyHack?',
        answer: 'PyHack is an interactive workshop series focused on Python programming and its applications in ethical hacking. Designed for enthusiasts and learners, PyHack provides hands-on experience, tutorials, and community support to help you master Python in the context of cybersecurity and hacking.',
        },
        {
        question: 'Where will the workshops be held?',
        answer: 'Workshops for PyHack will be conducted online via video conferencing platforms, ensuring accessibility for participants from anywhere in the world. In-person events may be organized in specific locations, and updates will be provided on our official website and social media channels.',
        },
        {
        question: 'What will I learn at PyHack?',
        answer: 'At PyHack, you will learn the fundamentals of Python programming, along with tools and libraries commonly used in ethical hacking, such as Scapy, Requests, and Beautiful Soup. The workshop covers techniques for web scraping, network scanning, and penetration testing, as well as best practices for writing secure Python code. Participants will engage in hands-on projects and challenges that demonstrate real-world applications of Python in cybersecurity, making the learning experience both practical and informative.',
        },
        {
        question: 'Do I need prior Python experience?',
        answer: 'No prior Python experience is required to participate in PyHack! Our workshops cater to all skill levels, from beginners to advanced users. We start with the basics and progressively delve into more complex topics, making it suitable for everyone interested in learning Python for hacking.',
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