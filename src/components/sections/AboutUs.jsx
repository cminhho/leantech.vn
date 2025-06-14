import React from 'react';

const AboutUs = () => {
  const values = [
    {
      icon: "fa-brain",
      title: "Tư Vấn Chuyên Sâu",
      description: "Phân tích và tư vấn giải pháp công nghệ phù hợp với từng ngành nghề và quy mô doanh nghiệp cụ thể."
    },
    {
      icon: "fa-code-branch",
      title: "Phát Triển Chuyên Nghiệp",
      description: "Thiết kế và phát triển các sản phẩm phần mềm theo tiêu chuẩn quốc tế với quy trình DevOps hiện đại."
    },
    {
      icon: "fa-rocket",
      title: "Triển Khai Hiệu Quả",
      description: "Đảm bảo triển khai thành công với kế hoạch chi tiết, đào tạo người dùng và hỗ trợ vận hành 24/7."
    },
    {
      icon: "fa-handshake",
      title: "Đối Tác Dài Hạn",
      description: "Cam kết đồng hành và phát triển cùng doanh nghiệp với dịch vụ bảo trì, nâng cấp liên tục."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-600/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-600/10 to-transparent blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          {/* About Us Label */}
          <div className="mb-6">
            <span className="text-primary text-sm font-semibold">
              VỀ CHÚNG TÔI
            </span>
          </div>
          
          {/* Two Column Layout */}
          <div className="flex flex-wrap sm:flex-nowrap sm:items-baseline gap-8 lg:gap-16">
            {/* Left Side - Title */}
            <div className="flex-shrink-0">
              <h2 className="section-title">
                Về LeanTechCo
              </h2>
            </div>
            
            {/* Right Side - Description */}
            <div className="flex-1">
              <p className="section-subtitle mb-0">
                Được thành lập năm 2018, chúng tôi mang đến giải pháp công nghệ tiên tiến và dịch vụ tư vấn chuyên nghiệp, 
                giúp doanh nghiệp tối ưu hóa quy trình và nâng cao hiệu quả hoạt động.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid - 4 cards in one row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white p-6 shadow-lg hover:shadow-xl border border-gray-100 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
                  <i className={`fas ${value.icon} text-white text-lg`}></i>
                </div>
                <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h4>
              </div>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 