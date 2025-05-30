import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'fab fa-facebook-f', url: 'https://facebook.com', label: 'Facebook' },
    { icon: 'fab fa-linkedin-in', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'fab fa-youtube', url: 'https://youtube.com', label: 'YouTube' }
  ];

  const solutions = [
    'Tư Vấn & Đào Tạo',
    'Phát Triển Phần Mềm', 
    'Gia Công Phần Mềm',
    'Triển Khai & Vận Hành'
  ];

  const products = [
    'Lean HRM',
    'Lean ERP', 
    'Lean WORK',
    'Lean SEARCH'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <a href="#home" className="text-2xl font-bold">
                <span className="text-white">lean</span>
                <span className="text-white">tech</span>
                <span className="text-blue-400">co.</span>
              </a>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Giải pháp chuyển đổi số toàn diện & tinh gọn cho doanh nghiệp Việt Nam
            </p>
            
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-ghost btn-icon hover:bg-blue-600 hover:text-white"
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-gray-400`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Giải pháp
            </h3>
            <ul className="space-y-2">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <a 
                    href="#solutions" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {solution}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Sản phẩm
            </h3>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index}>
                  <a 
                    href="#products" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Liên hệ
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-blue-400 text-sm mt-1"></i>
                <span className="text-gray-400 text-sm leading-relaxed">
                  Số 5 Đường số 3, Khu phố 2, Phường An Khánh,<br />
                  Thành phố Thủ Đức, TP. Hồ Chí Minh
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone-alt text-blue-400 text-sm"></i>
                <a 
                  href="tel:+84906246489" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  +84 906 246 489
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-blue-400 text-sm"></i>
                <a 
                  href="mailto:info@leantech.vn" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  info@leantech.vn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-500 text-sm mb-3 md:mb-0">
              &copy; {currentYear} LeanTechCo. Tất cả các quyền được bảo lưu.
            </p>
            <div className="flex space-x-6">
              <a 
                href="#privacy" 
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200"
              >
                Chính sách bảo mật
              </a>
              <a 
                href="#terms" 
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200"
              >
                Điều khoản sử dụng
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 