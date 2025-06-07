import React, { useState, useEffect } from 'react';
import Logo from '../common/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll animations  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const footerElement = document.querySelector('#footer-section');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { 
      icon: 'fab fa-facebook-f', 
      url: 'https://facebook.com', 
      label: 'Facebook',
      hoverColor: 'hover:bg-blue-600 hover:border-blue-500' 
    },
    { 
      icon: 'fab fa-linkedin-in', 
      url: 'https://linkedin.com', 
      label: 'LinkedIn',
      hoverColor: 'hover:bg-blue-500 hover:border-blue-400' 
    },
    { 
      icon: 'fab fa-youtube', 
      url: 'https://youtube.com', 
      label: 'YouTube',
      hoverColor: 'hover:bg-red-600 hover:border-red-500' 
    }
  ];

  const solutions = [
    { name: 'Tư Vấn & Đào Tạo', href: '#tu-van' },
    { name: 'Phát Triển Phần Mềm', href: '#phat-trien' }, 
    { name: 'Gia Công Phần Mềm', href: '#gia-cong' },
    { name: 'Triển Khai & Vận Hành', href: '#trien-khai' }
  ];

  const products = [
    { name: 'Lean HRM', href: '#lean-hrm' },
    { name: 'Lean ERP', href: '#lean-erp' }, 
    { name: 'Lean WORK', href: '#lean-work' },
    { name: 'Lean SEARCH', href: '#lean-search' }
  ];

  const quickLinks = [
    { name: 'Về chúng tôi', href: '#about' },
    { name: 'Dịch vụ', href: '#services' },
    { name: 'Sản phẩm', href: '#products' },
    { name: 'Blog', href: '#blog' },
    { name: 'Tin tức', href: '#news' },
    { name: 'Liên hệ', href: '#contact' }
  ];

  return (
    <footer 
      id="footer-section"
      className="bg-gray-900 relative overflow-hidden"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      {/* Professional Background Pattern */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Subtle geometric pattern */}
        <div className={`absolute inset-0 transition-transform duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <svg className="w-full h-full opacity-5" viewBox="0 0 400 400" preserveAspectRatio="none">
            <defs>
              <pattern id="footer-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footer-grid)" />
          </svg>
        </div>
        
        {/* Enhanced floating elements */}
        <div className={`absolute top-1/4 left-1/6 w-32 h-32 bg-primary/5 rounded-full blur-xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}></div>
        <div className={`absolute bottom-1/3 right-1/4 w-24 h-24 bg-blue-500/5 rounded-full blur-lg transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}></div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Company Info - Enhanced */}
            <div className="lg:col-span-2">
              <div 
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              >
                <div className="mb-8">
                  <a href="#home" className="inline-block group">
                    <Logo 
                      size="xl"
                      variant="white"
                      showText={true}
                      clickable={true}
                    />
                  </a>
                </div>
                
                <p 
                  className="font-vietnamese text-white/80 text-base leading-relaxed mb-8 max-w-md"
                  style={{
                    fontFeatureSettings: '"kern" 1, "liga" 1',
                    textRendering: 'optimizeLegibility'
                  }}
                >
                  Giải pháp{' '}
                  <span className="text-blue-400 font-medium">chuyển đổi số toàn diện</span>{' '}
                  & tinh gọn cho doanh nghiệp Việt Nam
                </p>
                
                {/* Enhanced Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`
                        group relative w-12 h-12 flex items-center justify-center 
                        rounded-xl border border-gray-700/50 bg-gray-800/30
                        transition-all duration-300 hover:scale-110 hover:shadow-lg
                        focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-gray-900
                        ${social.hoverColor}
                      `}
                      aria-label={social.label}
                    >
                      <i className={`${social.icon} text-gray-400 group-hover:text-white transition-colors duration-300`}></i>
                      
                      {/* Hover Effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Solutions - Enhanced */}
            <div className="lg:col-span-1">
              <div 
                className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              >
                <h3 
                  className="font-vietnamese text-lg font-semibold text-white mb-6 relative"
                  style={{
                    fontFeatureSettings: '"kern" 1, "liga" 1'
                  }}
                >
                  Giải pháp
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
                </h3>
                <ul className="space-y-3">
                  {solutions.map((solution, index) => (
                    <li key={index}>
                      <a 
                        href={solution.href}
                        className="
                          font-vietnamese group relative inline-flex items-center
                          text-gray-400 hover:text-white text-sm
                          transition-all duration-300 hover:translate-x-1
                          focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm
                        "
                      >
                        <span className="relative">
                          {solution.name}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <svg className="ml-2 w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Products - Enhanced */}
            <div className="lg:col-span-1">
              <div 
                className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              >
                <h3 
                  className="font-vietnamese text-lg font-semibold text-white mb-6 relative"
                  style={{
                    fontFeatureSettings: '"kern" 1, "liga" 1'
                  }}
                >
                  Sản phẩm
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
                </h3>
                <ul className="space-y-3">
                  {products.map((product, index) => (
                    <li key={index}>
                      <a 
                        href={product.href}
                        className="
                          font-vietnamese group relative inline-flex items-center
                          text-gray-400 hover:text-white text-sm
                          transition-all duration-300 hover:translate-x-1
                          focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm
                        "
                      >
                        <span className="relative">
                          {product.name}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <svg className="ml-2 w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact - Enhanced */}
            <div className="lg:col-span-1">
              <div 
                className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              >
                <h3 
                  className="font-vietnamese text-lg font-semibold text-white mb-6 relative"
                  style={{
                    fontFeatureSettings: '"kern" 1, "liga" 1'
                  }}
                >
                  Liên hệ
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
                </h3>
                <div className="space-y-4">
                  <div className="group">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center">
                        <i className="fas fa-map-marker-alt text-blue-400 text-sm transition-all duration-300 group-hover:scale-110"></i>
                      </div>
                      <span 
                        className="font-vietnamese text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                        style={{
                          fontFeatureSettings: '"kern" 1, "liga" 1'
                        }}
                      >
                        Số 5 Đường số 3, Khu phố 2, Phường An Khánh,<br />
                        Thành phố Thủ Đức, TP. Hồ Chí Minh
                      </span>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                        <i className="fas fa-phone-alt text-blue-400 text-sm transition-all duration-300 group-hover:scale-110"></i>
                      </div>
                      <a 
                        href="tel:+84906246489" 
                        className="
                          font-vietnamese text-gray-400 hover:text-white text-sm
                          transition-all duration-300 group-hover:text-blue-300
                          focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm
                        "
                        aria-label="Gọi điện thoại +84 906 246 489"
                      >
                        +84 906 246 489
                      </a>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                        <i className="fas fa-envelope text-blue-400 text-sm transition-all duration-300 group-hover:scale-110"></i>
                      </div>
                      <a 
                        href="mailto:info@leantech.vn" 
                        className="
                          font-vietnamese text-gray-400 hover:text-white text-sm
                          transition-all duration-300 group-hover:text-blue-300
                          focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm
                        "
                        aria-label="Gửi email đến info@leantech.vn"
                      >
                        info@leantech.vn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Enhanced */}
        <div className="border-t border-gray-800/50">
          <div 
            className={`py-6 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
              <p 
                className="font-vietnamese text-gray-500 text-sm"
                style={{
                  fontFeatureSettings: '"kern" 1, "liga" 1'
                }}
              >
                &copy; {currentYear} LeanTechCo. Tất cả các quyền được bảo lưu.
              </p>
              <div className="flex flex-wrap gap-6 justify-center md:justify-end">
                <a 
                  href="#privacy" 
                  className="
                    font-vietnamese text-gray-500 hover:text-gray-300 text-sm
                    transition-all duration-300 hover:translate-y-0.5
                    focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm
                    relative group
                  "
                >
                  <span className="relative">
                    Chính sách bảo mật
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
                <a 
                  href="#terms" 
                  className="
                    font-vietnamese text-gray-500 hover:text-gray-300 text-sm
                    transition-all duration-300 hover:translate-y-0.5
                    focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm
                    relative group
                  "
                >
                  <span className="relative">
                    Điều khoản sử dụng
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
                <a 
                  href="#support" 
                  className="
                    font-vietnamese text-gray-500 hover:text-gray-300 text-sm
                    transition-all duration-300 hover:translate-y-0.5
                    focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm
                    relative group
                  "
                >
                  <span className="relative">
                    Hỗ trợ khách hàng
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 