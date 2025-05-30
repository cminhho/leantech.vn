import React from 'react';

const Services = () => {
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
      description: "Phát triển ứng dụng tùy chỉnh, phần mềm di động, web và kiểm thử chất lượng. Tập trung vào giải pháp tạo giá trị thực tế.",
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
        "Triển khai và vận hành Lean Ecosystem toàn diện",
        "Tích hợp với hệ thống hiện tại",
        "Hỗ trợ vận hành và bảo trì lâu dài",
        "Tối ưu hóa quy trình và giám sát hiệu suất"
      ],
      color: "from-blue-800 to-primary",
      delay: "300",
      badge: "Operations"
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-white"></div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Giải Pháp Công Nghệ
          </h2>
          <p className="section-subtitle-center">
          Cung cấp các dịch vụ công nghệ thông tin toàn diện, từ tư vấn chiến lược đến phát triển ứng dụng và hỗ trợ kỹ thuật, giúp doanh nghiệp tối ưu hóa hiệu quả hoạt động.
          </p>
        </div>

        {/* Solutions Grid - 4 cards in 1 row */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 hover:border-primary/20 transition-all duration-300 flex flex-col h-full group"
              style={{ animationDelay: `${solution.delay}ms` }}
            >
              {/* Icon & Badge */}
              <div className="text-center mb-6 relative">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                  <i className={`fas ${solution.icon} text-3xl ${
                    index === 0 ? 'text-primary' :
                    index === 1 ? 'text-blue-600' :
                    index === 2 ? 'text-blue-700' :
                    'text-blue-800'
                  }`}></i>
                </div>
                <h3 className="card-title text-center group-hover:text-primary transition-colors duration-300">
                  {solution.title}
                </h3>
              </div>
              
              {/* Content - Flex grow to push button to bottom */}
              <div className="flex-grow">
                {/* Feature List with Checkmarks */}
                <div className="space-y-3 mb-6">
                  {solution.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <i className="fas fa-check text-green-600 text-sm"></i>
                      </div>
                      <span className="list-item-text">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button at bottom */}
              <div className="mt-auto pt-4 border-t border-gray-100">
                <button className="btn btn-outline btn-sm btn-wide group-hover:btn-primary transition-all duration-300">
                  Liên hệ
                  <i className="fas fa-arrow-right text-xs"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 