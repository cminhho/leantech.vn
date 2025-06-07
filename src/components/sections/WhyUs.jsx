import React, { useState, useEffect, useRef } from 'react';

const WhyUs = () => {
  const [activeTab, setActiveTab] = useState('lean-dev');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
      color: 'from-blue-400 to-blue-600',
      badge: 'LEAN'
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
      color: 'from-blue-500 to-blue-700',
      badge: 'VALUE'
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
      color: 'from-blue-600 to-blue-800',
      badge: 'DEMAND'
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
      color: 'from-blue-700 to-primary',
      badge: 'CONTINUOUS'
    }
  ];

  const activeReason = reasons.find(r => r.id === activeTab);

  return (
    <section 
      ref={sectionRef}
      id="why-us" 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundColor: '#002fa6',
        backgroundImage: 'url(https://htmldemo.net/mitech/assets/images/bg/mitech-processing-contact-bg.webp)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right'
      }}
      aria-labelledby="why-us-heading"
    >
      {/* Clean Angular Background Pattern */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Minimal geometric pattern */}
        <div className={`absolute inset-0 transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-4'}`}>
          <div className="absolute inset-0 opacity-5">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='0' y='0' width='1' height='1'/%3E%3C/g%3E%3C/svg%3E")`
              }}
            ></div>
          </div>
        </div>
        
        {/* Clean angular elements */}
        <div className={`absolute top-1/4 left-1/4 w-12 h-12 bg-white/3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}></div>
        <div className={`absolute top-3/4 right-1/4 w-20 h-20 bg-white/2 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}></div>
        <div className={`absolute bottom-1/4 left-1/3 w-8 h-8 bg-white/4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}></div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header - Following Exact System Pattern from Services.jsx and Contact.jsx */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* System Badge - Exact same classes as Services.jsx but with white color for dark background */}
          <div className="mb-6">
            <span className="text-white text-sm font-semibold tracking-wide uppercase">
              TẠI SAO CHỌN CHÚNG TÔI
            </span>
          </div>
          
          {/* Two Column Layout - Following exact Services.jsx and Contact.jsx pattern */}
          <div className="flex flex-wrap sm:flex-nowrap sm:items-baseline gap-8 lg:gap-16">
            {/* Left Side - Title using exact section-title class */}
            <div className="flex-shrink-0">
              <h2 id="why-us-heading" className="section-title text-white">
                Tại Sao Chọn{' '}
                <span className="text-white font-vietnamese">
                  LeanTechCo
                </span>
              </h2>
            </div>
            
            {/* Right Side - Description using exact section-subtitle class */}
            <div className="flex-1">
              <p className="section-subtitle mb-0 text-white/90">
                Chúng tôi chuyên tối ưu hóa quy trình phát triển phần mềm, 
                loại bỏ các bước thừa và tập trung xây dựng những{' '}
                <strong className="font-semibold text-white">giải pháp 
                mang lại hiệu quả thực tế</strong> cho doanh nghiệp của bạn.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content - Clean Angular Design */}
        <div className={`max-w-7xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-4 gap-6">
            
            {/* Clean Angular Tabs */}
            <div className="lg:col-span-1 space-y-3">
              {reasons.map((reason, index) => (
                <button
                  key={reason.id}
                  onClick={() => setActiveTab(reason.id)}
                  className={`w-full p-4 text-left transition-all duration-300 group border ${
                    activeTab === reason.id
                      ? 'bg-white text-gray-900 border-white'
                      : 'text-white/80 hover:text-white hover:bg-white/5 border-white/10 hover:border-white/30'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  aria-pressed={activeTab === reason.id}
                  role="tab"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 border flex items-center justify-center transition-all duration-300 ${
                      activeTab === reason.id 
                        ? 'bg-primary border-primary text-white' 
                        : 'border-white/30 text-white/70 group-hover:border-white/50 group-hover:text-white'
                    }`}>
                      <i className={`fas ${reason.icon} text-xs`}></i>
                    </div>
                    <div className="flex-1">
                      <span className="body-sm font-semibold block leading-tight">
                        {reason.title}
                      </span>
                      <div className={`caption mt-0.5 transition-colors duration-300 ${
                        activeTab === reason.id ? 'text-primary' : 'text-white/50 group-hover:text-white/70'
                      }`}>
                        {reason.badge}
                      </div>
                    </div>
                    <div className={`caption font-bold transition-colors duration-300 ${
                      activeTab === reason.id ? 'text-primary' : 'text-white/50 group-hover:text-white/70'
                    }`}>
                      {reason.metric}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Clean Angular Content Card */}
            <div className="lg:col-span-3 card bg-white border border-gray-200">
              
              {/* Clean Header Section */}
              <div className="border-b border-gray-100 pb-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 bg-gradient-to-r ${activeReason.color} border flex items-center justify-center text-white`}>
                      <i className={`fas ${activeReason.icon} text-lg`}></i>
                    </div>
                    <div>
                      <h3 className="heading-sm text-gray-900 mb-1">
                        {activeReason.title}
                      </h3>
                      <span className="inline-block bg-primary text-white caption font-semibold px-2 py-1">
                        {activeReason.badge}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="display-sm text-primary mb-0">
                      {activeReason.metric}
                    </div>
                    <div className="caption text-gray-500 font-semibold">
                      CẢI THIỆN
                    </div>
                  </div>
                </div>

                {/* Clean Description */}
                <p className="body-md text-gray-700 leading-relaxed">
                  {activeReason.description}
                </p>
              </div>

              {/* Clean Features Section */}
              <div className="space-y-3 mb-8">
                <h4 className="heading-sm text-gray-900 mb-4">
                  Tính năng chính:
                </h4>
                {activeReason.features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 group hover:bg-gray-50 p-2 -mx-2 transition-all duration-200"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-4 h-4 border border-primary flex items-center justify-center mt-0.5 group-hover:bg-primary transition-all duration-200">
                      <i className="fas fa-check text-primary text-xs group-hover:text-white"></i>
                    </div>
                    <span className="body-sm text-gray-700 flex-1 leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Clean CTA Section */}
              <div className="pt-6 border-t border-gray-100">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="btn btn-primary btn-md group flex-1">
                    <span>Tìm hiểu thêm</span>
                    <i className="fas fa-arrow-right text-sm transition-transform duration-300 group-hover:translate-x-1"></i>
                  </button>
                  <button className="btn btn-outline btn-md group">
                    <span>Liên hệ tư vấn</span>
                    <i className="fas fa-phone text-sm"></i>
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