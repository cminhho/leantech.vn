import React from 'react';

const CTA = () => {
  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(90deg, #122796, #3c73ff)'
      }}
    >
      {/* New Decorative Background Pattern */}
      <div className="absolute inset-0">
        {/* Animated floating shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-16 h-16 bg-white opacity-10 transform rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white opacity-8 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-white opacity-15 transform rotate-12"></div>
        
        {/* Diagonal lines pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-white transform -rotate-12 origin-left"></div>
          <div className="absolute top-20 left-0 w-full h-0.5 bg-white transform -rotate-12 origin-left"></div>
          <div className="absolute top-40 left-0 w-full h-0.5 bg-white transform -rotate-12 origin-left"></div>
          <div className="absolute top-60 left-0 w-full h-0.5 bg-white transform -rotate-12 origin-left"></div>
        </div>
        
        {/* Hexagonal pattern */}
        <div className="absolute top-1/3 left-1/3 opacity-10">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <polygon points="30,5 50,17.5 50,42.5 30,55 10,42.5 10,17.5" stroke="white" strokeWidth="1" fill="none"/>
          </svg>
        </div>
        <div className="absolute bottom-1/3 right-1/3 opacity-8">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <polygon points="20,3 33,10 33,30 20,37 7,30 7,10" stroke="white" strokeWidth="1" fill="none"/>
          </svg>
        </div>
        
        {/* Dotted wave pattern */}
        <div className="absolute bottom-0 left-0 w-full opacity-10">
          <svg className="w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 Q300,20 600,60 T1200,60" stroke="white" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-4xl font-bold text-white mb-6">
            Sẵn Sàng Tối Ưu Hóa Doanh Nghiệp Của Bạn?
          </h2>
          
          {/* Description */}
          <p className="text-lg text-blue-100 leading-relaxed mb-10">
            Hãy để đội ngũ chuyên gia của chúng tôi cùng bạn tạo ra giá trị thực tế cho doanh nghiệp trong hành trình tối ưu hóa.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="btn bg-white text-primary border-white text-sm hover:shadow-lg hover:-translate-y-1">
              Nhận tư vấn miễn phí
            </a>
            <a href="#solutions" className="btn bg-white/10 text-white border border-white/30 text-sm hover:bg-white/20 hover:-translate-y-1 backdrop-blur-sm">
              Xem Giải Pháp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 