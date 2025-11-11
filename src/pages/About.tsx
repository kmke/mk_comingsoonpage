import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 120px 2rem 4rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const AboutSection = styled.section`
  background: linear-gradient(135deg, #f5e6e6 0%, #f0d9d9 100%);
  padding: 4rem;
  border-radius: 20px;
  margin-bottom: 3rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  color: #3d2817;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #d4af37;
  margin: 2rem 0 1rem;
`;

const Paragraph = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #3d2817;
  margin-bottom: 1.5rem;
`;

const Quote = styled.blockquote`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-style: italic;
  color: #3d2817;
  border-left: 4px solid #d4af37;
  padding-left: 2rem;
  margin: 2rem 0;
  line-height: 1.6;
`;

const CredentialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const CredentialCard = styled.div`
  background: rgba(255, 255, 255, 0.7);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  border: 2px solid #d4af37;
`;

const CredentialTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: #3d2817;
  margin-bottom: 0.5rem;
`;

const CredentialText = styled.p`
  font-family: 'Poppins', sans-serif;
  color: #3d2817;
  font-size: 0.95rem;
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <Title>About Maira</Title>
      
      <AboutSection>
        <Paragraph>
          Welcome to Whispered Musings. I'm Maira Kearns, an intuitive medium and tarot reader 
          dedicated to helping you connect with your inner wisdom and the guidance that surrounds you.
        </Paragraph>

        <Subtitle>My Journey</Subtitle>
        <Paragraph>
          My path as an intuitive began with a deep curiosity about the unseen world and a desire 
          to help others find clarity and peace. Through years of study and practice, I've developed 
          my abilities to serve as a bridge between the physical and spiritual realms.
        </Paragraph>

        <Paragraph>
          I believe that everyone has the ability to connect with their intuition and receive guidance. 
          My role is to help facilitate that connection, whether through tarot cards that reflect your 
          inner landscape or through mediumship that brings messages from loved ones in spirit.
        </Paragraph>

        <Subtitle>My Approach</Subtitle>
        <Paragraph>
          With a calm and supportive presence, I offer private sessions designed to help you become 
          the person you are meant to be while honoring where you are today. Each reading is a sacred 
          space where you can explore your questions, receive guidance, and find peace.
        </Paragraph>

        <Quote>
          "It's an honor to be present when a loved one in Spirit reaches out to those who are missing them. 
          I'm only an interpreter for the process - because the language of spirit isn't necessarily like ours. 
          They communicate through energy. And I've learned over time to interpret the message they are trying 
          to get across. Which ultimately is that they are still very much present in our lives."
        </Quote>

        <Subtitle>Credentials & Training</Subtitle>
        <CredentialsGrid>
          <CredentialCard>
            <CredentialTitle>Intuitive Development</CredentialTitle>
            <CredentialText>
              Years of dedicated study and practice in intuitive and psychic development
            </CredentialText>
          </CredentialCard>
          <CredentialCard>
            <CredentialTitle>Tarot Mastery</CredentialTitle>
            <CredentialText>
              Extensive training in traditional and intuitive tarot reading methods
            </CredentialText>
          </CredentialCard>
          <CredentialCard>
            <CredentialTitle>Mediumship</CredentialTitle>
            <CredentialText>
              Certified training in mediumship and communication with spirit
            </CredentialText>
          </CredentialCard>
        </CredentialsGrid>

        <Paragraph style={{ marginTop: '2rem', textAlign: 'center' }}>
          I'm here to support you on your journey. Whether you're seeking guidance, clarity, or connection 
          with loved ones, I'm honored to walk this path with you.
        </Paragraph>
      </AboutSection>
    </AboutContainer>
  );
};

export default About;

