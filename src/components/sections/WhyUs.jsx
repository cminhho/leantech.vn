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
      metric: '2-4'
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
      description: 'Phân tích liên tục và hồi đáp mở để nâng cao chất lượng code.',
      features: [
        'Cải tiến dựa trên dữ liệu thực tế',
        'Quy trình phát triển linh hoạt',
        'Hồi đáp mở và phân tích liên tục',
        'Tích hợp và triển khai tự động',
        'Monitoring và alerting 24/7'
      ],
      metric: '24/7'
    }
  ];

  const activeReason = reasons.find(r => r.id === activeTab);

  return (
    <section 
      id="why-us" 
      className="py-16 relative"
      style={{
        backgroundImage: 'linear-gradient(160deg, #1331d2, #438eff)'
      }}
    >
      <div className="container-custom">
        {/* Simple Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">
            Tại Sao Chọn LeanTechCo?
          </h2>
          <p className="text-white/80">
            Triết lý LEAN trong phát triển phần mềm
          </p>
        </div>

        {/* Simplified Layout */}
        <div className="mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            
            {/* Simple Tabs */}
            <div className="lg:col-span-1">
              <div className="space-y-2">
                {reasons.map((reason) => (
                  <button
                    key={reason.id}
                    onClick={() => setActiveTab(reason.id)}
                    className={`w-full text-left p-3 rounded-full transition-colors ${
                      activeTab === reason.id
                        ? 'bg-white text-gray-900'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activeTab === reason.id
                          ? 'bg-primary text-white'
                          : 'bg-white/20'
                      }`}>
                        <i className={`fas ${reason.icon} text-xs`}></i>
                      </div>
                      <span className="text-sm font-medium truncate">
                        {reason.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Clean Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl p-6">
                
                {/* Simple Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <i className={`fas ${activeReason.icon} text-white text-sm`}></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {activeReason.title}
                      </h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary">
                      {activeReason.metric}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4">
                  {activeReason.description}
                </p>

                {/* Simple Features */}
                <div className="space-y-2">
                  {activeReason.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Simple CTA */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-primary/90 transition-colors">
                    Tìm hiểu thêm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;