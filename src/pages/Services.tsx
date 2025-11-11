import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  padding: 120px 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  color: #2d5016;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  color: #2d5016;
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0.8;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;
`;

const ServiceCard = styled.div`
  background: linear-gradient(135deg, #f5e6d3 0%, #e8d5c4 100%);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
    border-color: #d4af37;
  }
`;

const ServiceIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ServiceTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #2d5016;
  margin-bottom: 1rem;
  text-align: center;
`;

const ServiceDescription = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #2d5016;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`;

const ServiceDetails = styled.ul`
  font-family: 'Poppins', sans-serif;
  color: #2d5016;
  margin-bottom: 2rem;
  padding-left: 1.5rem;

  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }
`;

const Price = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: #d4af37;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

const CTAButton = styled(Link)`
  display: block;
  text-align: center;
  padding: 1rem 2rem;
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

const InfoSection = styled.section`
  background: linear-gradient(135deg, #2d5016 0%, #1a3009 100%);
  padding: 4rem;
  border-radius: 20px;
  color: #f5e6d3;
  margin-top: 4rem;
`;

const InfoTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #d4af37;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const InfoText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1rem;
  text-align: center;
`;

const Services: React.FC = () => {
  return (
    <ServicesContainer>
      <Title>Services</Title>
      <Subtitle>Choose the reading that speaks to your heart</Subtitle>

      <ServicesGrid>
        <ServiceCard>
          <ServiceIcon>🔮</ServiceIcon>
          <ServiceTitle>Tarot Reading</ServiceTitle>
          <ServiceDescription>
            Discover insights and guidance through the ancient wisdom of tarot cards. 
            Each reading is personalized to help you navigate life's questions and challenges.
          </ServiceDescription>
          <ServiceDetails>
            <li>Personalized card spreads</li>
            <li>Guidance on relationships, career, and life path</li>
            <li>Insights into current situations</li>
            <li>Future possibilities and opportunities</li>
          </ServiceDetails>
          <Price>$90/hour</Price>
          <Price style={{ fontSize: '1.2rem', marginTop: '-1rem' }}>$45/30 min</Price>
          <CTAButton to="/bookings">Book Now</CTAButton>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon>✨</ServiceIcon>
          <ServiceTitle>Intuitive Mediumship</ServiceTitle>
          <ServiceDescription>
            Connect with loved ones in spirit. Experience healing messages and find peace 
            knowing that your departed loved ones are still present in your life.
          </ServiceDescription>
          <ServiceDetails>
            <li>Connection with departed loved ones</li>
            <li>Healing messages from spirit</li>
            <li>Validation and closure</li>
            <li>Evidence of continued presence</li>
          </ServiceDetails>
          <Price>$90/hour</Price>
          <Price style={{ fontSize: '1.2rem', marginTop: '-1rem' }}>$45/30 min</Price>
          <CTAButton to="/bookings">Book Now</CTAButton>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon>🌙</ServiceIcon>
          <ServiceTitle>Spiritual Guidance Session</ServiceTitle>
          <ServiceDescription>
            Receive intuitive guidance to help you become the person you are meant to be, 
            while honoring where you are today on your spiritual journey.
          </ServiceDescription>
          <ServiceDetails>
            <li>Life path guidance</li>
            <li>Spiritual development support</li>
            <li>Intuitive insights</li>
            <li>Personal growth coaching</li>
          </ServiceDetails>
          <Price>$90/hour</Price>
          <Price style={{ fontSize: '1.2rem', marginTop: '-1rem' }}>$45/30 min</Price>
          <CTAButton to="/bookings">Book Now</CTAButton>
        </ServiceCard>
      </ServicesGrid>

      <InfoSection>
        <InfoTitle>What to Expect</InfoTitle>
        <InfoText>
          Each session is conducted with compassion, respect, and confidentiality. I create a safe 
          and sacred space where you can explore your questions and receive guidance.
        </InfoText>
        <InfoText>
          Sessions can be conducted in person or via video call. Please arrive with an open heart 
          and any questions you'd like to explore. There's no need to prepare anything specific - 
          just come as you are.
        </InfoText>
        <InfoText>
          Limited slots are available, so please book in advance to secure your preferred time.
        </InfoText>
      </InfoSection>
    </ServicesContainer>
  );
};

export default Services;

