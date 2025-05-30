import React, { useEffect, useState, useRef } from 'react';
import Logo from '../common/Logo';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);
  const heroImageUrl = "/assets/images/hero-image-pure.png";
  const videoUrl = "/assets/videos/hero-background.mp4";

  // Preload hero image
  useEffect(() => {
    const img = new Image();
    img.src = heroImageUrl;
  }, [heroImageUrl]);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section id="hero-section" className="pt-16 pb-8 md:pt-24 md:pb-12 flex items-center relative overflow-hidden min-h-[70vh]">
      {/* Video background */}
      <div className="absolute inset-0 z-0 bg-primary">
        <video
          ref={videoRef}
          className="absolute w-full h-full object-cover opacity-80"
          autoPlay
          loop
          muted
          playsInline
          poster={heroImageUrl} // Use hero image as poster while video loads
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-primary/40 z-1"></div>
      </div>
      
      {/* Background noise texture for subtle texture */}
      <div className="absolute inset-0 opacity-5 bg-noise z-1"></div>
      
      {/* Main content */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
          {/* Text Content */}
          <div className="text-white space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></span>
              Đối tác công nghệ & tư vấn chuyên sâu
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-gradient">Đối tác chuyển đổi số toàn diện</span>{' '}
              cho doanh nghiệp Việt Nam
            </h1>
            
            <ul className="space-y-2 text-white/90">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-400 mt-1 mr-2"></i>
                <span>Tư vấn chiến lược & thiết kế giải pháp công nghệ phù hợp</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-400 mt-1 mr-2"></i>
                <span>Sản phẩm phần mềm sẵn có & phát triển tùy chỉnh theo yêu cầu</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-400 mt-1 mr-2"></i>
                <span>Triển khai & đào tạo đội ngũ với phương pháp hiệu quả</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-400 mt-1 mr-2"></i>
                <span>Hỗ trợ vận hành 24/7 & tối ưu hóa liên tục</span>
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="#contact" className="btn btn-primary btn-lg group">
                <span>Tư vấn miễn phí</span>
                <i className="fas fa-chevron-right text-xs"></i>
              </a>
              <a href="#solutions" className="btn btn-glass btn-lg group">
                <span>Xem dịch vụ</span>
                <i className="fas fa-chevron-right text-xs"></i>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center relative">
            {/* Image without glass-card border */}
            <img 
              src={heroImageUrl}
              alt="Giao diện phần mềm quản trị doanh nghiệp LeanTechCo" 
              className="max-w-full h-auto rounded-lg relative z-10"
              loading="eager"
            />
            
            {/* Logo overlay in the center - improved styling */}
            <div className="absolute inset-0 flex items-start justify-center pt-32 z-20">
              <div className="transform hover:scale-105 transition-all duration-300">
                <Logo 
                  size="2xl" 
                  variant="white" 
                  showText={true}
                  className="drop-shadow-2xl filter-none"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.3))',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(255, 255, 255, 0.5)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-white/20 my-6"></div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center p-3">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient">450+</div>
            <div className="text-white/70 text-xs sm:text-sm mt-1">Người dùng</div>
          </div>
          <div className="text-center p-3">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient">98%</div>
            <div className="text-white/70 text-xs sm:text-sm mt-1">Tỉ lệ duy trì</div>
          </div>
          <div className="text-center p-3">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient">40%</div>
            <div className="text-white/70 text-xs sm:text-sm mt-1">Tăng hiệu suất</div>
          </div>
          <div className="text-center p-3">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient">24/7</div>
            <div className="text-white/70 text-xs sm:text-sm mt-1">Hỗ trợ kỹ thuật</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 