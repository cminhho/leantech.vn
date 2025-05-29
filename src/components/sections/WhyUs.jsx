import React from 'react';

const WhyUs = () => {
  const reasons = [
    {
      id: 'lean-dev',
      icon: 'fa-scissors',
      title: 'Phát Triển Tinh Gọn',
      description: 'Giảm 53% tính năng không cần thiết qua phân tích giá trị sử dụng thực tế.',
      features: [
        'Loại bỏ các bước thừa trong phát triển',
        'Quy trình tinh gọn từ thiết kế đến triển khai',
        'Phân tích giá trị sử dụng thực tế',
        'Tối ưu hóa hiệu suất phát triển'
      ],
      badge: 'Lean'
    },
    {
      id: 'value-dev',
      icon: 'fa-chart-line',
      title: 'Phát Triển Giá Trị',
      description: 'Tối ưu dòng chảy công việc với các phiên bản lặp lại ngắn (2-4 tuần).',
      features: [
        'Chu trình tạo giá trị linh hoạt',
        'Phiên bản lặp lại ngắn 2-4 tuần',
        'Tập trung vào kết quả đo lường được',
        'Đáp ứng nhu cầu thực tế người dùng'
      ],
      badge: 'Value'
    },
    {
      id: 'demand-dev',
      icon: 'fa-bullseye',
      title: 'Phát Triển Theo Nhu Cầu',
      description: 'Phát triển phần mềm dựa trên nhu cầu thực tế thay vì dự đoán.',
      features: [
        'Hệ thống công việc trực quan',
        'Cân bằng tải hiệu quả',
        'Giảm 40% thời gian hoàn thành',
        'Phát triển dựa trên nhu cầu thực tế'
      ],
      badge: 'Demand'
    },
    {
      id: 'continuous-dev',
      icon: 'fa-sync-alt',
      title: 'Phát Triển Liên Tục',
      description: 'Phân tích liên tục và hồi đáp mở để nâng cao chất lượng code.',
      features: [
        'Cải tiến dựa trên dữ liệu thực tế',
        'Quy trình phát triển linh hoạt',
        'Hồi đáp mở và phân tích liên tục',
        'Giải pháp đáp ứng chính xác nhu cầu'
      ],
      badge: 'Continuous'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-primary relative overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-900"></div>
      
      <div className="container-custom relative z-10">
        {/* Clean Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
            Tại Sao Chọn <span className="text-blue-200">LeanTechCo</span> Làm Đối Tác Công Nghệ?
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Triết lý LEAN trong phát triển phần mềm – Loại bỏ lãng phí, tối ưa hóa giá trị và tăng tốc độ phát triển
          </p>
        </div>

        {/* Simple Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={reason.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6"
            >
              {/* Simple Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                  <i className={`fas ${reason.icon} text-white text-lg`}></i>
                </div>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {reason.badge}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {reason.title}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {reason.description}
              </p>
              
              {/* Simple Feature Points */}
              <div className="space-y-2">
                {reason.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <i className="fas fa-check text-green-600 text-sm mt-1 flex-shrink-0"></i>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;