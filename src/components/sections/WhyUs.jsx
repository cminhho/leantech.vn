import React, { useState } from 'react';

const WhyUs = () => {
  const [activeTab, setActiveTab] = useState('lean-dev');

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
        'Tối ưu hóa thời gian phát triển',
        'Giảm thiểu lãng phí tài nguyên'
      ],
      metric: '53%'
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
        'Phản hồi nhanh từ người dùng',
        'Cải thiện liên tục dựa trên metrics'
      ],
      metric: '2-4 tuần'
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
        'Ưu tiên dựa trên giá trị kinh doanh',
        'Phát triển just-in-time'
      ],
      metric: '40%'
    },
    {
      id: 'continuous-dev',
      icon: 'fa-sync-alt',
      title: 'Phát Triển Liên Tục',
      description: 'Phân tích liên tục và phản hồi mở để nâng cao chất lượng code.',
      features: [
        'Cải tiến dựa trên dữ liệu thực tế',
        'Quy trình phát triển linh hoạt',
        'Phản hồi mở và phân tích liên tục',
        'Tích hợp và triển khai tự động',
        'Monitoring và alerting 24/7'
      ],
      metric: '24/7'
    }
  ];

  const activeReason = reasons.find(r => r.id === activeTab);

  return (
    <section id="why-us" className="py-16 bg-dark-section">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-title-white">Tại Sao Chọn LeanTechCo</h2>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-6">
            
            {/* Tabs */}
            <div className="lg:col-span-1 space-y-2">
              {reasons.map((reason) => (
                <button
                  key={reason.id}
                  onClick={() => setActiveTab(reason.id)}
                  className={`w-full p-4 text-left transition-all ${
                    activeTab === reason.id
                      ? 'bg-white text-gray-900'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <i className={`fas ${reason.icon} ${
                      activeTab === reason.id ? 'text-primary' : 'text-white/60'
                    }`}></i>
                    <span className="font-medium">{reason.title}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="lg:col-span-3 bg-white p-8">
              
              {/* Header with Metric */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center text-white">
                    <i className={`fas ${activeReason.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {activeReason.title}
                  </h3>
                </div>
                <div className="text-2xl font-bold text-primary">
                  {activeReason.metric}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {activeReason.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Tính năng chính:</h4>
                {activeReason.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <button className="btn btn-primary">
                  Tìm hiểu thêm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;