import React from 'react'
import './Home.scss'
import Navbar from '../../Components/navbar/Navbar';
import Footer from '../../Components/footer/Footer';
import HeroSection from '../../components/heroSection/HeroSection';
import RegistrationSection from '../../components/registration/RegistrationSection';
import CourseSection from '../../components/courseSection/CourseSection';
import WelcomeSection, { WelcomeSubSection } from '../../components/welcomeSection/WelcomeSection';
import VideoSection from '../../components/videoSection/VideoSection'
import StatisticsSection from '../../components/statistics/StatisticsSection';
import { Header1, Header2 } from '../../components/header/Header';
import heroImage from '../../assets/bg4.png'
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon';
import ResultSection from '../../components/resultSection/ResultSection';
import Faq from '../../Components/faq/Faq';
import ChemistryEducationChoices from '../../Components/chemistryEducationChoices/ChemistryEducationChoices';
import CsirNetPreparation from '../../Components/csirNetPreparation/CsirNetPreparation';
import IITJamAndGateCoaching from '../../Components/iiTJamAndGateCoaching/IITJamAndGateCoaching';

const Home = () => {


    return (
        <div className='home'>

            <Header1 />
            <Header2 />

            <Navbar />

            <HeroSection imgSrc={heroImage} hd1={"BEST EDUCATION"} hd2={"FOR YOUR BETTER FUTURE"} />

            <RegistrationSection />

            <WelcomeSection />

            <CourseSection />
            
            <WelcomeSubSection/>

            <ResultSection />

            <StatisticsSection />

            {/* <VideoSection /> */}

            <ChemistryEducationChoices />
            
            <CsirNetPreparation />
            
            <IITJamAndGateCoaching />
            
            

            

            

            <Faq/>
            
            <WhatsappIcon />

            <Footer />
        </div>
    )
}

export default Home