import React from 'react';

const Solutions = () => {
  const solutions = [
    {
      icon: "fa-chalkboard-teacher",
      title: "Tư Vấn & Đào Tạo",
      description: "Tư vấn quản trị tinh gọn, TPM, Six Sigma, BSC, KPI, OKR và quản lý dự án. Phương pháp tập trung vào giá trị thực tế và hiệu quả."
    },
    {
      icon: "fa-code",
      title: "Phát Triển Phần Mềm",
      description: "Phát triển ứng dụng tuỳ chỉnh, phần mềm di động, web và kiểm thử chất lượng. Tập trung vào giải pháp tạo giá trị thực tế."
    },
    {
      icon: "fa-cogs",
      title: "Gia Công Phần Mềm",
      description: "Gia công từng module, toàn bộ dự án và tích hợp tính năng cho hệ thống hiện tại. Đảm bảo chất lượng cao và đúng tiến độ."
    },
    {
      icon: "fa-rocket",
      title: "Triển Khai & Vận Hành",
      description: "Triển khai hệ thống, di chuyển dữ liệu an toàn và tích hợp với hệ thống hiện tại. Hỗ trợ vận hành và bảo trì lâu dài."
    }
  ];

  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
            Giải pháp
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Giải Pháp <span className="gradient-text">Tinh Gọn & Hiệu Quả</span> Cho Doanh Nghiệp
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Chúng tôi <strong>tối ưu quy trình</strong> và <strong>loại bỏ lãng phí</strong> để tạo ra giải pháp công nghệ 
            mang lại <strong>giá trị đo lường được</strong>, <strong>phát triển theo nhu cầu thực tế</strong> và 
            <strong> liên tục cải tiến</strong> theo triết lý LEAN
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <i className={`fas ${solution.icon} text-2xl text-white`}></i>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{solution.description}</p>
              
              <a 
                href="#contact" 
                className="text-primary font-medium inline-flex items-center gap-2 hover:text-secondary transition-colors"
              >
                Tìm Hiểu Thêm <i className="fas fa-arrow-right text-sm"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions; 