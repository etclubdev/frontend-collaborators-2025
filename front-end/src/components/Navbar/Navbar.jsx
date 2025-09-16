/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { horizontalLogo } from '../../assets/images/logos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { navbarLinks } from "../../constants";

export const Navbar = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [isNabBarHovered, setIsNavBarHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const handleScroll = () => setScrollingDown(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hrefggleMenu = () => setMenuOpen(!menuOpen);
  const isNotHomepage = location.pathname !== '/';

  return (
    <div className={`nav-section ${(scrollingDown || isNotHomepage || isNabBarHovered) ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-logo-container">
        <img src={horizontalLogo} alt="ET Club" className="nav-logo" />
      </Link>

      <div className={`hamburger ${menuOpen ? 'show' : ''}`} onClick={hrefggleMenu}>
        <div id="hamburger-hrefp"></div>
        <div id="hamburger-middle"></div>
        <div id="hamburger-bothrefm"></div>
      </div>

      {isMobile ? (
        <CSSTransition in={menuOpen} timeout={300} classNames="fade-menu" unmountOnExit>
          <NavbarMenu isMobile={isMobile} menuOpen={menuOpen} />
        </CSSTransition>
      ) : (
        <NavbarMenu handleSetIsNavBarHovered={setIsNavBarHovered} isMobile={isMobile} menuOpen={menuOpen} />
      )}
    </div>
  );
};

const NavbarMenu = ({ isMobile, menuOpen, handleSetIsNavBarHovered }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const handleDropdownClick = (id) => setActiveDropdown(prev => (prev === id ? null : id));

  return (
    <div
      className={`nav-menu ${menuOpen ? 'show' : ''}`}
      {...(handleSetIsNavBarHovered && {
        onMouseEnter: () => handleSetIsNavBarHovered(true),
        onMouseLeave: () => handleSetIsNavBarHovered(false),
      })}
    >
      {navbarLinks.map(link => {
        // Search
        if (link.search) {
          return isMobile ? (
            <a key={link.id} href={link.url} className="searchbar-group">
              <div className="search-container">
                <div className="search-icon"><FontAwesomeIcon icon={faSearch} /></div>
                <div className="input-placeholder">{link.label}</div>
              </div>
            </a>
          ) : (
            <a key={link.id} href={link.url} className="searchbar-group">
              <div className="search-container">
                <div className="search-icon"><FontAwesomeIcon icon={faSearch} /></div>
                <div className="input-placeholder">{link.label}</div>
              </div>
            </a>
          );
        }

        // Dropdown
        if (link.dropdown) {
          return (
            <div
              key={link.id}
              className="nav-item dropbtn"
              onClick={() => isMobile && handleDropdownClick(link.id)}
            >
              <div className={`nav-item-dropbtn ${isMobile && activeDropdown === link.id ? 'show' : ''}`}>
                <div className="nav-item-content">
                  {link.label} <FontAwesomeIcon className='icon' icon={faChevronDown} />
                </div>
              </div>
              <div className={`dropdown-content ${isMobile && activeDropdown === link.id ? 'show' : ''}`}>
                {link.items.map(item => item.url.startsWith('http') ? (
                  <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer">
                    <p>{item.label}</p>
                  </a>
                ) : (
                  <Link key={item.id} to={item.url}>
                    <p>{item.label}</p>
                  </Link>
                ))}
              </div>
            </div>
          );
        }

        // Normal link
        return (link.id !== "ctv") ? (
          <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="nav-item">
            <p className="nav-item-content">{link.label}</p>
          </a>
        ) : (
          <Link key={link.id} to={link.url} className={`nav-item ${!isMobile && "ctv"}`}>
            <p className="nav-item-content">{link.label}</p>
          </Link>
        );
      })}
    </div>
  );
};
