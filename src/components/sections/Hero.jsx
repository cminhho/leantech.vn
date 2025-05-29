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
    <section id="hero-section" className="pt-16 pb-16 md:pt-24 md:pb-20 flex items-center relative overflow-hidden min-h-[70vh]">
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
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></span>
              Giải pháp công nghệ đáng tin cậy
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Giải pháp chuyển đổi số{' '}
              <span className="text-gradient">toàn diện & tinh gọn</span>{' '}
              cho doanh nghiệp
            </h1>
            
            <p className="text-base text-white/90 leading-relaxed max-w-xl">
              LeanTechCo cung cấp nền tảng công nghệ tối ưu, giúp doanh nghiệp vận hành hiệu quả với chi phí hợp lý. 
              Chúng tôi đồng hành cùng doanh nghiệp trong hành trình tối ưu hóa thực tế.
            </p>

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

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 max-w-lg">
              <div className="text-center glass-card p-3 rounded-xl">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient">450+</div>
                <div className="text-white/70 text-xs sm:text-sm mt-1">Người dùng hàng ngày</div>
              </div>
              <div className="text-center glass-card p-3 rounded-xl">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient">98%</div>
                <div className="text-white/70 text-xs sm:text-sm mt-1">Tỉ lệ hài lòng</div>
              </div>
              <div className="text-center glass-card p-3 rounded-xl">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient">4</div>
                <div className="text-white/70 text-xs sm:text-sm mt-1">Sản phẩm chủ lực</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center relative">
            {/* Simple border for image */}
            <div className="glass-card p-3 rounded-xl relative z-10">              
              <img 
                src={heroImageUrl}
                alt="Giao diện phần mềm quản trị doanh nghiệp LeanTechCo" 
                className="max-w-full h-auto rounded-lg relative z-10"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-white">
          <path d="M0,32L80,53.3C160,75,320,117,480,122.7C640,128,800,96,960,85.3C1120,75,1280,85,1360,90.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 