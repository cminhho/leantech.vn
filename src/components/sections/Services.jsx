import React from 'react';

const Services = () => {
  const solutions = [
    {
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Tư Vấn & Đào Tạo",
      description: "Tư vấn quản trị tinh gọn, TPM, Six Sigma, BSC, KPI, OKR và quản lý dự án. Phương pháp tập trung vào giá trị thực tế và hiệu quả cho doanh nghiệp.",
      category: "Tư vấn",
      delay: "0"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Phát Triển Phần Mềm",
      description: "Phát triển ứng dụng tùy chỉnh, phần mềm di động, web và kiểm thử chất lượng. Tập trung vào giải pháp tạo giá trị thực tế và đáp ứng nhu cầu cụ thể.",
      category: "Phát triển",
      delay: "100"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Gia Công Phần Mềm",
      description: "Gia công từng module, toàn bộ dự án và tích hợp tính năng cho hệ thống hiện tại. Đảm bảo chất lượng cao và đúng tiến độ theo yêu cầu khách hàng.",
      category: "Gia công",
      delay: "200"
    },
    {
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Triển Khai & Vận Hành",
      description: "Triển khai hệ thống, di chuyển dữ liệu an toàn và tích hợp với hệ thống hiện tại. Hỗ trợ vận hành và bảo trì lâu dài với đội ngũ chuyên nghiệp.",
      category: "Vận hành",
      delay: "300"
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-white"></div>
      
      <div className="container-custom relative z-10">
        {/* Section Header - Shopify Style Layout */}
        <div className="mb-16">
          {/* Services Label */}
          <div className="mb-6">
            <span className="text-primary text-sm font-semibold">
              DỊCH VỤ CÔNG NGHỆ
            </span>
          </div>
          
          {/* Two Column Layout */}
          <div className="flex flex-wrap sm:flex-nowrap sm:items-baseline gap-8 lg:gap-16">
            {/* Left Side - Title */}
            <div className="flex-shrink-0">
              <h2 className="section-title">
                Giải Pháp Toàn Diện
              </h2>
            </div>
            
            {/* Right Side - Description */}
            <div className="flex-1">
              <p className="section-subtitle mb-0">
                Cung cấp các dịch vụ công nghệ thông tin chuyên nghiệp, từ tư vấn chiến lược đến triển khai ứng dụng, 
                giúp doanh nghiệp số hóa và tối ưu hóa hiệu quả hoạt động.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid - Shopify Inspired Layout */}
        <div className="relative">
          {/* Grid Container - Square Professional Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <div 
                key={index} 
                className="group bg-white overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-primary/40 cursor-pointer"
                style={{ 
                  animationDelay: `${solution.delay}ms` 
                }}
              >
                {/* Square Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Simple Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-gray-700 text-xs font-medium px-3 py-1 shadow-sm">
                      {solution.category}
                    </span>
                  </div>
                </div>
                
                {/* Content Section - Enhanced */}
                <div className="p-6 flex flex-col h-64">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {solution.title}
                  </h3>
                  
                  {/* Description - More space */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                    {solution.description}
                  </p>
                  
                  {/* CTA at bottom */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-primary font-medium text-sm group-hover:text-primary-dark transition-colors duration-300">
                      Tìm hiểu thêm
                    </span>
                    <i className="fas fa-arrow-right text-primary text-sm group-hover:translate-x-1 transition-transform duration-300"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services; 