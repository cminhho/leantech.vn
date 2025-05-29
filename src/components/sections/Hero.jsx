import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-20 md:pt-32 md:pb-24 bg-primary min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-800 opacity-90"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Giải pháp chuyển đổi số{' '}
              <span className="text-secondary">toàn diện & tinh gọn</span>{' '}
              cho doanh nghiệp
            </h1>
            
            <p className="text-lg text-white/90 leading-relaxed">
              LeanTechCo cung cấp nền tảng công nghệ tối ưu, giúp doanh nghiệp vận hành hiệu quả với chi phí hợp lý. 
              Chúng tôi đồng hành cùng doanh nghiệp trong hành trình tối ưu hóa thực tế - đơn giản và mang lại kết quả đo lường được.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn btn-primary">
                Liên hệ tư vấn <i className="fas fa-chevron-right text-xs ml-1"></i>
              </a>
              <a href="#solutions" className="btn btn-outline">
                Xem giải pháp <i className="fas fa-chevron-right text-xs ml-1"></i>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 max-w-lg">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary">450+</div>
                <div className="text-white/70 text-sm sm:text-base">Người dùng hàng ngày</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary">98%</div>
                <div className="text-white/70 text-sm sm:text-base">Tỉ lệ hài lòng</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary">4</div>
                <div className="text-white/70 text-sm sm:text-base">Sản phẩm chủ lực</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center">
            <img 
              src="https://www.automq.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/67480fef30f9df5f84f31d36/67eb556b6430868c6d6a798c_automq-home-page.png" 
              alt="Giao diện phần mềm quản trị doanh nghiệp LeanTechCo" 
              className="max-w-full h-auto rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-white">
          <path d="M0,32L80,53.3C160,75,320,117,480,122.7C640,128,800,96,960,85.3C1120,75,1280,85,1360,90.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 