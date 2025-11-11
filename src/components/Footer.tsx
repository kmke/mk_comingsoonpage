import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #2d5016 0%, #1a3009 100%);
  color: #f5e6d3;
  padding: 3rem 2rem 1.5rem;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    font-family: 'Playfair Display', serif;
    color: #d4af37;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p, a {
    font-family: 'Poppins', sans-serif;
    color: #f5e6d3;
    text-decoration: none;
    line-height: 1.8;
    display: block;
    margin-bottom: 0.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #d4af37;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(212, 175, 55, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
      background: #d4af37;
      transform: translateY(-3px);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(212, 175, 55, 0.2);
  font-family: 'Poppins', sans-serif;
  color: #f5e6d3;
  font-size: 0.9rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Whispered Musings</h3>
          <p>Connecting you with guidance from the universe through tarot readings and intuitive mediumship.</p>
        </FooterSection>
        <FooterSection>
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About Maira</a>
          <a href="/services">Services</a>
          <a href="/bookings">Book a Reading</a>
          <a href="/contact">Contact</a>
        </FooterSection>
        <FooterSection>
          <h3>Connect</h3>
          <p>Email: [Your Email]</p>
          <p>Phone: [Your Phone]</p>
          <SocialLinks>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Twitter">🐦</a>
          </SocialLinks>
        </FooterSection>
      </FooterContent>
      <Copyright>
        © {new Date().getFullYear()} Whispered Musings by Maira Kearns. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;

