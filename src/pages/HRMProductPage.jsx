import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HRMProductPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('features');
  const [activePricing, setActivePricing] = useState('professional');

  useEffect(() => {
    // Simulate loading content
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Đang tải...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Overview */}
      <FeaturesOverview />
      
      {/* Why Choose Section */}
      <WhyChooseSection />
      
      {/* Core Features Tabs */}
      <CoreFeaturesSection activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Ecosystem Section */}
      <EcosystemSection />
      
      {/* Pricing Section */}
      <PricingSection activePricing={activePricing} setActivePricing={setActivePricing} />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Demo & Support */}
      <DemoSupportSection />
      
      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

// Clean Hero Section
const HeroSection = () => (
  <section className="relative bg-semantic-brand overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
    </div>
    
    <div className="container-custom relative z-10 section-padding">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="text-on-primary">
          {/* Main Heading */}
          <h1 className="display-lg mb-6 text-on-primary">
            <span className="text-on-primary">Lean</span>
            <span className="text-secondary"> HRM</span>
          </h1>
          
          <h2 className="display-sm text-semantic-secondary mb-8">
            Bộ Giải pháp Quản trị Nhân sự toàn diện
          </h2>
          
          {/* Feature List */}
          <div className="space-y-4 mb-10">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="body-md font-semibold text-on-primary">Hồ sơ nhân viên:</span>
                <span className="body-md text-semantic-secondary ml-2">Số hóa toàn bộ hồ sơ từ thông tin cá nhân, hợp đồng đến chứng chỉ</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="body-md font-semibold text-on-primary">Chấm công:</span>
                <span className="body-md text-semantic-secondary ml-2">GPS, Face ID, QR Code, Wifi,...</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="body-md font-semibold text-on-primary">Tính lương:</span>
                <span className="body-md text-semantic-secondary ml-2">Theo ngày công, sản phẩm, doanh số, KPI</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="body-md font-semibold text-on-primary">Quản lý thủ tục:</span>
                <span className="body-md text-semantic-secondary ml-2">Quy hoạch, bổ nhiệm, thuyên chuyển...</span>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn btn-success btn-lg">
              Dùng thử miễn phí
            </button>
            <button className="btn btn-secondary btn-lg">
              Nhận tư vấn
            </button>
            <button className="btn btn-warning btn-lg">
              Mua ngay
            </button>
          </div>
        </div>
        
        {/* Right Content - Registration Form */}
        <div className="relative">
          <div className="bg-semantic-primary rounded-2xl p-8 shadow-elevation-3">
            <div className="text-center mb-6">
              <h3 className="heading-lg text-semantic-primary mb-2">
                Đăng ký trải nghiệm ngay
              </h3>
              <p className="body-md text-semantic-secondary">
                Nhận Demo toàn bộ tính năng phần mềm
              </p>
            </div>
            
            <form className="space-y-4">
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
              <div className="grid grid-cols-2 gap-3">
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
              <div className="grid grid-cols-2 gap-3">
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
                className="btn btn-primary btn-lg w-full mt-6"
              >
                Đăng ký nhận tư vấn
              </button>
              
              {/* Privacy Notice */}
              <p className="caption text-semantic-tertiary text-center mt-4">
                Bằng cách nhấn vào nút Đăng ký nhận tư vấn, bạn đã đồng ý với{' '}
                <a href="#" className="link-primary">
                  Chính sách quyền riêng tư của MISA
                </a>
                .
              </p>
            </form>
          </div>
          
          {/* Trust Indicator */}
          <div className="text-center mt-4">
            <div className="inline-flex items-center gap-2 bg-status-success-bg border border-status-success rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-success-500 rounded-full"></div>
              <span className="text-status-success-text font-medium text-sm">
                Đã có 351+ doanh nghiệp đăng ký tư vấn
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Clean Features Overview
const FeaturesOverview = () => {
  const features = [
    { 
      icon: 'fas fa-users', 
      title: 'Quản lý hồ sơ nhân viên', 
      desc: 'Số hóa toàn bộ hồ sơ từ thông tin cá nhân, hợp đồng đến chứng chỉ' 
    },
    { 
      icon: 'fas fa-user-plus', 
      title: 'Tuyển dụng & Onboarding', 
      desc: 'Quản lý ứng viên, lịch phỏng vấn và quy trình nhập việc hoàn chỉnh' 
    },
    { 
      icon: 'fas fa-star', 
      title: 'Đánh giá & KPI', 
      desc: 'Hệ thống đánh giá 360°, thiết lập KPI và theo dõi hiệu suất làm việc' 
    },
    { 
      icon: 'fas fa-clock', 
      title: 'Chấm công đa phương thức', 
      desc: 'Face ID, vân tay, GPS, QR Code - linh hoạt theo từng vị trí làm việc' 
    },
    { 
      icon: 'fas fa-calendar', 
      title: 'Quản lý nghỉ phép', 
      desc: 'Đăng ký nghỉ phép online, workflow phê duyệt và theo dõi số ngày còn lại' 
    },
    { 
      icon: 'fas fa-money-bill', 
      title: 'Tính lương tự động', 
      desc: 'Tính lương, phụ cấp, bảo hiểm và thuế tự động theo quy định pháp luật' 
    },
    { 
      icon: 'fas fa-graduation-cap', 
      title: 'Đào tạo & Phát triển', 
      desc: 'Quản lý khóa học, đánh giá năng lực và lập kế hoạch phát triển cá nhân' 
    },
    { 
      icon: 'fas fa-chart-bar', 
      title: 'Báo cáo & Phân tích', 
      desc: 'Dashboard thông minh với 50+ mẫu báo cáo sẵn có và tùy chỉnh' 
    }
  ];

  return (
    <section className="section-padding bg-semantic-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-badge">
            Chức năng cốt lõi
          </span>
          <h2 className="section-title mb-6">
            8 module chính quản lý toàn bộ vòng đời nhân viên
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Từ tuyển dụng, onboarding, quản lý hàng ngày đến phát triển nghề nghiệp - 
            tất cả trong một hệ thống tích hợp hoàn chỉnh.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card group border-semantic-primary transition-all duration-normal hover:shadow-elevation-2 hover:border-semantic-focus"
            >
              <div className="w-12 h-12 bg-bg-brand-light flex items-center justify-center mb-4 group-hover:bg-bg-brand-light/80 transition-colors">
                <i className={`${feature.icon} icon-lg text-primary`}></i>
              </div>
              
              <h3 className="card-header">
                {feature.title}
              </h3>
              
              <p className="card-body">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Clean Why Choose Section
const WhyChooseSection = () => (
  <section className="section-padding bg-semantic-primary">
    <div className="container-custom">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="section-badge">
            Tại sao chọn chúng tôi
          </span>
          <h2 className="section-title mb-8">
            Giải pháp HR linh hoạt cho mọi doanh nghiệp
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-bg-brand-light flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-1v4.5a1.5 1.5 0 01-3 0V8a1 1 0 011-1z" />
                </svg>
              </div>
              <div>
                <h3 className="heading-md mb-3">Triển khai linh hoạt</h3>
                <ul className="body-md text-semantic-secondary space-y-2">
                  <li>• <strong>Cloud Server:</strong> Triển khai nhanh, bảo trì tự động, truy cập mọi nơi</li>
                  <li>• <strong>In-house Server:</strong> Kiểm soát hoàn toàn dữ liệu, bảo mật tối đa</li>
                  <li>• <strong>Hybrid Solution:</strong> Kết hợp ưu điểm của cả hai phương thức</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-status-warning-bg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-warning-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="heading-md mb-3">Tùy biến không giới hạn</h3>
                <ul className="body-md text-semantic-secondary space-y-2">
                  <li>• <strong>Custom Workflow:</strong> Thiết kế quy trình phù hợp 100% với doanh nghiệp</li>
                  <li>• <strong>Custom Fields:</strong> Tạo trường dữ liệu theo yêu cầu riêng</li>
                  <li>• <strong>White-label Solution:</strong> Giao diện mang thương hiệu riêng của bạn</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-status-success-bg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="heading-md mb-3">Phát triển tính năng theo yêu cầu</h3>
                <ul className="body-md text-semantic-secondary space-y-2">
                  <li>• <strong>Custom Development:</strong> Phát triển tính năng mới theo nhu cầu riêng</li>
                  <li>• <strong>API Integration:</strong> Kết nối với hệ thống hiện tại của doanh nghiệp</li>
                  <li>• <strong>Continuous Enhancement:</strong> Cập nhật và nâng cấp liên tục</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src={`${process.env.PUBLIC_URL}/assets/images/product1.jpeg`}
            alt="HRM Benefits"
            className="w-full h-auto shadow-elevation-3"
          />
        </div>
      </div>
    </div>
  </section>
);

// Clean Core Features Section
const CoreFeaturesSection = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'features', name: 'Tính năng chính', icon: 'fas fa-cogs' },
    { id: 'reports', name: 'Báo cáo & Phân tích', icon: 'fas fa-chart-line' },
    { id: 'automation', name: 'Tự động hóa', icon: 'fas fa-magic' },
    { id: 'integrations', name: 'Tích hợp', icon: 'fas fa-plug' }
  ];

  const tabContent = {
    features: {
      title: "Tính năng quản lý nhân sự toàn diện",
      items: [
        { icon: 'fas fa-id-card', title: 'Hồ sơ điện tử đầy đủ', desc: 'Thông tin cá nhân, học vấn, kinh nghiệm, chứng chỉ' },
        { icon: 'fas fa-sitemap', title: 'Cây tổ chức động', desc: 'Hiển thị cấu trúc tổ chức theo thời gian thực' },
        { icon: 'fas fa-history', title: 'Lịch sử công việc', desc: 'Theo dõi quá trình thăng tiến và thay đổi vị trí' },
        { icon: 'fas fa-folder', title: 'Quản lý tài liệu', desc: 'Lưu trữ và phân loại tài liệu nhân sự an toàn' }
      ]
    },
    reports: {
      title: "Báo cáo và phân tích thông minh",
      items: [
        { icon: 'fas fa-tachometer-alt', title: 'HR Dashboard', desc: 'Bảng điều khiển tổng quan về nhân sự' },
        { icon: 'fas fa-brain', title: 'Advanced Analytics', desc: 'Phân tích xu hướng và dự đoán' },
        { icon: 'fas fa-file-alt', title: 'Custom Reports', desc: 'Tạo báo cáo tùy chỉnh theo nhu cầu' },
        { icon: 'fas fa-download', title: 'Export & Integration', desc: 'Xuất dữ liệu và tích hợp với hệ thống khác' }
      ]
    },
    automation: {
      title: "Tự động hóa quy trình HR",
      items: [
        { icon: 'fas fa-robot', title: 'Smart Candidate Matching', desc: 'Tự động gợi ý ứng viên phù hợp với vị trí' },
        { icon: 'fas fa-calculator', title: 'Tính lương tự động', desc: 'Hệ thống tính lương linh hoạt theo công thức' },
        { icon: 'fas fa-bell', title: 'Notification system', desc: 'Thông báo tự động về trạng thái đơn' },
        { icon: 'fas fa-sync', title: 'Workflow automation', desc: 'Tự động hóa quy trình phê duyệt và xử lý' }
      ]
    },
    integrations: {
      title: "Tích hợp với hệ thống hiện tại",
      items: [
        { icon: 'fab fa-microsoft', title: 'Microsoft Office 365', desc: 'Tích hợp hoàn toàn với Office 365' },
        { icon: 'fab fa-google', title: 'Google Workspace', desc: 'Đồng bộ với Google Workspace' },
        { icon: 'fab fa-slack', title: 'Slack', desc: 'Thông báo và workflow qua Slack' },
        { icon: 'fas fa-database', title: 'ERP Integration', desc: 'Kết nối với các hệ thống ERP' }
      ]
    }
  };

  return (
    <section className="section-padding bg-semantic-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-badge">
            Khám phá chi tiết
          </span>
          <h2 className="section-title mb-4">
            Hệ thống quản lý nhân sự toàn diện
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Từ quản lý hồ sơ, chấm công, tính lương đến phân tích dữ liệu - 
            một nền tảng duy nhất cho mọi hoạt động HR của doanh nghiệp
          </p>
        </div>
        
        {/* Clean Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 font-medium transition-all duration-normal ${
                activeTab === tab.id
                  ? 'bg-primary text-on-primary shadow-elevation-2'
                  : 'bg-semantic-primary text-semantic-secondary hover:text-primary hover:bg-bg-brand-light'
              }`}
            >
              <i className={`${tab.icon} text-sm`}></i>
              {tab.name}
            </button>
          ))}
        </div>
        
        {/* Tab Content */}
        <div className="card p-8 shadow-elevation-2 border-semantic-primary">
          <h3 className="display-sm text-semantic-primary mb-8 text-center">
            {tabContent[activeTab].title}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {tabContent[activeTab].items.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 hover:bg-semantic-secondary transition-colors">
                <div className="w-10 h-10 bg-bg-brand-light flex items-center justify-center flex-shrink-0">
                  <i className={`${item.icon} text-primary`}></i>
                </div>
                <div>
                  <h4 className="heading-sm text-semantic-primary mb-2">{item.title}</h4>
                  <p className="body-sm text-semantic-secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Clean Ecosystem Section  
const EcosystemSection = () => (
  <section className="section-padding bg-semantic-brand text-on-primary">
    <div className="container-custom">
      <div className="text-center mb-16">
        <span className="text-secondary font-semibold text-sm tracking-wide uppercase mb-4 block">
          Hệ sinh thái
        </span>
        <h2 className="section-title-white mb-4">
          Kết nối liền mạch với Lean Ecosystem
        </h2>
        <p className="section-subtitle text-semantic-secondary max-w-3xl mx-auto">
          Tích hợp hoàn hảo với tất cả sản phẩm Lean để tạo ra giải pháp quản lý doanh nghiệp toàn diện
        </p>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Lean ERP */}
        <div className="card bg-semantic-glass backdrop-blur-sm border-semantic-divider hover:bg-semantic-glass transition-colors">
          <div className="w-14 h-14 bg-bg-glass flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-on-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293-2.293a1 1 0 111.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="heading-lg mb-3 text-on-primary">Lean ERP</h3>
          <p className="body-md text-semantic-secondary mb-4">
            Tích hợp hoàn hảo với Lean ERP để đồng bộ dữ liệu nhân viên, quản lý chi phí và workflow.
          </p>
          <ul className="space-y-1 body-sm text-semantic-secondary">
            <li>• Đồng bộ dữ liệu tự động</li>
            <li>• Quản lý cost center</li>
            <li>• Single Sign-On</li>
          </ul>
        </div>
        
        {/* Mobile App */}
        <div className="card bg-semantic-glass backdrop-blur-sm border-semantic-divider hover:bg-semantic-glass transition-colors">
          <div className="w-14 h-14 bg-bg-glass flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-on-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM8 5a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm4 8a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="heading-lg mb-3 text-on-primary">Lean HRM Mobile</h3>
          <p className="body-md text-semantic-secondary mb-4">
            Ứng dụng di động mạnh mẽ cho phép nhân viên và quản lý truy cập mọi lúc, mọi nơi.
          </p>
          <ul className="space-y-1 body-sm text-semantic-secondary">
            <li>• Self-service portal</li>
            <li>• Mobile check-in với GPS</li>
            <li>• Phê duyệt trên điện thoại</li>
          </ul>
        </div>
        
        {/* Automation Assistant */}
        <div className="card bg-semantic-glass backdrop-blur-sm border-semantic-divider hover:bg-semantic-glass transition-colors">
          <div className="w-14 h-14 bg-bg-glass flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-on-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="heading-lg mb-3 text-on-primary">Lean HR Bot</h3>
          <p className="body-md text-semantic-secondary mb-4">
            Trợ lý ảo thông minh hỗ trợ tự động hóa và ra quyết định HR.
          </p>
          <ul className="space-y-1 body-sm text-semantic-secondary">
            <li>• Xử lý ngôn ngữ tự nhiên</li>
            <li>• Gợi ý thông minh</li>
            <li>• Tự động hóa workflow</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// Clean Pricing Section
const PricingSection = ({ activePricing, setActivePricing }) => {
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '299,000',
      subtitle: 'Cho công ty nhỏ 20-50 nhân viên',
      features: [
        'Quản lý hồ sơ nhân viên cơ bản',
        'Chấm công và nghỉ phép',
        'Tính lương cơ bản',
        'Báo cáo cơ bản',
        'Support email',
        '5GB lưu trữ'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '599,000',
      subtitle: 'Cho công ty vừa 50-200 nhân viên',
      features: [
        'Tất cả tính năng Starter',
        'Quản lý tuyển dụng',
        'Đánh giá hiệu suất',
        'Đào tạo và phát triển',
        'Advanced Analytics',
        'Mobile App',
        'API Integration',
        'Support phone & chat',
        '50GB lưu trữ'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '999,000',
      subtitle: 'Cho doanh nghiệp lớn 200+ nhân viên',
      features: [
        'Tất cả tính năng Professional',
        'Automation Assistant',
        'Custom Workflows',
        'White-label Mobile App',
        'Advanced Security',
        'Dedicated Support',
        'Custom Training',
        'Unlimited storage',
        'SLA 99.9%'
      ],
      popular: false
    }
  ];

  return (
    <section className="section-padding bg-semantic-primary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-badge">
            Bảng giá
          </span>
          <h2 className="section-title mb-4">
            Gói dịch vụ phù hợp với mọi quy mô
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Chọn gói dịch vụ phù hợp với nhu cầu và quy mô của doanh nghiệp
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative card p-8 transition-all hover:shadow-elevation-3 ${
                plan.popular 
                  ? 'border-semantic-focus shadow-elevation-2 scale-105' 
                  : 'border-semantic-primary hover:border-semantic-focus'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-on-primary px-6 py-2 text-sm font-semibold">
                    Phổ biến nhất
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="heading-lg text-semantic-primary mb-2">{plan.name}</h3>
                <div className="display-sm text-primary mb-2">
                  {plan.price}<span className="heading-sm text-semantic-secondary"> VNĐ/tháng</span>
                </div>
                <p className="body-sm text-semantic-secondary">{plan.subtitle}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="body-sm text-semantic-secondary">{feature}</span>
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
        
        <div className="text-center mt-12">
          <p className="body-md text-semantic-secondary mb-4">
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

// Clean Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      company: 'ABC Corporation',
      employees: '500 nhân viên',
      quote: 'Lean HRM đã giúp chúng tôi tiết kiệm 70% thời gian xử lý HR và tăng 40% hiệu quả tuyển dụng. ROI sau 6 tháng triển khai là 300%.',
      author: 'Nguyễn Thị Mai',
      position: 'HR Director',
      rating: 5
    },
    {
      company: 'XYZ Manufacturing',
      employees: '800 nhân viên',
      quote: 'Hệ thống chấm công và tính lương tự động của Lean HRM đã giúp chúng tôi loại bỏ hoàn toàn sai sót trong việc tính lương và giảm 60% thời gian xử lý payroll.',
      author: 'Trần Văn Nam',
      position: 'General Manager',
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-semantic-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-badge">
            Khách hàng nói gì
          </span>
          <h2 className="section-title mb-4">
            Được tin dùng bởi 1000+ doanh nghiệp
          </h2>
          <p className="section-subtitle">
            Thành công cùng các doanh nghiệp hàng đầu Việt Nam
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8 shadow-elevation-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-semantic-secondary flex items-center justify-center">
                  <svg className="w-8 h-8 text-semantic-tertiary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="heading-sm text-semantic-primary">{testimonial.author}</h4>
                  <p className="body-sm text-primary font-medium">{testimonial.position}</p>
                  <p className="body-sm text-semantic-secondary">{testimonial.company} - {testimonial.employees}</p>
                </div>
              </div>
              
              <blockquote className="body-lg text-semantic-secondary leading-relaxed italic mb-4">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex text-warning-500">
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

// Clean Demo & Support Section
const DemoSupportSection = () => (
  <section className="section-padding bg-semantic-primary">
    <div className="container-custom">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Demo Section */}
        <div className="bg-bg-brand-light p-8">
          <h3 className="heading-lg text-semantic-primary mb-6">
            🎯 Dùng thử miễn phí
          </h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <span className="body-md text-semantic-secondary">Demo trực tuyến: Trải nghiệm đầy đủ tính năng trong 30 ngày</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              <span className="body-md text-semantic-secondary">Setup miễn phí: Đội ngũ chuyên gia hỗ trợ cài đặt và cấu hình</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              <span className="body-md text-semantic-secondary">Training miễn phí: Đào tạo sử dụng cho admin và end-user</span>
            </div>
          </div>
          
          <button className="btn btn-primary w-full">
            Đăng ký demo miễn phí
          </button>
        </div>
        
        {/* Support Section */}
        <div className="bg-status-success-bg p-8">
          <h3 className="heading-lg text-semantic-primary mb-6">
            💬 Hỗ trợ khách hàng 24/7
          </h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="body-md text-semantic-secondary">Hotline: 1900-123-456</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="body-md text-semantic-secondary">Email: support@leantech.vn</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118C6.004 2.42 4.453 1 2.992 1c-.92 0-1.192.37-1.192 1.114v5.553c0 .744.273 1.114 1.192 1.114zM10 9a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm4.915.75c2.087-.1 3.677.477 3.677-.226V9.097c0-.74-.27-1.108-1.185-1.108L15.46 8l.003.114c.08 1.549.375 2.976.825 4.13.488 1.253 1.247 2.307 2.197 3.167 1.225 1.104 2.796 1.683 4.384 1.683 1.546 0 3.04-.546 4.25-1.544 1.142-.944 1.85-2.322 1.85-3.952 0-3.127-2.486-5.657-5.554-5.657zM15.983 9c.089-1.546.383-2.97.837-4.118C15.958 2.42 14.407 1 12.946 1c-.92 0-1.192.37-1.192 1.114v5.553c0 .744.272 1.114 1.192 1.114h3.037z" clipRule="evenodd" />
              </svg>
              <span className="body-md text-semantic-secondary">www.leantech.vn</span>
            </div>
          </div>
          
          <button className="btn btn-success w-full">
            Liên hệ hỗ trợ
          </button>
        </div>
      </div>
    </div>
  </section>
);

// Clean CTA Section
const CTASection = () => (
  <section className="section-padding bg-semantic-brand">
    <div className="container-custom text-center">
      <h2 className="section-title-white mb-6">
        Sẵn sàng nâng tầm quản lý nhân sự?
      </h2>
      <p className="section-subtitle text-semantic-secondary mb-8 max-w-2xl mx-auto">
        Liên hệ với chúng tôi ngay hôm nay để được tư vấn và demo miễn phí Lean HRM.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <button className="btn btn-secondary">
          Dùng thử miễn phí ngay
        </button>
        <button className="btn btn-outline">
          Gọi tư vấn: 1900-123-456
        </button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center text-semantic-secondary">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span>1900-123-456</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span>sales@leantech.vn</span>
        </div>
        <div className="flex items-center gap-2">
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