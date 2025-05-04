import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #fff;
  padding: 20px;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h1`
  font-family: 'MedievalSharp', cursive;
  font-size: 4.5rem;
  margin-bottom: 1rem;
  text-align: center;
  animation: ${fadeIn} 1s ease-out;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
  letter-spacing: 2px;
  color: rgba(255, 215, 0, 0.8);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const StarField = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const Star = styled.div<{ top: string; left: string; size: string; delay: string }>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: ${props => props.size};
  height: ${props => props.size};
  background: white;
  border-radius: 50%;
  animation: twinkle 1.5s infinite ease-in-out;
  animation-delay: ${props => props.delay};
  opacity: 0.5;

  @keyframes twinkle {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
`;

const TarotCard = styled.div`
  width: 200px;
  height: 350px;
  perspective: 1000px;
  cursor: pointer;
  margin: 2rem 0;
  animation: ${float} 6s ease-in-out infinite;

  &:hover .card-inner {
    transform: rotateY(180deg);
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1.5s ease-in-out;
    transform-style: preserve-3d;
  }

  .card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.2);
    border: 4px solid #b19cd9;
    background: linear-gradient(45deg, #2a2a4a, #4a4a8a);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    overflow: hidden;
  }

  .card-front {
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 85%;
      height: 85%;
      border: 2px solid rgba(255, 215, 0, 0.3);
      border-radius: 10px;
    }

    .card-symbol {
      font-size: 2.5rem;
      color: rgba(255, 215, 0, 0.8);
      margin: 0.5rem;
      text-shadow: 0 0 10px rgba(255, 215, 0, 0.4);
      position: relative;
      z-index: 2;
    }

    .corner-ornament {
      position: absolute;
      width: 30px;
      height: 30px;
      font-size: 1.2rem;
      color: rgba(255, 215, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;

      &.top-left { top: 10px; left: 10px; }
      &.top-right { top: 10px; right: 10px; transform: rotate(90deg); }
      &.bottom-left { bottom: 10px; left: 10px; transform: rotate(-90deg); }
      &.bottom-right { bottom: 10px; right: 10px; transform: rotate(180deg); }
    }

    .center-circle {
      position: absolute;
      width: 120px;
      height: 120px;
      border: 2px solid rgba(255, 215, 0, 0.3);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      z-index: 1;

      &::before {
        content: '';
        position: absolute;
        width: 90%;
        height: 90%;
        border: 1px solid rgba(255, 215, 0, 0.2);
        border-radius: 50%;
      }
    }
  }

  .card-back {
    transform: rotateY(180deg);
    background: linear-gradient(45deg, #4a4a8a, #2a2a4a);
    font-family: 'MedievalSharp', cursive;
    font-size: 1.5rem;
    color: rgba(255, 215, 0, 0.8);
    letter-spacing: 1px;
    text-shadow: 0 0 5px rgba(255, 215, 0, 0.3);

    &::before {
      content: '✧';
      position: absolute;
      font-size: 8rem;
      opacity: 0.1;
      transform: rotate(45deg);
    }
  }
`;

function App() {
  const [stars, setStars] = useState<Array<{ top: string; left: string; size: string; delay: string }>>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 50 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      delay: `${Math.random() * 2}s`
    }));
    setStars(newStars);
  }, []);

  return (
    <Container>
      <StarField>
        {stars.map((star, index) => (
          <Star key={index} {...star} />
        ))}
      </StarField>
      
      <Title>Whispered Musings</Title>
      
      <TarotCard>
        <div className="card-inner">
          <div className="card-front">
            <div className="corner-ornament top-left">✧</div>
            <div className="corner-ornament top-right">✧</div>
            <div className="corner-ornament bottom-left">✧</div>
            <div className="corner-ornament bottom-right">✧</div>
            <div className="center-circle">
              <div className="card-symbol">☽</div>
              <div className="card-symbol">⚝</div>
            </div>
          </div>
          <div className="card-back">
            Coming Soon
          </div>
        </div>
      </TarotCard>
    </Container>
  );
}

export default App; 