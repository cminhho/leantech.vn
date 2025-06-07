import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../common/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll event to change header style when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Check if we're on a content page (not homepage)
  const isContentPage = location.pathname !== '/';

  const navigationItems = [
    { to: '/', label: 'Trang chủ', type: 'link' },
    { to: '/#solutions', label: 'Giải pháp', type: 'anchor' },
    { to: '/#products', label: 'Sản phẩm', type: 'anchor' },
    { to: '/blog', label: 'Blog', type: 'link' },
    { to: '/#why-us', label: 'Về chúng tôi', type: 'anchor' },
    { to: '/#clients', label: 'Đối tác', type: 'anchor' },
    { to: '/#contact', label: 'Liên hệ', type: 'anchor' }
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isContentPage 
          ? 'bg-primary shadow-lg backdrop-blur-sm' 
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section - Enhanced sizing and spacing */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="block focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-transparent rounded-sm"
              aria-label="Trang chủ LeanTech"
            >
              <Logo 
                size="2xl"
                variant="white"
                showText={true}
                clickable={true}
                className="transition-all duration-300 hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Professional typography */}
          <nav className="hidden lg:block" role="navigation" aria-label="Menu chính">
            <ul className="flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <li key={index}>
                  {item.type === 'link' ? (
                    <Link 
                      to={item.to} 
                      className="nav-link-pro group relative py-2 transition-all duration-300"
                      aria-current={location.pathname === item.to ? 'page' : undefined}
                    >
                      <span className="relative z-10">{item.label}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  ) : (
                    <a 
                      href={item.to} 
                      className="nav-link-pro group relative py-2 transition-all duration-300"
                    >
                      <span className="relative z-10">{item.label}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button - Enhanced styling */}
          <div className="hidden lg:block">
            <a 
              href="/#contact" 
              className="btn btn-cta btn-md group relative overflow-hidden"
              aria-label="Liên hệ để nhận báo giá dịch vụ"
            >
              <span className="relative z-10 btn-text-pro">Báo giá dịch vụ</span>
              <span className="absolute inset-0 bg-white/20 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          </div>

          {/* Mobile menu button - Enhanced accessibility */}
          <button 
            className="btn btn-ghost btn-icon lg:hidden relative z-50 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="relative w-6 h-6">
              <span 
                className={`absolute left-0 top-1 w-6 h-0.5 bg-white transition-all duration-300 transform origin-center ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span 
                className={`absolute left-0 top-3 w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span 
                className={`absolute left-0 top-5 w-6 h-0.5 bg-white transition-all duration-300 transform origin-center ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div 
          id="mobile-menu"
          className={`lg:hidden absolute top-full left-0 w-full bg-primary shadow-2xl transition-all duration-300 transform ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0 visible' 
              : 'opacity-0 -translate-y-4 invisible'
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="border-t border-white/10">
            <nav className="py-6" role="navigation" aria-label="Menu di động">
              <div className="space-y-1 px-6">
                {navigationItems.map((item, index) => (
                  <div key={index}>
                    {item.type === 'link' ? (
                      <Link 
                        to={item.to} 
                        className="mobile-nav-link-pro group block py-3 transition-all duration-300"
                        onClick={handleLinkClick}
                        aria-current={location.pathname === item.to ? 'page' : undefined}
                      >
                        <span className="flex items-center justify-between">
                          <span className="nav-link-pro">{item.label}</span>
                          <i className="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"></i>
                        </span>
                      </Link>
                    ) : (
                      <a 
                        href={item.to} 
                        className="mobile-nav-link-pro group block py-3 transition-all duration-300"
                        onClick={handleLinkClick}
                      >
                        <span className="flex items-center justify-between">
                          <span className="nav-link-pro">{item.label}</span>
                          <i className="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"></i>
                        </span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Mobile CTA */}
              <div className="px-6 pt-6 border-t border-white/10">
                <a 
                  href="/#contact" 
                  className="btn btn-cta btn-lg btn-wide group block text-center"
                  onClick={handleLinkClick}
                  aria-label="Liên hệ để nhận báo giá dịch vụ"
                >
                  <span className="btn-text-pro">Báo giá dịch vụ</span>
                </a>
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
            style={{ top: '80px' }}
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  );
};

export default Header; 