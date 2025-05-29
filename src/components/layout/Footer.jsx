import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      platform: 'facebook', 
      icon: 'fab fa-facebook-f', 
      url: 'https://facebook.com',
      label: 'Facebook'
    },
    { 
      platform: 'linkedin', 
      icon: 'fab fa-linkedin-in', 
      url: 'https://linkedin.com',
      label: 'LinkedIn'
    },
    { 
      platform: 'youtube', 
      icon: 'fab fa-youtube', 
      url: 'https://youtube.com',
      label: 'YouTube'
    }
  ];

  const solutions = [
    { name: 'Tư Vấn & Đào Tạo', href: '#solutions' },
    { name: 'Phát Triển Phần Mềm', href: '#solutions' },
    { name: 'Gia Công Phần Mềm', href: '#solutions' },
    { name: 'Triển Khai & Vận Hành', href: '#solutions' }
  ];

  const products = [
    { name: 'Lean HRM', href: '#products' },
    { name: 'Lean ERP', href: '#products' },
    { name: 'Lean WORK', href: '#products' },
    { name: 'Lean SEARCH', href: '#products' }
  ];

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      content: 'Số 5 Đường số 3, Khu phố 2, Phường An Khánh, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
      type: 'address'
    },
    {
      icon: 'fas fa-phone-alt',
      content: '+84 906 246 489',
      type: 'phone',
      href: 'tel:+84906246489'
    },
    {
      icon: 'fas fa-envelope',
      content: 'info@leantech.vn',
      type: 'email',
      href: 'mailto:info@leantech.vn'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <a 
                href="#home" 
                className="inline-block text-3xl font-bold transition-transform duration-300 hover:scale-105"
                aria-label="LeanTechCo Homepage"
              >
                <span className="text-white">lean</span>
                <span className="text-white">tech</span>
                <span className="text-blue-400">co.</span>
              </a>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-sm">
              Giải pháp chuyển đổi số toàn diện & tinh gọn cho doanh nghiệp Việt Nam
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.platform}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white relative">
              Giải pháp
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-400"></div>
            </h3>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <a 
                    href={solution.href} 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm block py-1 hover:translate-x-1 transform transition-transform"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 opacity-60"></i>
                    {solution.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white relative">
              Sản phẩm
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-400"></div>
            </h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <a 
                    href={product.href} 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm block py-1 hover:translate-x-1 transform transition-transform"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 opacity-60"></i>
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white relative">
              Liên hệ
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-400"></div>
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start space-x-3 group">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className={`${contact.icon} text-blue-400 text-sm group-hover:scale-110 transition-transform duration-300`}></i>
                  </div>
                  {contact.href ? (
                    <a 
                      href={contact.href} 
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm leading-relaxed flex-1"
                    >
                      {contact.content}
                    </a>
                  ) : (
                    <span className="text-gray-300 text-sm leading-relaxed flex-1">
                      {contact.content}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-900">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <p className="text-gray-500 text-sm">
                &copy; {currentYear} LeanTechCo. Tất cả các quyền được bảo lưu.
              </p>
            </div>
            
            <div className="flex items-center space-x-8">
              <a 
                href="#" 
                className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300 hover:underline"
              >
                Chính sách bảo mật
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300 hover:underline"
              >
                Điều khoản sử dụng
              </a>
              <div className="hidden md:flex items-center space-x-2 text-gray-500 text-sm">
                <i className="fas fa-heart text-red-400 text-xs"></i>
                <span>Made with care in Vietnam</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 