import React from 'react';

const Services = () => {
  const solutions = [
    {
      image: `${process.env.PUBLIC_URL}/assets/images/service6.jpeg`,
      title: "Tư Vấn & Đào Tạo",
      tagline: "Tối ưu hóa quy trình vận hành",
      description: "Tư vấn quản trị tinh gọn, TPM, Six Sigma, BSC, KPI, OKR và quản lý dự án. Phương pháp tập trung vào giá trị thực tế và hiệu quả cho doanh nghiệp.",
      features: [
        "Lean Manufacturing",
        "Six Sigma & TPM",
        "BSC & KPI Setup",
        "OKR Implementation",
        "Project Management",
        "Process Optimization"
      ],
      icon: "fa-graduation-cap",
      category: "Tư vấn",
      color: "from-blue-600 to-blue-700",
      delay: "0"
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/images/service7.jpeg`,
      title: "Phát Triển Phần Mềm",
      tagline: "Giải pháp công nghệ tùy chỉnh",
      description: "Phát triển ứng dụng tùy chỉnh, phần mềm di động, web và kiểm thử chất lượng. Tập trung vào giải pháp tạo giá trị thực tế và đáp ứng nhu cầu cụ thể.",
      features: [
        "Custom Web Apps",
        "Mobile Development",
        "API Integration",
        "Quality Assurance",
        "UI/UX Design",
        "Performance Testing"
      ],
      icon: "fa-code",
      category: "Phát triển",
      color: "from-primary to-blue-600",
      delay: "100"
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/images/service8.jpeg`,
      title: "Gia Công Phần Mềm",
      tagline: "Outsourcing chất lượng cao",
      description: "Gia công từng module, toàn bộ dự án và tích hợp tính năng cho hệ thống hiện tại. Đảm bảo chất lượng cao và đúng tiến độ theo yêu cầu khách hàng.",
      features: [
        "Module Development",
        "System Integration",
        "Feature Enhancement",
        "Code Optimization",
        "Legacy Modernization",
        "Technical Support"
      ],
      icon: "fa-tools",
      category: "Gia công",
      color: "from-blue-700 to-blue-800",
      delay: "200"
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/images/service5.jpeg`,
      title: "Triển Khai & Vận Hành",
      tagline: "Hỗ trợ vận hành 24/7",
      description: "Triển khai hệ thống, di chuyển dữ liệu an toàn và tích hợp với hệ thống hiện tại. Hỗ trợ vận hành và bảo trì lâu dài với đội ngũ chuyên nghiệp.",
      features: [
        "System Deployment",
        "Data Migration",
        "System Integration",
        "24/7 Support",
        "Maintenance",
        "Performance Monitoring"
      ],
      icon: "fa-server",
      category: "Vận hành",
      color: "from-blue-800 to-primary",
      delay: "300"
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-gray-50 relative overflow-hidden">
      
      <div className="container-custom relative z-10">
        {/* Section Header - Shopify Style Layout */}
        <div className="mb-16">
          {/* Services Label */}
          <div className="mb-6">
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">
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

        {/* Services Grid - Enhanced Professional Layout */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="group bg-white overflow-hidden border hover:border-blue-500 transition-all duration-300 hover:shadow-lg cursor-pointer"
                style={{ 
                  animationDelay: `${solution.delay}ms` 
                }}
              >
                {/* Service Image with Enhanced Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Professional Overlay with Icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
                        <i className={`fas ${solution.icon} text-2xl text-white`}></i>
                      </div>
                      <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1">
                        {solution.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Content Section */}
                <div className="flex flex-col">
                  {/* Card Header */}
                  <div className="p-6 pb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                      {solution.title}
                    </h3>
                    <p className="text-primary text-sm font-semibold mb-3">
                      {solution.tagline}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                  
                  {/* Features Section */}
                  <div className="px-6 pb-4 flex-grow">
                    <h4 className="text-sm font-semibold text-gray-900 mb-4">Dịch vụ chính:</h4>
                    <div className="space-y-2">
                      {solution.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <i className="fas fa-check text-primary text-sm mt-1 flex-shrink-0"></i>
                          <span className="text-gray-600 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                      {solution.features.length > 4 && (
                        <div className="text-xs text-gray-500 font-medium mt-3">
                          +{solution.features.length - 4} dịch vụ khác
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Professional CTA Buttons */}
                  <div className="px-6 pb-6 mt-auto">
                    <div className="border-t border-gray-100 pt-4 space-y-3">
                      <button className={`w-full bg-gradient-to-r ${solution.color} text-white font-semibold py-3 px-4 hover:opacity-90 transition-all duration-300 transform hover:scale-105`}>
                        Tìm hiểu thêm
                      </button>
                      <button className="w-full text-primary border border-primary/20 font-semibold py-2 px-4 hover:bg-primary/5 transition-all duration-300">
                        Liên hệ tư vấn
                      </button>
                    </div>
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