import React from 'react';

const Solutions = () => {
  const solutions = [
    {
      icon: "fa-chalkboard-teacher",
      title: "Tư Vấn & Đào Tạo",
      description: "Tư vấn quản trị tinh gọn, TPM, Six Sigma, BSC, KPI, OKR và quản lý dự án. Phương pháp tập trung vào giá trị thực tế và hiệu quả.",
      bullets: [
        "Tư vấn quản trị tinh gọn (Lean) và TPM",
        "Triển khai Six Sigma và cải tiến liên tục",
        "Xây dựng hệ thống BSC, KPI và OKR",
        "Quản lý dự án chuyên nghiệp và hiệu quả"
      ],
      color: "from-primary to-blue-600",
      delay: "0",
      badge: "Consulting"
    },
    {
      icon: "fa-code",
      title: "Phát Triển Phần Mềm",
      description: "Phát triển ứng dụng tuỳ chỉnh, phần mềm di động, web và kiểm thử chất lượng. Tập trung vào giải pháp tạo giá trị thực tế.",
      bullets: [
        "Ứng dụng web responsive và hiện đại",
        "Phần mềm di động iOS và Android",
        "Ứng dụng tùy chỉnh theo yêu cầu",
        "Kiểm thử chất lượng và đảm bảo hiệu năng"
      ],
      color: "from-blue-600 to-blue-700",
      delay: "100",
      badge: "Development"
    },
    {
      icon: "fa-cogs",
      title: "Gia Công Phần Mềm",
      description: "Gia công từng module, toàn bộ dự án và tích hợp tính năng cho hệ thống hiện tại. Đảm bảo chất lượng cao và đúng tiến độ.",
      bullets: [
        "Gia công từng module theo yêu cầu",
        "Phát triển toàn bộ dự án phần mềm",
        "Tích hợp tính năng với hệ thống hiện tại",
        "Đảm bảo chất lượng cao và đúng tiến độ"
      ],
      color: "from-blue-700 to-blue-800",
      delay: "200",
      badge: "Outsourcing"
    },
    {
      icon: "fa-rocket",
      title: "Triển Khai & Vận Hành",
      description: "Triển khai hệ thống, di chuyển dữ liệu an toàn và tích hợp với hệ thống hiện tại. Hỗ trợ vận hành và bảo trì lâu dài.",
      bullets: [
        "Triển khai hệ thống an toàn và ổn định",
        "Di chuyển dữ liệu không gián đoạn",
        "Tích hợp với hệ thống hiện tại",
        "Hỗ trợ vận hành và bảo trì lâu dài"
      ],
      color: "from-blue-800 to-primary",
      delay: "300",
      badge: "Operations"
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-white relative overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white"></div>
      
      <div className="container-custom relative z-10">
        {/* Clean Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Giải Pháp Toàn Diện <span className="text-primary">Cho Doanh Nghiệp</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Tối ưu hóa quy trình kinh doanh với công nghệ tinh gọn
          </p>
        </div>

        {/* Clean Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20 overflow-hidden flex flex-col"
              style={{ animationDelay: `${solution.delay}ms` }}
            >
              {/* Clean Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${solution.color} rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                    <i className={`fas ${solution.icon} text-white text-lg`}></i>
                  </div>
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {solution.badge}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {solution.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
              
              {/* Clean Content - Flex grow to push CTA to bottom */}
              <div className="px-6 pb-4 flex-grow">
                {/* Simplified Bullet Points */}
                <div className="space-y-2">
                  {solution.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fixed CTA at bottom */}
              <div className="px-6 pb-6 mt-auto">
                <div className="border-t border-gray-100 pt-4">
                  <button className="w-full text-primary hover:text-blue-700 font-medium text-sm transition-colors duration-300 text-center">
                    Liên hệ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Simplified Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-primary/5 px-6 py-4 rounded-xl">
            <i className="fas fa-phone-alt text-primary text-lg"></i>
            <span className="text-gray-900 font-medium">Cần tư vấn chi tiết?</span>
            <a 
              href="#contact"
              className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 text-sm ml-2"
            >
              Liên hệ ngay
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions; 