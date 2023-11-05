import React from 'react'
import './Home.scss'
import Navbar from '../../Components/navbar/Navbar';
import Footer from '../../Components/footer/Footer';
import HeroSection from '../../components/heroSection/HeroSection';
import RegistrationSection from '../../components/registration/RegistrationSection';
import CourseSection from '../../components/courseSection/CourseSection';
import WelcomeSection from '../../components/welcomeSection/WelcomeSection';
import VideoSection from '../../components/videoSection/VideoSection'
import StatisticsSection from '../../components/statistics/StatisticsSection';
import { Header1, Header2 } from '../../components/header/Header';
import heroImage from '../../assets/bg4.png'
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon';
import ResultSection from '../../components/resultSection/ResultSection';
import BenefitsSection from '../../Components/benefits/BenefitSection';
import HowToClearExam from '../../Components/howToClearExam/HowToClearExam';
import Mastering from '../../Components/mastering/Mastering';
import Faq from '../../Components/faq/Faq';

const Home = () => {


    return (
        <div className='home'>

            <Header1 />
            <Header2 />

            <Navbar />

            <HeroSection imgSrc={heroImage} hd1={"BEST EDUCATION"} hd2={"FOR YOUR BETTER FUTURE"} />

            <RegistrationSection />

            <WelcomeSection />


            <BenefitsSection />
            
            <HowToClearExam />
            <CourseSection />
            <Mastering />
            



            <StatisticsSection />

            <ResultSection />

            <VideoSection />


            <Faq/>
            
            <WhatsappIcon />
            <Footer />
        </div>
    )
}

export default Home