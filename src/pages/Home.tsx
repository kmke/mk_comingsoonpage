import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5e6d3 0%, #e8d5c4 50%, #d4c4b0 100%);
  padding: 120px 2rem 4rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(45, 80, 22, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  z-index: 1;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const PortraitContainer = styled.div`
  position: relative;
  animation: ${float} 6s ease-in-out infinite;
`;

const PortraitFrame = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 8px solid #d4af37;
  box-shadow: 
    0 0 30px rgba(212, 175, 55, 0.4),
    0 0 60px rgba(212, 175, 55, 0.2);
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  background: #2d5016;

  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    padding: 4px;
    background: linear-gradient(45deg, #d4af37, #f5e6d3, #d4af37);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const PortraitImage = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #c8a882 0%, #a68b6b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: rgba(45, 80, 22, 0.3);
  
  /* Placeholder for actual image */
  &::after {
    content: '👤';
    font-size: 8rem;
  }
`;

const HeroText = styled.div`
  color: #2d5016;
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 4rem;
  font-weight: 700;
  color: #2d5016;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #d4af37;
  margin-bottom: 1.5rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #2d5016;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #d4af37 0%, #b8941f 100%);
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
  }
`;

const ServicesPreview = styled.section`
  padding: 5rem 2rem;
  background: #fff;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  text-align: center;
  color: #2d5016;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ServicesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background: linear-gradient(135deg, #f5e6d3 0%, #e8d5c4 100%);
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.2);
    border-color: #d4af37;
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: #2d5016;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-family: 'Poppins', sans-serif;
  color: #2d5016;
  line-height: 1.8;
  opacity: 0.9;
`;

const Home: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <PortraitContainer>
            <PortraitFrame>
              <PortraitImage />
            </PortraitFrame>
          </PortraitContainer>
          <HeroText>
            <Title>Maira Kearns</Title>
            <Subtitle>Intuitive Medium & Tarot Reader</Subtitle>
            <Description>
              Welcome to Whispered Musings. I offer compassionate guidance through tarot readings 
              and intuitive mediumship, helping you connect with your inner wisdom and the messages 
              from beyond. Let's explore your path together.
            </Description>
            <CTAButton to="/bookings">Book a Reading</CTAButton>
          </HeroText>
        </HeroContent>
      </HeroSection>

      <ServicesPreview>
        <SectionTitle>My Services</SectionTitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceIcon>🔮</ServiceIcon>
            <ServiceTitle>Tarot Readings</ServiceTitle>
            <ServiceDescription>
              Discover insights and guidance through the ancient wisdom of tarot cards. 
              Each reading is personalized to help you navigate life's questions and challenges.
            </ServiceDescription>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>✨</ServiceIcon>
            <ServiceTitle>Intuitive Mediumship</ServiceTitle>
            <ServiceDescription>
              Connect with loved ones in spirit. Experience healing messages and find peace 
              knowing that your departed loved ones are still present in your life.
            </ServiceDescription>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>🌙</ServiceIcon>
            <ServiceTitle>Spiritual Guidance</ServiceTitle>
            <ServiceDescription>
              Receive intuitive guidance to help you become the person you are meant to be, 
              while honoring where you are today on your spiritual journey.
            </ServiceDescription>
          </ServiceCard>
        </ServicesGrid>
      </ServicesPreview>
    </>
  );
};

export default Home;

