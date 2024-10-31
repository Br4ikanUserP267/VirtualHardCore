import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './navbar.css';

const NavbarComponent: React.FC = () => {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const handleNavClick = () => {
    setIsNavbarExpanded(false);
    setActiveDropdown(null);
  };

  const handleToggleClick = () => {
    setIsNavbarExpanded(prev => !prev);
    setActiveDropdown(null);
  };

  const handleDropdownClick = (dropdownName: string) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
    setIsNavbarExpanded(true);
  };

  const handleDropdownItemClick = () => {
    setIsNavbarExpanded(false);
    setActiveDropdown(null);
  };

  const handleMouseEnter = (dropdownName: string) => {
    if (window.innerWidth >= 992) {
      setActiveDropdown(dropdownName);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 992) {
      setActiveDropdown(null);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsNavbarExpanded(false);
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    if (isNavbarExpanded) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isNavbarExpanded]);

  return (
    <Navbar expand="lg" bg="dark" variant="dark" expanded={isNavbarExpanded} ref={navRef} className="fixed-top">
      <LinkContainer to="/">
        <Navbar.Brand><h1>HardCoreGym</h1></Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle 
        aria-controls="navbarNav" 
        onClick={handleToggleClick} 
      />
      <Navbar.Collapse id="navbarNav" className="justify-content-center">
        <Nav>
          <LinkContainer to="/">
            <Nav.Link onClick={handleNavClick}>Presentación</Nav.Link>
          </LinkContainer>
          <NavDropdown
            title="Planes"
            id="servicesDropdown"
            className="nav-dropdown"
            show={activeDropdown === 'services'}
            onClick={() => handleDropdownClick('services')}
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <LinkContainer to="/powerbuilding">
              <NavDropdown.Item onClick={handleDropdownItemClick}>Powerbuilding</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/powerlifting">
              <NavDropdown.Item onClick={handleDropdownItemClick}>Powerlifting</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/culturismo">
              <NavDropdown.Item onClick={handleDropdownItemClick}>Hipertrofia/Culturismo</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/streetlifting">
              <NavDropdown.Item onClick={handleDropdownItemClick}>Streelifting</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/salud">
              <NavDropdown.Item onClick={handleDropdownItemClick}>Entrena por Salud</NavDropdown.Item>
            </LinkContainer>
            
            <LinkContainer to="/otrosdeportes">
              <NavDropdown.Item onClick={handleDropdownItemClick}>Nos Adaptamos a tu deporte</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <NavDropdown
            title="Equipo"
            id="teamDropdown"
            className="nav-dropdown"
            show={activeDropdown === 'team'}
            onClick={() => handleDropdownClick('team')}
            onMouseEnter={() => handleMouseEnter('team')}
            onMouseLeave={handleMouseLeave}
          >
            <LinkContainer to="/psicologo">
              <NavDropdown.Item onClick={handleDropdownItemClick}>Psicólogo</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/nutricionista">
              <NavDropdown.Item onClick={handleDropdownItemClick}>Nutricionista</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/entrenadores">
              <NavDropdown.Item onClick={handleDropdownItemClick}>Entrenador</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/medico">
              <NavDropdown.Item onClick={handleDropdownItemClick}>Medico</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <NavDropdown
            title="Testimonios"
            id="testimonialsDropdown"
            className="nav-dropdown"
            show={activeDropdown === 'testimonials'}
            onClick={() => handleDropdownClick('testimonials')}
            onMouseEnter={() => handleMouseEnter('testimonials')}
            onMouseLeave={handleMouseLeave}
          >
            <LinkContainer to="/testimonios-powerlifting">
              <NavDropdown.Item onClick={handleDropdownItemClick}>Atletas de Powerlifting</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/testimonios-hipertrofia">
              <NavDropdown.Item onClick={handleDropdownItemClick}>Atletas que entrenan Hipertrofia</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/testimonios-powerbuilding">
              <NavDropdown.Item onClick={handleDropdownItemClick}>Atletas de Powerbuilding</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/testimonios-calistenia">
              <NavDropdown.Item onClick={handleDropdownItemClick}>Atletas de Calistenia</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/testimonios-salud">
              <NavDropdown.Item onClick={handleDropdownItemClick}>Personas que entrenan por Salud</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/testimonios-otrosdeportes">
              <NavDropdown.Item onClick={handleDropdownItemClick}>Otros Deportes</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <NavDropdown
            title="Liga de potencia de Sucre"
            id="ligaPotenciaDropdown"
            className="nav-dropdown"
            show={activeDropdown === 'ligaPotencia'}
            onClick={() => handleDropdownClick('ligaPotencia')}
            onMouseEnter={() => handleMouseEnter('ligaPotencia')}
            onMouseLeave={handleMouseLeave}
          >
            <LinkContainer to="/ligapotencia">
              <NavDropdown.Item onClick={handleDropdownItemClick}>¿Qué es?</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/rankings">
              <NavDropdown.Item onClick={handleDropdownItemClick}>Rankings</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/inscripcion">
              <NavDropdown.Item onClick={handleDropdownItemClick}>Inscripción</NavDropdown.Item>
            </LinkContainer>
       
            <LinkContainer to="/eventos">
              <NavDropdown.Item onClick={handleDropdownItemClick}>Eventos</NavDropdown.Item>
            </LinkContainer>

          </NavDropdown>
          <LinkContainer to="/login" className="login-link">
            <Nav.Link onClick={handleNavClick}>Acceder</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
