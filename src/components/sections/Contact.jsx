import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'default'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Vui lòng nhập họ và tên';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Vui lòng nhập tin nhắn';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      service: 'default'
    });
    
    setIsSubmitting(false);
  };

  return (
    <section 
      ref={contactRef}
      id="contact" 
      className="py-24 bg-semantic-primary relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f8fafc' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Enhanced Section Header - Following established pattern */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Professional badge using exact theming system */}
          <div className="mb-6">
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">
              LIÊN HỆ
            </span>
          </div>
          
          {/* Two Column Layout - Following Services.jsx pattern */}
          <div className="flex flex-wrap sm:flex-nowrap sm:items-baseline gap-8 lg:gap-16">
            {/* Left Side - Title using exact section-title class */}
            <div className="flex-shrink-0">
              <h2 id="contact-heading" className="section-title">
                Liên Hệ Chúng Tôi
              </h2>
            </div>
            
            {/* Right Side - Description using exact section-subtitle class */}
            <div className="flex-1">
              <p className="section-subtitle mb-0">
                Sẵn sàng hỗ trợ bạn mọi lúc. Liên hệ với chúng tôi để được tư vấn miễn phí về 
                các giải pháp công nghệ phù hợp cho doanh nghiệp của bạn.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Enhanced Contact Info */}
            <div className={`lg:col-span-2 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-semantic-tertiary border border-semantic-primary hover:border-semantic-secondary hover:shadow-lg transition-all duration-normal p-8 h-full">
                <h3 className="card-header text-semantic-primary mb-8">Thông Tin Liên Hệ</h3>
                
                <div className="space-y-8">
                  <div className="group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 group-hover:border-primary transition-all duration-normal">
                        <i className="fas fa-map-marker-alt text-primary text-lg group-hover:text-white"></i>
                      </div>
                      <div>
                        <h4 className="body-sm font-semibold text-semantic-primary mb-2">Địa chỉ</h4>
                        <p className="body-sm text-semantic-secondary leading-relaxed">
                          Số 5 Đường số 3, Khu phố 2, Phường An Khánh,<br />
                          Thành phố Thủ Đức, TP. Hồ Chí Minh
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 group-hover:border-primary transition-all duration-normal">
                        <i className="fas fa-phone-alt text-primary text-lg group-hover:text-white"></i>
                      </div>
                      <div>
                        <h4 className="body-sm font-semibold text-semantic-primary mb-2">Điện thoại</h4>
                        <a 
                          href="tel:+84906246489" 
                          className="body-sm text-semantic-secondary hover:text-primary transition-colors duration-normal focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
                        >
                          +84 906 246 489
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 group-hover:border-primary transition-all duration-normal">
                        <i className="fas fa-envelope text-primary text-lg group-hover:text-white"></i>
                      </div>
                      <div>
                        <h4 className="body-sm font-semibold text-semantic-primary mb-2">Email</h4>
                        <a 
                          href="mailto:info@leantech.vn" 
                          className="body-sm text-semantic-secondary hover:text-primary transition-colors duration-normal focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
                        >
                          info@leantech.vn
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 group-hover:border-primary transition-all duration-normal">
                        <i className="fas fa-clock text-primary text-lg group-hover:text-white"></i>
                      </div>
                      <div>
                        <h4 className="body-sm font-semibold text-semantic-primary mb-2">Giờ làm việc</h4>
                        <p className="body-sm text-semantic-secondary leading-relaxed">
                          Thứ Hai - Thứ Sáu: 8:00 - 17:30<br />
                          Thứ Bảy: 8:00 - 12:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Social Links */}
                <div className="mt-10 pt-8 border-t border-semantic-primary">
                  <h4 className="body-sm font-semibold text-semantic-primary mb-4">Kết nối với chúng tôi</h4>
                  <div className="flex space-x-3">
                    <button 
                      type="button" 
                      className="w-10 h-10 bg-semantic-primary border border-semantic-secondary flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white hover:scale-110 transition-all duration-normal focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2" 
                      onClick={() => console.log('Facebook link')}
                      aria-label="Facebook"
                    >
                      <i className="fab fa-facebook-f text-sm"></i>
                    </button>
                    <button 
                      type="button" 
                      className="w-10 h-10 bg-semantic-primary border border-semantic-secondary flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white hover:scale-110 transition-all duration-normal focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2" 
                      onClick={() => console.log('LinkedIn link')}
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin-in text-sm"></i>
                    </button>
                    <button 
                      type="button" 
                      className="w-10 h-10 bg-semantic-primary border border-semantic-secondary flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white hover:scale-110 transition-all duration-normal focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2" 
                      onClick={() => console.log('YouTube link')}
                      aria-label="YouTube"
                    >
                      <i className="fab fa-youtube text-sm"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className={`lg:col-span-3 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-semantic-primary border border-semantic-primary shadow-sm p-8 lg:p-10">
                <h3 className="card-header text-semantic-primary mb-8">Gửi Yêu Cầu Tư Vấn</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="form-label">
                        Họ và tên <span className="text-error-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 bg-white border outline-none ${
                          errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-blue-500'
                        }`}
                        placeholder="Nhập họ và tên"
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && <p id="name-error" className="form-error">{errors.name}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-error-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 bg-white border outline-none ${
                          errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-blue-500'
                        }`}
                        placeholder="your.email@company.com"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && <p id="email-error" className="form-error">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone and Company Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="form-label">
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-blue-500 outline-none"
                        placeholder="+84 xxx xxx xxx"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="company" className="form-label">
                        Công ty
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-blue-500 outline-none"
                        placeholder="Tên công ty"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <label htmlFor="service" className="form-label">
                      Dịch vụ quan tâm
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-blue-500 outline-none"
                    >
                      <option value="default" disabled>Chọn dịch vụ quan tâm</option>
                      <option value="consulting">Tư Vấn & Đào Tạo</option>
                      <option value="development">Phát Triển Phần Mềm</option>
                      <option value="outsourcing">Gia Công Phần Mềm</option>
                      <option value="implementation">Triển Khai & Vận Hành</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="form-label">
                      Tin nhắn <span className="text-error-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className={`w-full px-4 py-3 bg-white border resize-none outline-none ${
                        errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-blue-500'
                      }`}
                      placeholder="Mô tả chi tiết nhu cầu của bạn..."
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    ></textarea>
                    {errors.message && <p id="message-error" className="form-error">{errors.message}</p>}
                  </div>

                  {/* Enhanced Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-primary to-brand-600 text-white font-semibold py-4 px-8 hover:from-primary/90 hover:to-brand-600/90 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:ring-offset-2 transition-all duration-normal flex items-center justify-center gap-3 ${
                        isSubmitting 
                          ? 'opacity-70 cursor-not-allowed' 
                          : 'transform hover:scale-105 hover:shadow-lg active:scale-95'
                      }`}
                      aria-describedby="submit-description"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin text-lg"></i>
                          <span className="body-md font-semibold">Đang gửi...</span>
                        </>
                      ) : (
                        <>
                          <span className="body-md font-semibold">Gửi yêu cầu</span>
                          <i className="fas fa-paper-plane text-lg"></i>
                        </>
                      )}
                    </button>
                    <p id="submit-description" className="sr-only">
                      Nhấn để gửi yêu cầu tư vấn của bạn
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;