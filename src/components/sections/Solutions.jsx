import React from 'react';

const Solutions = () => {
  const solutions = [
    {
      icon: "fa-chalkboard-teacher",
      title: "Tư Vấn & Đào Tạo",
      description: "Tư vấn triển khai quản trị tinh gọn (Lean), TPM, Six Sigma và các phương pháp quản lý hiệu quả. Đào tạo nhân sự với kiến thức thực tiễn."
    },
    {
      icon: "fa-code",
      title: "Phát Triển Phần Mềm",
      description: "Xây dựng ứng dụng web, mobile và hệ thống quản lý tùy chỉnh. Tập trung vào hiệu suất cao và trải nghiệm người dùng tốt."
    },
    {
      icon: "fa-cogs",
      title: "Gia Công Phần Mềm",
      description: "Phát triển từng module hoặc toàn bộ dự án theo yêu cầu. Tích hợp liền mạch với hệ thống hiện tại của doanh nghiệp."
    },
    {
      icon: "fa-rocket",
      title: "Triển Khai & Vận Hành",
      description: "Triển khai hệ thống an toàn, di chuyển dữ liệu và đào tạo sử dụng. Hỗ trợ vận hành 24/7 và bảo trì định kỳ."
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-50 relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            Giải Pháp
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Giải Pháp Toàn Diện <span className="text-primary">Cho Doanh Nghiệp</span>
          </h2>
          <p className="text-base text-gray-600 leading-relaxed font-light">
            Tối ưu hóa quy trình kinh doanh với công nghệ tinh gọn, 
            tạo ra giá trị thực tế và tăng trường hiệu quả hoạt động.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 text-center border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/15 transition-colors duration-300">
                <i className={`fas ${solution.icon} text-2xl text-primary`}></i>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug">
                {solution.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light mb-6">
                {solution.description}
              </p>
              
              <button className="text-primary font-medium text-sm hover:text-primary/80 transition-colors duration-200">
                Tìm hiểu thêm →
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Sẵn sàng bắt đầu dự án của bạn?
            </h3>
            <p className="text-lg text-gray-600 font-light">
              Liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá chi tiết.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 transition-colors duration-200"
            >
              Nhận tư vấn miễn phí
            </a>
            <a 
              href="#products" 
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200"
            >
              Xem sản phẩm
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions; 