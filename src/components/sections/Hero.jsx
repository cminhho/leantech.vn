import React, { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);
  const heroImageUrl = "/assets/images/hero-image.png";
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
              Công nghệ tinh gọn, hiệu quả cao
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Giải pháp chuyển đổi số{' '}
              <span className="text-gradient">toàn diện & tinh gọn</span>{' '}
              cho doanh nghiệp
            </h1>
            
            <ul className="space-y-2 text-white/90">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-400 mt-1 mr-2"></i>
                <span>Nền tảng công nghệ tối ưu giúp vận hành hiệu quả với chi phí hợp lý</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-400 mt-1 mr-2"></i>
                <span>Tăng năng suất làm việc và tự động hóa quy trình kinh doanh</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-400 mt-1 mr-2"></i>
                <span>Hỗ trợ kỹ thuật 24/7 và cập nhật liên tục</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-400 mt-1 mr-2"></i>
                <span>Đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số</span>
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="#contact" className="btn btn-primary text-sm group flex items-center justify-center">
                <span>Liên hệ tư vấn</span>
                <i className="fas fa-chevron-right text-xs ml-2"></i>
              </a>
              <a href="#solutions" className="btn btn-outline text-sm group flex items-center justify-center backdrop-blur-sm">
                <span>Xem giải pháp</span>
                <i className="fas fa-chevron-right text-xs ml-2"></i>
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