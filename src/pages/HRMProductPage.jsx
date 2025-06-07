import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HRMProductPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activePricing, setActivePricing] = useState('professional');

  useEffect(() => {
    // Simulate loading content
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-secondary">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent animate-spin mx-auto mb-4"></div>
          <p className="text-text-secondary">Đang tải...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-primary">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Overview */}
      <FeaturesOverview />
      
      {/* Why Choose Section */}
      <WhyChooseSection />
      
      {/* Pricing Section */}
      <PricingSection activePricing={activePricing} setActivePricing={setActivePricing} />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

// Improved Hero Section with proper color system
const HeroSection = () => (
  <section className="relative bg-primary overflow-hidden">
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://htmldemo.net/mitech/assets/images/hero/home-appointment-hero-bg-image.webp')`
      }}
    ></div>
    
    {/* Dark Overlay for better text contrast */}
    <div className="absolute inset-0 bg-primary/80"></div>
    
    {/* Additional subtle pattern overlay (optional) */}
    <div className="absolute inset-0 opacity-10">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
    </div>
    
    <div className="container-custom relative z-10 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-8">
        {/* Left Content */}
        <div className="text-text-on-primary space-y-8">
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="display-lg text-text-on-primary">
              <span className="text-text-on-primary">lean</span>
              <span className="text-secondary"> HRM</span>
            </h1>
            
            <h2 className="display-sm text-text-on-primary/90">
              Giải pháp Quản lý Nhân sự Toàn diện
            </h2>
            
            <p className="heading-md text-text-on-primary/80 font-normal">
              Nền tảng số hóa hiện đại cho doanh nghiệp Việt Nam
            </p>
          </div>
          
          {/* Feature List */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-secondary mt-3 flex-shrink-0"></div>
              <div>
                <span className="body-md font-semibold text-text-on-primary">Quản lý Toàn diện:</span>
                <span className="body-md text-text-on-primary/80 ml-2">Từ tuyển dụng, hồ sơ, chấm công, tính lương đến đánh giá & phát triển nhân viên</span>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-secondary mt-3 flex-shrink-0"></div>
              <div>
                <span className="body-md font-semibold text-text-on-primary">Nền tảng Số hóa:</span>
                <span className="body-md text-text-on-primary/80 ml-2">Cloud-based hoặc In-house, Mobile App iOS/Android</span>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-secondary mt-3 flex-shrink-0"></div>
              <div>
                <span className="body-md font-semibold text-text-on-primary">Tùy biến Linh hoạt:</span>
                <span className="body-md text-text-on-primary/80 ml-2">Thiết kế phù hợp đặc thù doanh nghiệp Việt Nam, tùy chỉnh theo nhu cầu riêng</span>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn btn-primary btn-lg">
              Dùng thử miễn phí
            </button>
            <button className="btn btn-secondary btn-lg">
              Nhận tư vấn
            </button>
          </div>
        </div>
        
        {/* Right Content - Registration Form */}
        <div className="relative">
          <div className="bg-background-primary p-8 lg:p-10 shadow-elevation-3">
            <div className="text-center mb-8">
              <h3 className="heading-lg text-text-primary mb-3">
                Đăng ký trải nghiệm ngay
              </h3>
              <p className="body-md text-text-secondary">
                Nhận Demo toàn bộ tính năng phần mềm
              </p>
            </div>
            
            <form className="space-y-6">
              {/* Họ và tên */}
              <div>
                <label className="form-label">
                  Họ và tên <span className="text-error-500">*</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Nhập họ và tên"
                />
              </div>
              
              {/* Email và Số điện thoại */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">
                    Email <span className="text-error-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="email@company.com"
                  />
                </div>
                <div>
                  <label className="form-label">
                    Số điện thoại <span className="text-error-500">*</span>
                  </label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="0123456789"
                  />
                </div>
              </div>
              
              {/* Chức vụ và Quy mô */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">
                    Chức vụ/Vai trò <span className="text-error-500">*</span>
                  </label>
                  <select className="form-input">
                    <option value="">Chọn chức vụ</option>
                    <option value="ceo">CEO/Giám đốc</option>
                    <option value="hr">HR Manager</option>
                    <option value="admin">Admin/IT</option>
                    <option value="other">Khác</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">
                    Quy mô nhân sự <span className="text-error-500">*</span>
                  </label>
                  <select className="form-input">
                    <option value="">Chọn quy mô</option>
                    <option value="1-50">1-50 người</option>
                    <option value="51-200">51-200 người</option>
                    <option value="201-500">201-500 người</option>
                    <option value="500+">500+ người</option>
                  </select>
                </div>
              </div>
              
              {/* Tên doanh nghiệp */}
              <div>
                <label className="form-label">
                  Tên doanh nghiệp/Mã số thuế <span className="text-error-500">*</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Tên công ty hoặc MST"
                />
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary btn-lg w-full mt-8"
              >
                Đăng ký nhận tư vấn
              </button>
              
            </form>
          </div>
          
        </div>
      </div>
    </div>
  </section>
);

// Improved Features Overview with proper colors
const FeaturesOverview = () => {
  const features = [
    { 
      icon: 'fas fa-user-plus', 
      title: 'Quản lý Tuyển dụng', 
      desc: 'Tối ưu quy trình tuyển dụng từ đăng tuyển, sàng lọc ứng viên đến onboarding nhân viên mới' 
    },
    { 
      icon: 'fas fa-users', 
      title: 'Quản lý Hồ sơ Nhân sự', 
      desc: 'Lưu trữ và quản lý thông tin nhân viên một cách hệ thống, bảo mật với quyền truy cập phân cấp' 
    },
    { 
      icon: 'fas fa-clock', 
      title: 'Quản lý Chấm công', 
      desc: 'Đa dạng phương thức chấm công, tích hợp với hệ thống kiểm soát ra vào hiện đại' 
    },
    { 
      icon: 'fas fa-money-bill', 
      title: 'Quản lý Tính lương', 
      desc: 'Tự động hóa quy trình tính lương, đảm bảo chính xác và minh bạch với báo cáo chi tiết' 
    },
    { 
      icon: 'fas fa-star', 
      title: 'Quản lý Đánh giá', 
      desc: 'Thiết lập KPI, đánh giá hiệu suất nhân viên dựa trên mục tiêu và kết quả làm việc' 
    },
    { 
      icon: 'fas fa-graduation-cap', 
      title: 'Đào tạo & Phát triển', 
      desc: 'Xây dựng lộ trình phát triển năng lực, quản lý khóa học và đánh giá hiệu quả đào tạo' 
    },
    { 
      icon: 'fas fa-chart-bar', 
      title: 'Báo cáo & Phân tích', 
      desc: 'Dashboard thông minh với báo cáo toàn diện và phân tích dữ liệu nhân sự chuyên sâu' 
    },
    { 
      icon: 'fas fa-mobile-alt', 
      title: 'Ứng dụng Mobile', 
      desc: 'App di động iOS/Android giúp nhân viên và quản lý truy cập mọi lúc, mọi nơi' 
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-background-primary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-2 bg-background-brand-light text-primary text-sm font-semibold uppercase tracking-wide rounded-full mb-6">
            Giải pháp toàn diện
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-text-primary mb-6">
            8 module chính quản lý toàn bộ vòng đời nhân viên
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto text-text-secondary">
            Cung cấp đầy đủ các module quản lý nhân sự từ A-Z, giúp doanh nghiệp quản lý toàn bộ 
            vòng đời nhân viên trên một nền tảng số hóa hiện đại.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card group border-border-primary transition-all duration-normal hover:shadow-elevation-2 hover:border-border-focus p-6"
            >
              <div className="w-12 h-12 bg-background-brand-light flex items-center justify-center mb-6 group-hover:bg-background-brand-light/80 transition-colors">
                <i className={`${feature.icon} icon-lg text-primary`}></i>
              </div>
              
              <h3 className="card-header text-text-primary mb-4">
                {feature.title}
              </h3>
              
              <p className="card-body text-text-secondary">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Improved Why Choose Section with modern layout
const WhyChooseSection = () => {
  const advantages = [
    {
      number: "01",
      title: "Giải pháp Toàn diện",
      description: "Quản lý toàn bộ vòng đời nhân viên trên một nền tảng duy nhất",
      features: [
        "Tuyển dụng từ đăng tuyển đến onboarding",
        "Hồ sơ, chấm công, tính lương tích hợp",
        "Đào tạo và phát triển năng lực",
        "Báo cáo và phân tích thông minh"
      ]
    },
    {
      number: "02",
      title: "Nền tảng Số hóa",
      description: "Công nghệ hiện đại với khả năng triển khai linh hoạt",
      features: [
        "Cloud-based hoặc In-house deployment",
        "Mobile App iOS/Android native",
        "Tích hợp API với hệ thống hiện tại",
        "Bảo mật cao cấp và sao lưu tự động"
      ]
    },
    {
      number: "03",
      title: "Tùy biến Linh hoạt",
      description: "Thiết kế phù hợp đặc thù doanh nghiệp Việt Nam",
      features: [
        "Custom workflow theo quy trình riêng",
        "Biểu mẫu và báo cáo tùy chỉnh",
        "Mở rộng module theo nhu cầu",
        "Đào tạo và hỗ trợ chuyên sâu"
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-background-secondary overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20 lg:mb-24">
          <span className="inline-block px-4 py-2 bg-background-brand-light text-primary text-sm font-semibold uppercase tracking-wide rounded-full mb-6">
            Tại sao chọn Lean HRM
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-text-primary mb-6">
            Ưu thế cạnh tranh vượt trội
          </h2>
          <p className="section-subtitle text-text-secondary max-w-2xl mx-auto">
            Giải pháp HR toàn diện với công nghệ tiên tiến và khả năng tùy biến cao cho doanh nghiệp
          </p>
        </div>
        
        {/* Advantages Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Background Card */}
              <div className="relative bg-background-primary p-8 lg:p-10 h-full border border-border-primary group-hover:border-border-focus transition-all duration-300 group-hover:shadow-elevation-3 group-hover:-translate-y-2">
                
                {/* Number Badge */}
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 bg-primary text-text-on-primary flex items-center justify-center text-sm font-bold">
                    {advantage.number}
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-6 pt-8">
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors">
                      {advantage.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    {advantage.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary mt-2.5 flex-shrink-0 group-hover:bg-secondary transition-colors"></div>
                        <span className="text-sm text-text-secondary leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

// Improved Pricing Section with proper color scheme
const PricingSection = ({ activePricing, setActivePricing }) => {
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '999,000',
      subtitle: 'Cho công ty nhỏ 20-50 nhân viên',
      features: [
        'Quản lý hồ sơ nhân viên cơ bản',
        'Chấm công đa phương thức (GPS, QR)',
        'Tính lương tự động với báo cáo',
        'Dashboard báo cáo cơ bản',
        'Mobile App iOS/Android',
        'Support email',
        '5GB lưu trữ'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '2,999,000',
      subtitle: 'Cho công ty vừa 50-200 nhân viên',
      features: [
        'Tất cả tính năng Starter',
        'Module tuyển dụng đầy đủ',
        'Quản lý đánh giá & KPI',
        'Đào tạo và phát triển nhân sự',
        'Dashboard phân tích thông minh',
        'Tùy biến quy trình workflow',
        'API tích hợp hệ thống',
        'Support phone & chat',
        '50GB lưu trữ'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '5,999,000',
      subtitle: 'Cho doanh nghiệp lớn 200+ nhân viên',
      features: [
        'Tất cả tính năng Professional',
        'Tùy biến không giới hạn',
        'Triển khai In-house/Hybrid',
        'White-label Mobile App',
        'Advanced Security & Compliance',
        'Dedicated Support Manager',
        'Custom Training & Setup',
        'Unlimited storage',
        'SLA 99.9% uptime'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-background-brand-light">
      <div className="container-custom">
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-2 bg-background-brand-light text-primary text-sm font-semibold uppercase tracking-wide rounded-full mb-6">
            Gói dịch vụ
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-text-primary mb-6">
            Giải pháp phù hợp cho doanh nghiệp Việt Nam
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto text-text-secondary">
            Các gói dịch vụ được thiết kế riêng cho thị trường Việt Nam với khả năng 
            tùy biến linh hoạt theo đặc thù từng doanh nghiệp.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative card p-8 lg:p-10 transition-all hover:shadow-elevation-3 ${
                plan.popular 
                  ? 'border-border-focus shadow-elevation-2 scale-105' 
                  : 'border-border-primary hover:border-border-focus'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-text-on-primary px-6 py-2 text-sm font-semibold">
                    Phổ biến nhất
                  </span>
                </div>
              )}
              
              <div className="text-center mb-10">
                <h3 className="heading-lg text-text-primary mb-3">{plan.name}</h3>
                <div className="display-sm text-primary mb-3">
                  {plan.price}<span className="heading-sm text-text-secondary"> VNĐ/tháng</span>
                </div>
                <p className="body-sm text-text-secondary">{plan.subtitle}</p>
              </div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="body-sm text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`btn w-full transition-colors ${
                  plan.popular
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                Chọn gói {plan.name}
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="body-md text-text-secondary mb-6">
            Cần tư vấn gói dịch vụ phù hợp? 
          </p>
          <button className="link-primary font-semibold">
            Liên hệ với chuyên gia tư vấn →
          </button>
        </div>
      </div>
    </section>
  );
};

// Improved Testimonials Section with proper color scheme
const TestimonialsSection = () => {
  const testimonials = [
    {
      company: 'ABC Corporation',
      employees: '500 nhân viên',
      quote: 'Lean HRM giúp chúng tôi số hóa toàn bộ quy trình HR trên một nền tảng duy nhất. Tính năng tùy biến linh hoạt và dashboard thông minh giúp chúng tôi quản lý nhân sự hiệu quả hơn rất nhiều.',
      author: 'Nguyễn Thị Mai',
      position: 'HR Director',
      rating: 5
    },
    {
      company: 'XYZ Manufacturing',
      employees: '800 nhân viên',
      quote: 'Khả năng tùy biến linh hoạt theo đặc thù sản xuất và tích hợp với hệ thống ERP hiện tại là điểm mạnh lớn nhất của Lean HRM. ROI chỉ sau 4 tháng triển khai.',
      author: 'Trần Văn Nam',
      position: 'General Manager',
      rating: 5
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-background-primary">
      <div className="container-custom">
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-2 bg-background-brand-light text-primary text-sm font-semibold uppercase tracking-wide rounded-full mb-6">
            Khách hàng tin dùng
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-text-primary mb-6">
            Được tin dùng bởi doanh nghiệp Việt Nam
          </h2>
          <p className="section-subtitle text-text-secondary">
            Giải pháp HR toàn diện với khả năng tùy biến cao theo đặc thù doanh nghiệp
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8 lg:p-10 shadow-elevation-2">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-background-secondary flex items-center justify-center">
                  <svg className="w-8 h-8 text-text-tertiary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h4 className="heading-sm text-text-primary">{testimonial.author}</h4>
                  <p className="body-sm text-primary font-medium">{testimonial.position}</p>
                  <p className="body-sm text-text-secondary">{testimonial.company} - {testimonial.employees}</p>
                </div>
              </div>
              
              <blockquote className="body-lg text-text-secondary leading-relaxed italic mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex text-primary">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Clean CTA Section
const CTASection = () => (
  <section className="py-16 lg:py-20 bg-background-brand">
    <div className="container-custom text-center">
      <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-text-on-primary mb-8">
        Sẵn sàng số hóa quản lý nhân sự doanh nghiệp?
      </h2>
      <p className="section-subtitle text-text-on-primary/80 mb-12 max-w-2xl mx-auto">
        Trải nghiệm giải pháp HR toàn diện với công nghệ hiện đại và khả năng 
        tùy biến linh hoạt theo đặc thù doanh nghiệp của bạn.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
        <button className="btn btn-secondary">
          Dùng thử miễn phí 30 ngày
        </button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-8 justify-center text-text-on-primary/70">
        <div className="flex items-center gap-3">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span>1900-123-456</span>
        </div>
        <div className="flex items-center gap-3">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span>sales@leantech.vn</span>
        </div>
        <div className="flex items-center gap-3">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118C6.004 2.42 4.453 1 2.992 1c-.92 0-1.192.37-1.192 1.114v5.553c0 .744.273 1.114 1.192 1.114zM10 9a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm4.915.75c2.087-.1 3.677.477 3.677-.226V9.097c0-.74-.27-1.108-1.185-1.108L15.46 8l.003.114c.08 1.549.375 2.976.825 4.13.488 1.253 1.247 2.307 2.197 3.167 1.225 1.104 2.796 1.683 4.384 1.683 1.546 0 3.04-.546 4.25-1.544 1.142-.944 1.85-2.322 1.85-3.952 0-3.127-2.486-5.657-5.554-5.657zM15.983 9c.089-1.546.383-2.97.837-4.118C15.958 2.42 14.407 1 12.946 1c-.92 0-1.192.37-1.192 1.114v5.553c0 .744.272 1.114 1.192 1.114h3.037z" clipRule="evenodd" />
          </svg>
          <span>www.leantech.vn</span>
        </div>
      </div>
    </div>
  </section>
);

export default HRMProductPage; 