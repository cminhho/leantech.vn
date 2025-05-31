import React from 'react';

const CTA = () => {
  return (
    <section 
      className="py-20 relative overflow-hidden bg-primary"
    >
      {/* Angular Design Background Pattern */}
      <div className="absolute inset-0">
        {/* Animated floating rectangles */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-5 animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-16 h-16 bg-white opacity-10"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white opacity-8"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-white opacity-10"></div>
        
        {/* Horizontal lines pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-white"></div>
          <div className="absolute top-20 left-0 w-full h-0.5 bg-white"></div>
          <div className="absolute top-40 left-0 w-full h-0.5 bg-white"></div>
          <div className="absolute top-60 left-0 w-full h-0.5 bg-white"></div>
        </div>
        
        {/* Rectangular grid pattern */}
        <div className="absolute top-1/3 left-1/3 opacity-10">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <rect x="10" y="10" width="40" height="40" stroke="white" strokeWidth="1" fill="none"/>
            <rect x="20" y="20" width="20" height="20" stroke="white" strokeWidth="1" fill="none"/>
          </svg>
        </div>
        <div className="absolute bottom-1/3 right-1/3 opacity-8">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect x="5" y="5" width="30" height="30" stroke="white" strokeWidth="1" fill="none"/>
            <rect x="15" y="15" width="10" height="10" stroke="white" strokeWidth="1" fill="none"/>
          </svg>
        </div>
        
        {/* Straight line pattern */}
        <div className="absolute bottom-0 left-0 w-full opacity-10">
          <svg className="w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <line x1="0" y1="60" x2="1200" y2="60" stroke="white" strokeWidth="2" strokeDasharray="10,10"/>
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-12">
            <h2 className="text-white">
              Sẵn Sàng Bắt Đầu Hành Trình Chuyển Đổi Số?
            </h2>
            <p className="text-white">
              Liên hệ ngay với chúng tôi để được tư vấn miễn phí về giải pháp 
              phù hợp nhất cho doanh nghiệp của bạn.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="btn btn-white btn-lg">
              Nhận tư vấn miễn phí
            </a>
            <a href="#solutions" className="btn btn-glass btn-lg text-white">
              Xem Giải Pháp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 