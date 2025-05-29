import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <a href="#home" className="text-2xl font-bold">
                <span className="text-white">lean</span>
                <span className="text-white">tech</span>
                <span className="text-secondary">co.</span>
              </a>
            </div>
            <p className="text-gray-400 mb-4">
              Giải pháp chuyển đổi số toàn diện & tinh gọn cho doanh nghiệp Việt Nam
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Giải pháp</h3>
            <ul className="space-y-2">
              <li>
                <a href="#solutions" className="text-gray-400 hover:text-secondary transition-colors">
                  Tư Vấn & Đào Tạo
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-400 hover:text-secondary transition-colors">
                  Phát Triển Phần Mềm
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-400 hover:text-secondary transition-colors">
                  Gia Công Phần Mềm
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-400 hover:text-secondary transition-colors">
                  Triển Khai & Vận Hành
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sản phẩm</h3>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-gray-400 hover:text-secondary transition-colors">
                  Lean HRM
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-secondary transition-colors">
                  Lean ERP
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-secondary transition-colors">
                  Lean WORK
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-secondary transition-colors">
                  Lean SEARCH
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt mt-1 text-secondary"></i>
                <span className="text-gray-400">
                  Số 5 Đường số 3, Khu phố 2, Phường An Khánh, Thành phố Thủ Đức, Thành phố Hồ Chí Minh
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone-alt text-secondary"></i>
                <a href="tel:+84906246489" className="text-gray-400 hover:text-secondary transition-colors">
                  +84 906 246 489
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-secondary"></i>
                <a href="mailto:info@leantech.vn" className="text-gray-400 hover:text-secondary transition-colors">
                  info@leantech.vn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} LeanTechCo. Tất cả các quyền được bảo lưu.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-secondary text-sm">Chính sách bảo mật</a>
            <a href="#" className="text-gray-500 hover:text-secondary text-sm">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 