import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary shadow-md' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="text-xl font-bold">
              <span className="text-white">lean</span>
              <span className="text-white">tech</span>
              <span className="text-secondary">co.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#home" className="text-white/90 hover:text-secondary transition-colors">Trang chủ</a></li>
              <li><a href="#solutions" className="text-white/90 hover:text-secondary transition-colors">Giải pháp</a></li>
              <li><a href="#products" className="text-white/90 hover:text-secondary transition-colors">Sản phẩm</a></li>
              <li><a href="#why-us" className="text-white/90 hover:text-secondary transition-colors">Về chúng tôi</a></li>
              <li><a href="#clients" className="text-white/90 hover:text-secondary transition-colors">Đối tác</a></li>
              <li><a href="#contact" className="text-white/90 hover:text-secondary transition-colors">Liên hệ</a></li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#contact" className="btn btn-primary text-sm">
              Báo giá dịch vụ
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary border-t border-white/10 py-4">
            <nav className="flex flex-col space-y-4 px-4">
              <a href="#home" className="text-white/90 hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>Trang chủ</a>
              <a href="#solutions" className="text-white/90 hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>Giải pháp</a>
              <a href="#products" className="text-white/90 hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>Sản phẩm</a>
              <a href="#why-us" className="text-white/90 hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>Về chúng tôi</a>
              <a href="#clients" className="text-white/90 hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>Đối tác</a>
              <a href="#contact" className="text-white/90 hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>Liên hệ</a>
              <a href="#contact" className="btn btn-primary mt-2 w-full justify-center" onClick={() => setIsMenuOpen(false)}>Báo giá dịch vụ</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 