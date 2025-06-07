import React, { useState, useEffect, useRef } from 'react';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, support: '24/7', rating: '5★' });
  const ctaRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counter for projects
          let count = 0;
          const target = 100;
          const duration = 2000;
          const step = target / (duration / 16);
          
          const timer = setInterval(() => {
            count += step;
            if (count >= target) {
              count = target;
              clearInterval(timer);
            }
            setCounters(prev => ({ ...prev, projects: Math.floor(count) }));
          }, 16);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={ctaRef}
      className="cta-section py-24 relative overflow-hidden bg-gradient-to-br from-primary via-brand-700 to-brand-800"
      role="banner"
      aria-labelledby="cta-heading"
    >
      {/* Professional Background Pattern */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Subtle geometric pattern with parallax effect */}
        <div className={`cta-grid-pattern absolute inset-0 transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-4'}`}>
          <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Enhanced floating elements with staggered animations */}
        <div className={`cta-floating-element absolute top-1/4 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-sm transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}></div>
        <div className={`cta-floating-element absolute top-3/4 right-1/4 w-32 h-32 bg-white/3 rounded-full blur-md transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}></div>
        <div className={`cta-floating-element absolute bottom-1/4 left-1/3 w-20 h-20 bg-white/4 rounded-full blur-sm transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}></div>
        
        {/* Enhanced gradient overlay with depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-primary/5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Content with enhanced hierarchy and animations */}
          <div className="text-center mb-16">
            {/* Animated Badge/Label */}
            <div 
              className={`cta-badge inline-flex items-center px-6 py-3 rounded-full mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}
              role="note"
              aria-label="Call to action indicator"
            >
              <svg className="w-4 h-4 mr-2 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-white/90 badge-text-pro">Bắt đầu ngay hôm nay</span>
            </div>
            
            {/* Enhanced Main Heading with Vietnamese typography */}
            <h2 
              id="cta-heading"
              className={`font-vietnamese hero-title-vietnamese hero-title text-white mb-8 leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{
                fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1',
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale'
              }}
            >
              Sẵn sàng{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent">
                  chuyển đổi số
                </span>
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" aria-hidden="true">
                  <path d="M2 8c50-3 100-3 196 0" stroke="url(#underline-gradient)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.2)"/>
                      <stop offset="50%" stopColor="rgba(255,255,255,0.8)"/>
                      <stop offset="100%" stopColor="rgba(255,255,255,0.2)"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              ?
            </h2>
            
            {/* Enhanced Subheading */}
            <p 
              className={`font-vietnamese body-vietnamese hero-subtitle text-white/90 mb-10 max-w-4xl mx-auto font-light leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                lineHeight: '1.6'
              }}
            >
              Để chúng tôi giúp bạn xây dựng{' '}
              <strong className="font-semibold text-white">giải pháp công nghệ hiện đại</strong>, 
              tối ưu hóa quy trình và{' '}
              <strong className="font-semibold text-white">tăng trưởng bền vững</strong>.
            </p>
            
            {/* Enhanced Stats with real counter animation */}
            <div 
              className={`flex flex-wrap justify-center items-center gap-8 mb-14 text-white/70 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              role="group"
              aria-label="Thành tựu công ty"
            >
              <div className="cta-stats-item text-center group cursor-default">
                <div className="display-sm text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                  {counters.projects}+
                </div>
                <div className="body-sm font-medium">Dự án thành công</div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-2"></div>
              </div>
              
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              
              <div className="cta-stats-item text-center group cursor-default">
                <div className="display-sm text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                  {counters.support}
                </div>
                <div className="body-sm font-medium">Hỗ trợ kỹ thuật</div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-2"></div>
              </div>
              
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              
              <div className="cta-stats-item text-center group cursor-default">
                <div className="display-sm text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                  {counters.rating}
                </div>
                <div className="body-sm font-medium">Đánh giá khách hàng</div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-2"></div>
              </div>
            </div>
          </div>
          
          {/* Enhanced CTA Buttons with advanced interactions */}
          <div 
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            role="group"
            aria-label="Hành động chính"
          >
            <a 
              href="#contact" 
              className="cta-button-primary group relative inline-flex items-center justify-center px-10 py-5 font-semibold rounded-lg focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-300 hover:shadow-xl"
              aria-label="Liên hệ để nhận tư vấn miễn phí"
              role="button"
            >
              <span className="relative z-10 font-vietnamese btn-text-pro">Nhận tư vấn miễn phí</span>
              <svg className="ml-3 w-6 h-6 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a 
              href="#solutions" 
              className="cta-button-secondary group relative inline-flex items-center justify-center px-10 py-5 text-white font-semibold rounded-lg focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-300"
              aria-label="Khám phá các giải pháp của chúng tôi"
              role="button"
            >
              <span className="relative z-10 font-vietnamese btn-text-pro">Khám phá giải pháp</span>
              <svg className="ml-3 w-6 h-6 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 