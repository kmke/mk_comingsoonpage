import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 120px 2rem 4rem;
  max-width: 1000px;
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
  background: linear-gradient(135deg, #f5e6d3 0%, #e8d5c4 100%);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const ContactInfo = styled.div`
  background: linear-gradient(135deg, #2d5016 0%, #1a3009 100%);
  padding: 3rem;
  border-radius: 20px;
  color: #f5e6d3;
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled.label`
  display: block;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #2d5016;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  border: 2px solid rgba(45, 80, 22, 0.2);
  border-radius: 10px;
  background: #fff;
  color: #2d5016;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #d4af37;
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  border: 2px solid rgba(45, 80, 22, 0.2);
  border-radius: 10px;
  background: #fff;
  color: #2d5016;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #d4af37;
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #d4af37 0%, #b8941f 100%);
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
  }
`;

const InfoTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #d4af37;
  margin-bottom: 2rem;
`;

const InfoItem = styled.div`
  margin-bottom: 2rem;
`;

const InfoLabel = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  color: #d4af37;
  margin-bottom: 0.5rem;
`;

const InfoText = styled.p`
  font-family: 'Poppins', sans-serif;
  color: #f5e6d3;
  line-height: 1.8;
  font-size: 1.1rem;
`;

const InfoLink = styled.a`
  color: #d4af37;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #f5e6d3;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(212, 175, 55, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: #d4af37;
    transform: translateY(-3px);
  }
`;

const SuccessMessage = styled.div`
  background: rgba(45, 80, 22, 0.1);
  border: 2px solid #2d5016;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const SuccessText = styled.p`
  font-family: 'Poppins', sans-serif;
  color: #2d5016;
  font-size: 1.1rem;
  line-height: 1.8;
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for contact form submission
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <ContactContainer>
      <Title>Get in Touch</Title>
      <Subtitle>I'd love to hear from you</Subtitle>

      <ContactGrid>
        <ContactForm onSubmit={handleSubmit}>
          {submitted ? (
            <SuccessMessage>
              <SuccessText>
                Thank you for your message! I'll get back to you as soon as possible.
              </SuccessText>
            </SuccessMessage>
          ) : (
            <>
              <FormGroup>
                <Label htmlFor="name">Name *</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Message *</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <SubmitButton type="submit">Send Message</SubmitButton>
            </>
          )}
        </ContactForm>

        <ContactInfo>
          <InfoTitle>Contact Information</InfoTitle>
          
          <InfoItem>
            <InfoLabel>Email</InfoLabel>
            <InfoText>
              <InfoLink href="mailto:[Your Email]">[Your Email]</InfoLink>
            </InfoText>
          </InfoItem>

          <InfoItem>
            <InfoLabel>Phone</InfoLabel>
            <InfoText>
              <InfoLink href="tel:[Your Phone]">[Your Phone]</InfoLink>
            </InfoText>
          </InfoItem>

          <InfoItem>
            <InfoLabel>Location</InfoLabel>
            <InfoText>[Your Location]</InfoText>
          </InfoItem>

          <InfoItem>
            <InfoLabel>Follow Me</InfoLabel>
            <SocialLinks>
              <SocialLink href="#" aria-label="Instagram">📷</SocialLink>
              <SocialLink href="#" aria-label="Facebook">📘</SocialLink>
              <SocialLink href="#" aria-label="Twitter">🐦</SocialLink>
            </SocialLinks>
          </InfoItem>
        </ContactInfo>
      </ContactGrid>
    </ContactContainer>
  );
};

export default Contact;

