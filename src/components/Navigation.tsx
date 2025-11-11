import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #d4af37;
  text-decoration: none;
  letter-spacing: 1px;
  transition: color 0.3s ease;

  &:hover {
    color: #b8941f;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.98);
    padding: 2rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    opacity: ${props => props.$isOpen ? 1 : 0};
    visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
    transition: all 0.3s ease;
  }
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  color: ${props => props.$isActive ? '#d4af37' : '#2d5016'};
  text-decoration: none;
  font-weight: ${props => props.$isActive ? 600 : 400};
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #d4af37;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 2px;
    background: #d4af37;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #2d5016;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <NavContainer>
      <NavContent>
        <Logo to="/">Whispered Musings</Logo>
        <MenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </MenuToggle>
        <NavLinks $isOpen={isMenuOpen}>
          <NavLink to="/" $isActive={isActive('/')} onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" $isActive={isActive('/about')} onClick={() => setIsMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/services" $isActive={isActive('/services')} onClick={() => setIsMenuOpen(false)}>
            Services
          </NavLink>
          <NavLink to="/bookings" $isActive={isActive('/bookings')} onClick={() => setIsMenuOpen(false)}>
            Book a Reading
          </NavLink>
          <NavLink to="/contact" $isActive={isActive('/contact')} onClick={() => setIsMenuOpen(false)}>
            Contact
          </NavLink>
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
};

export default Navigation;

