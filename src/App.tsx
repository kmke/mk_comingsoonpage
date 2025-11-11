import React, { useState, useEffect, useCallback } from 'react';
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

const twinkle = keyframes`
  0% { opacity: 0.2; }
  50% { opacity: 1; }
  100% { opacity: 0.2; }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #0a0a1a 0%, #16213e 50%, #0a0a1a 100%);
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
  z-index: 2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SkyField = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

interface StarProps {
  x: number;
  y: number;
  size: number;
  delay: number;
  mouseX: number;
  mouseY: number;
  windowWidth: number;
  windowHeight: number;
}

const Star = styled.div<StarProps>`
  position: absolute;
  left: ${props => props.x}%;
  top: ${props => props.y}%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: ${twinkle} ${props => 2 + props.delay}s infinite ease-in-out;
  box-shadow: 
    0 0 ${props => props.size * 2}px ${props => props.size}px rgba(255, 255, 255, 0.3),
    0 0 ${props => props.size}px ${props => props.size / 2}px rgba(255, 215, 0, 0.2);
  transform: translate(
    ${props => (props.mouseX - props.windowWidth / 2) * 0.01}px,
    ${props => (props.mouseY - props.windowHeight / 2) * 0.01}px
  );
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${props => props.size * 3}px;
    height: ${props => props.size * 3}px;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
  }
`;

const ConstellationLine = styled.line`
  stroke: rgba(255, 255, 255, 0.1);
  stroke-width: 1;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
`;

interface StarData {
  x: number;
  y: number;
  size: number;
  delay: number;
}

interface TarotCardProps {
  $isFlipped: boolean;
}

const TarotCard = styled.div<TarotCardProps>`
  width: 200px;
  height: 350px;
  perspective: 1000px;
  cursor: pointer;
  margin: 2rem 0;
  animation: ${float} 6s ease-in-out infinite;
  z-index: 1;

  &:hover {
    filter: brightness(1.2);
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.4);
  }

  &:focus {
    outline: 2px solid rgba(255, 215, 0, 0.5);
    outline-offset: 4px;
    border-radius: 15px;
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1.5s ease-in-out;
    transform-style: preserve-3d;
    transform: ${props => props.$isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
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
  const [stars, setStars] = useState<StarData[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [constellationPaths, setConstellationPaths] = useState<[number, number][][]>([]);
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  useEffect(() => {
    // Update window size
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  useEffect(() => {
    // Create constellation patterns
    const createConstellation = (centerX: number, centerY: number, points: number): StarData[] => {
      const radius = 15;
      const constellation: StarData[] = [];
      
      for (let i = 0; i < points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const variance = Math.random() * 5 - 2.5;
        constellation.push({
          x: centerX + Math.cos(angle) * (radius + variance),
          y: centerY + Math.sin(angle) * (radius + variance),
          size: Math.random() * 2 + 1,
          delay: Math.random() * 2
        });
      }
      return constellation;
    };

    // Create multiple constellations
    const allStars: StarData[] = [];
    const paths: [number, number][][] = [];

    // Constellation 1 - Center
    const constellation1 = createConstellation(50, 50, 7);
    allStars.push(...constellation1);
    paths.push(constellation1.map(star => [star.x, star.y]));

    // Constellation 2 - Top Right
    const constellation2 = createConstellation(75, 25, 5);
    allStars.push(...constellation2);
    paths.push(constellation2.map(star => [star.x, star.y]));

    // Constellation 3 - Bottom Left
    const constellation3 = createConstellation(25, 75, 6);
    allStars.push(...constellation3);
    paths.push(constellation3.map(star => [star.x, star.y]));

    // Add some random stars
    for (let i = 0; i < 30; i++) {
      allStars.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 2
      });
    }

    setStars(allStars);
    setConstellationPaths(paths);
  }, []);

  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY
    });
  }, []);

  const handleCardClick = useCallback(() => {
    setIsCardFlipped(prev => !prev);
  }, []);

  const handleCardKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsCardFlipped(prev => !prev);
    }
  }, []);

  return (
    <Container onMouseMove={handleMouseMove}>
      <SkyField>
        <svg width="100%" height="100%" style={{ position: 'absolute' }}>
          {constellationPaths.map((path, pathIndex) => (
            <g key={pathIndex}>
              {path.map((point, index) => {
                if (index === path.length - 1) return null;
                const nextPoint = path[(index + 1) % path.length];
                return (
                  <ConstellationLine
                    key={`${pathIndex}-${index}`}
                    x1={`${point[0]}%`}
                    y1={`${point[1]}%`}
                    x2={`${nextPoint[0]}%`}
                    y2={`${nextPoint[1]}%`}
                  />
                );
              })}
            </g>
          ))}
        </svg>
        {stars.map((star, index) => (
          <Star
            key={index}
            x={star.x}
            y={star.y}
            size={star.size}
            delay={star.delay}
            mouseX={mousePosition.x}
            mouseY={mousePosition.y}
            windowWidth={windowSize.width}
            windowHeight={windowSize.height}
          />
        ))}
      </SkyField>
      
      <Title>Whispered Musings</Title>
      
      <TarotCard 
        role="button" 
        tabIndex={0} 
        aria-label="Coming soon tarot card"
        $isFlipped={isCardFlipped}
        onClick={handleCardClick}
        onKeyDown={handleCardKeyDown}
      >
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