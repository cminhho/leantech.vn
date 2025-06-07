import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const videoRef = useRef(null);
  const heroImageUrl = `${process.env.PUBLIC_URL}/assets/images/hero-image-pure.png`;
  const videoUrl = `${process.env.PUBLIC_URL}/assets/videos/hero-background.mp4`;

  // Preload hero image
  useEffect(() => {
    const img = new Image();
    img.src = heroImageUrl;
  }, [heroImageUrl]);

  return (
    <section id="hero-section" className="relative overflow-hidden min-h-[70vh] flex items-center section-padding">
      {/* Video background with overlay */}
      <div className="absolute inset-0 z-0 bg-primary">
        <video
          ref={videoRef}
          className="absolute w-full h-full object-cover opacity-80"
          autoPlay
          loop
          muted
          playsInline
          poster={heroImageUrl}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        
        {/* Primary overlay for better text readability */}
        <div className="absolute inset-0 bg-primary/40 z-1"></div>
      </div>
      
      {/* Background noise texture for subtle texture */}
      <div className="absolute inset-0 opacity-5 bg-noise z-1"></div>
      
      {/* Main content */}
      <div className="container-custom relative z-10 p-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-8">
            {/* Status Badge - Professional typography */}
            <div className="inline-flex items-center px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90" style={{borderRadius: 0}}>
              <span className="w-2 h-2 bg-success-400 mr-3" style={{borderRadius: 0}}></span>
              <span className="badge-text-pro">Đối tác công nghệ & tư vấn chuyên sâu</span>
            </div>
            
            {/* Hero Title - Professional Vietnamese typography */}
            <div className="space-y-2">
              <h1 className="leading-none">
                <span className="block hero-title-pro">
                  Đối tác chuyển đổi số toàn diện
                </span>
                <span className="block hero-subtitle-pro mt-3">
                  cho doanh nghiệp
                </span>
              </h1>
            </div>
            
            {/* Feature List - Professional Vietnamese typography */}
            <ul className="space-y-5 mt-10">
              <li className="flex items-start">
                <i className="fas fa-check text-success-400 mt-1.5 mr-4 icon-md flex-shrink-0"></i>
                <span className="feature-text-pro">
                  Tư vấn chiến lược & thiết kế giải pháp công nghệ phù hợp
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-success-400 mt-1.5 mr-4 icon-md flex-shrink-0"></i>
                <span className="feature-text-pro">
                  Sản phẩm phần mềm sẵn có & phát triển tùy chỉnh theo yêu cầu
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-success-400 mt-1.5 mr-4 icon-md flex-shrink-0"></i>
                <span className="feature-text-pro">
                  Triển khai & đào tạo đội ngũ với phương pháp hiệu quả
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-success-400 mt-1.5 mr-4 icon-md flex-shrink-0"></i>
                <span className="feature-text-pro">
                  Hỗ trợ vận hành 24/7 & tối ưu hóa liên tục
                </span>
              </li>
            </ul>

            {/* Action Buttons - Professional typography */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a href="#contact" className="btn btn-primary btn-lg group">
                <span className="btn-text-pro">Tư vấn miễn phí</span>
                <i className="fas fa-chevron-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </a>
              <a href="#solutions" className="btn btn-glass btn-lg group">
                <span className="btn-text-pro">Xem dịch vụ</span>
                <i className="fas fa-chevron-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>

          {/* Hero Image with enhanced visual effects */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img 
                src={heroImageUrl}
                alt="Giao diện phần mềm quản trị doanh nghiệp LeanTechCo" 
                className="max-w-full h-auto w-full max-w-lg drop-shadow-2xl"
                loading="eager"
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{borderRadius: 0}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 