import React, { useState } from 'react';
import styled from 'styled-components';

const BookingsContainer = styled.div`
  padding: 120px 2rem 4rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  color: #3d2817;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  color: #3d2817;
  text-align: center;
  margin-bottom: 3rem;
  opacity: 0.8;
`;

const BookingForm = styled.form`
  background: linear-gradient(135deg, #f5e6e6 0%, #f0d9d9 100%);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled.label`
  display: block;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #3d2817;
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
  color: #3d2817;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #d4af37;
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  border: 2px solid rgba(45, 80, 22, 0.2);
  border-radius: 10px;
  background: #fff;
  color: #3d2817;
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
  color: #3d2817;
  min-height: 120px;
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

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const InfoBox = styled.div`
  background: rgba(212, 175, 55, 0.1);
  border: 2px solid #d4af37;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const InfoText = styled.p`
  font-family: 'Poppins', sans-serif;
  color: #3d2817;
  line-height: 1.8;
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SuccessMessage = styled.div`
  background: rgba(45, 80, 22, 0.1);
  border: 2px solid #3d2817;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const SuccessText = styled.p`
  font-family: 'Poppins', sans-serif;
  color: #3d2817;
  font-size: 1.1rem;
  line-height: 1.8;
`;

const Bookings: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for booking submission
    console.log('Booking submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <BookingsContainer>
      <Title>Book a Reading</Title>
      <Subtitle>Schedule your session with Maira</Subtitle>

      <InfoBox>
        <InfoText style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem' }}>
          Booking Information
        </InfoText>
        <InfoText>30-minute session: $45</InfoText>
        <InfoText>60-minute session: $90</InfoText>
        <InfoText style={{ marginTop: '1rem', fontSize: '0.95rem', opacity: 0.8 }}>
          Limited slots available. Please book in advance to secure your preferred time.
        </InfoText>
      </InfoBox>

      {submitted ? (
        <SuccessMessage>
          <SuccessText>
            Thank you for your booking request! I'll be in touch soon to confirm your appointment.
          </SuccessText>
        </SuccessMessage>
      ) : (
        <BookingForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Full Name *</Label>
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
            <Label htmlFor="email">Email Address *</Label>
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
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="service">Service Type *</Label>
            <Select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option value="tarot-30">Tarot Reading - 30 minutes ($45)</option>
              <option value="tarot-60">Tarot Reading - 60 minutes ($90)</option>
              <option value="mediumship-30">Intuitive Mediumship - 30 minutes ($45)</option>
              <option value="mediumship-60">Intuitive Mediumship - 60 minutes ($90)</option>
              <option value="guidance-30">Spiritual Guidance - 30 minutes ($45)</option>
              <option value="guidance-60">Spiritual Guidance - 60 minutes ($90)</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="date">Preferred Date *</Label>
            <Input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="time">Preferred Time *</Label>
            <Input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Message or Questions (Optional)</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Share any specific questions or topics you'd like to explore..."
            />
          </FormGroup>

          <SubmitButton type="submit">Submit Booking Request</SubmitButton>
        </BookingForm>
      )}
    </BookingsContainer>
  );
};

export default Bookings;

