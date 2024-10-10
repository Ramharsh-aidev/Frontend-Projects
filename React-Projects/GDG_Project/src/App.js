import './App.css';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ScrollDownIcon from './components/ScrollDownIcon';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SubHeading from './components/SubHeading';
import InfoRight from './components/InfoRight';
import InfoLeft from './components/InfoLeft';
import SubImage1 from './components/SubImage1.png';
import SubImage2 from './components/SubImage2.png';
import SubImage3 from './components/SubImage3.png';
import AnimatedCircles from './components/AnimatedCircles';
import TechnologyCards from './components/TechnologyCards';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

    const socialMediaTitles = {
        facebook: 'GDG RBU Chapter - Google Developer Group',
        twitter: 'GDG RBU - Your Gateway to Google Developer Technologies',
        linkedin: 'GDG RBU Chapter - Empowering Tech Enthusiasts',
        whatsapp: 'Join GDG RBU Chapter for Tech Events and Networking',
        telegram: 'GDG RBU Chapter - Community, Learning, Innovation',
    };

    const socialMediaDescriptions = {
        facebook: 'Join the GDG RBU Chapter to engage with fellow tech enthusiasts and explore Google developer technologies. Learn about our mission, community engagement, and technology events.',
        twitter: 'Get hands-on experience with the latest Google developer technologies and connect with fellow tech enthusiasts at GDG RBU Chapter.',
        linkedin: 'Empower your tech career with GDG RBU Chapter. Learn about our mission, community engagement, and technology events.',
        whatsapp: 'Stay updated on the latest tech events and networking opportunities with GDG RBU Chapter.',
        telegram: 'Join the GDG RBU Chapter community to learn, connect, and grow with fellow tech enthusiasts.',
    };

    const socialMediaImages = {
        facebook: SubImage1,
        twitter: SubImage2,
        linkedin: SubImage1,
        whatsapp: SubImage3,
        telegram: SubImage1,
    };

    const App = () => {
        const [metaData, setMetaData] = useState({
            title: socialMediaTitles.facebook,
            description: socialMediaDescriptions.facebook,
            image: socialMediaImages.facebook,
    });

    useEffect(() => {
        const referrer = document.referrer;
        if (referrer.includes('facebook.com')) {
        setMetaData({
            title: socialMediaTitles.facebook,
            description: socialMediaDescriptions.facebook,
            image: socialMediaImages.facebook,
        });
        } else if (referrer.includes('twitter.com')) {
        setMetaData({
            title: socialMediaTitles.twitter,
            description: socialMediaDescriptions.twitter,
            image: socialMediaImages.twitter,
        });
        } else if (referrer.includes('linkedin.com')) {
        setMetaData({
            title: socialMediaTitles.linkedin,
            description: socialMediaDescriptions.linkedin,
            image: socialMediaImages.linkedin,
        });
        } else if (referrer.includes('whatsapp.com')) {
        setMetaData({
            title: socialMediaTitles.whatsapp,
            description: socialMediaDescriptions.whatsapp,
            image: socialMediaImages.whatsapp,
        });
        } else if (referrer.includes('telegram.org')) {
        setMetaData({
            title: socialMediaTitles.telegram,
            description: socialMediaDescriptions.telegram,
            image: socialMediaImages.telegram,
        });
        }
    }, []);

    const circlesData = [
        { text: '0.3+', info: 'Years' },
        { text: '10+', info: 'Events' },
        { text: '1K+', info: 'Community <br> Members' }, 
        { text: '200+', info: 'Attendees' },
    ];

    const technologies = [
        { name: 'Android', iconClass: 'android', info: 'Info about Android' },
        { name: 'Flutter', iconClass: 'flutter', info: 'Info about Flutter' },
        { name: 'Cloud', iconClass: 'cloud', info: 'Info about Cloud' },
        { name: 'IT Networking', iconClass: 'IT', info: 'Info about IT Networking' },
        // Add more technologies here
        ];

    return (
        <div className="App">
    <Helmet>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content="Google Developer Group, GDG RBU, community engagement, technology, Android, Flutter, Cloud, IT Networking, tech enthusiasts" />
        <meta name="author" content="GDG RBU Chapter" />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:image" content={metaData.image} />
        <meta property="twitter:title" content={metaData.title} />
        <meta property="twitter:description" content={metaData.description} />
        <meta property="twitter:image" content={metaData.image} />
        <meta property="linkedin:title" content={metaData.title} />
        <meta property="linkedin:description" content={metaData.description} />
        <meta property="linkedin:image" content={metaData.image} />
        <meta property="whatsapp:title" content={metaData.title} />
        <meta property="whatsapp:description" content={metaData.description} />
        <meta property="whatsapp:image" content={metaData.image} />
        <meta property="telegram:title" content={metaData.title} />
        <meta property="telegram:description" content={metaData.description} />
        <meta property="telegram:image" content={metaData.image} />
        </Helmet>
        <Navbar />
        <HeroSection />
        <ScrollDownIcon />
        <SubHeading 
            title="Our Mission" 
            borderColor1="blue" 
            borderColor2="purple" 
            textColor1="white" 
            textColor2="blue" 
        />
        <InfoRight 
            imagePath={SubImage1} 
            missionText={`Our mission involves community engagement, leadership development, building a strong tech foundation, while enabling all tech enthusiasts to contribute to the global society.`}
        />
        <SubHeading 
            title="Our Perspective" 
            borderColor1="green" 
            borderColor2="blue" 
            textColor1="white" 
            textColor2="green" 
        />
        <InfoLeft 
            missionText={`We’re a community-driven initiative aiming to bridge the gap between research and practice, develop evolutionary thinking, and network throughout the process. We believe in connecting fellow developers, spreading stimulative ideas, and working for a solution-driven team.`}
            imagePath={SubImage2} 
        />
        <SubHeading 
            title="What Keeps Us Going?" 
            borderColor1="yellow" 
            borderColor2="orange" 
            textColor1="white" 
            textColor2="yellow" 
        />
        <InfoRight 
            imagePath={SubImage3} 
            missionText={`Our club helps students to connect, learn, empower, and grow. Teamwork, innovative thinking, communication, and leading with solutions help us achieve new heights. The entire team works in coordination to inspire and motivate the upcoming coding community to evolve their skills and broaden their horizons of knowledge.`}
        />
        <br />
        <div>
            <AnimatedCircles circlesData={circlesData} />
        </div>
        <div>
            <TechnologyCards technologies={technologies} />
        </div>
        <SubHeading 
            title="FAQ" 
            borderColor1="red" 
            borderColor2="yellow" 
            textColor1="white" 
            textColor2="red" 
        />
        <FAQ />
        <Footer />
        </div>
    );
};

export default App;