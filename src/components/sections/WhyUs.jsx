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
      metric: '53%',
      image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=400&fit=crop&crop=center'
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
      metric: '2-4 tuần',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=400&fit=crop&crop=center'
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
      metric: '40%',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=400&fit=crop&crop=center'
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
      metric: '24/7',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=400&fit=crop&crop=center'
    }
  ];

  const activeReason = reasons.find(r => r.id === activeTab);

  return (
    <section 
      id="why-us" 
      className="py-16 bg-dark-section"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title-white">
            Tại Sao Chọn LeanTechCo
          </h2>
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
                    className={`w-full text-left p-3 transition-colors ${
                      activeTab === reason.id
                        ? 'bg-white text-gray-900'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 flex items-center justify-center ${
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
              <div className="bg-white p-6">
                
                {/* Main Content Layout - Header and Content on Left, Image on Right */}
                <div className="grid md:grid-cols-3 gap-6">
                  
                  {/* Left Section - Header and Content (2 columns) */}
                  <div className="md:col-span-2 space-y-6">
                    
                    {/* Simple Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary flex items-center justify-center">
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

                    {/* Content */}
                    <div className="space-y-4">
                      {/* Description */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Mô tả</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {activeReason.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Tính năng chính</h4>
                        <div className="space-y-2">
                          {activeReason.features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700 leading-relaxed">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-4">
                        <button className="btn btn-primary btn-sm">
                          Tìm hiểu thêm
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Image (1 column) */}
                  <div className="md:col-span-1 flex items-center justify-center">
                    <div className="w-full">
                      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src={activeReason.image} 
                          alt={activeReason.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to a placeholder if image fails to load
                            e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='16' fill='%236b7280' text-anchor='middle' dy='.3em'%3E${activeReason.title}%3C/text%3E%3C/svg%3E`;
                          }}
                        />
                      </div>
                    </div>
                  </div>
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