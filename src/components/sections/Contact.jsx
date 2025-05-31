import React, { useState } from 'react';

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
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12">
          {/* Contact Label */}
          <div className="mb-4">
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">
              LIÊN HỆ
            </span>
          </div>
          
          {/* Two Column Layout */}
          <div className="flex flex-wrap sm:flex-nowrap sm:items-baseline gap-6 lg:gap-12">
            {/* Left Side - Title */}
            <div className="flex-shrink-0">
              <h2 className="section-title">
                Liên Hệ Chúng Tôi
              </h2>
            </div>
            
            {/* Right Side - Description */}
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
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-8">Thông Tin Liên Hệ</h3>
                
                <div className="space-y-6">
                  <div className="group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <i className="fas fa-map-marker-alt text-primary text-lg group-hover:text-white"></i>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Địa chỉ</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Số 5 Đường số 3, Khu phố 2, Phường An Khánh,<br />
                          Thành phố Thủ Đức, TP. Hồ Chí Minh
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <i className="fas fa-phone-alt text-primary text-lg group-hover:text-white"></i>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Điện thoại</h4>
                        <a href="tel:+84906246489" className="text-gray-600 text-sm hover:text-primary transition-colors">
                          +84 906 246 489
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <i className="fas fa-envelope text-primary text-lg group-hover:text-white"></i>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Email</h4>
                        <a href="mailto:info@leantech.vn" className="text-gray-600 text-sm hover:text-primary transition-colors">
                          info@leantech.vn
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <i className="fas fa-clock text-primary text-lg group-hover:text-white"></i>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Giờ làm việc</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Thứ Hai - Thứ Sáu: 8:00 - 17:30<br />
                          Thứ Bảy: 8:00 - 12:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Kết nối với chúng tôi</h4>
                  <div className="flex space-x-3">
                    <button type="button" className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300" onClick={() => console.log('Facebook link')}>
                      <i className="fab fa-facebook-f text-sm"></i>
                    </button>
                    <button type="button" className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300" onClick={() => console.log('LinkedIn link')}>
                      <i className="fab fa-linkedin-in text-sm"></i>
                    </button>
                    <button type="button" className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300" onClick={() => console.log('YouTube link')}>
                      <i className="fab fa-youtube text-sm"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-gray-200 p-8 lg:p-10 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Gửi Yêu Cầu Tư Vấn</h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Họ và tên <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                          errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="Nhập họ và tên"
                      />
                      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                          errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="your.email@company.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone and Company Row */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 hover:border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="+84 xxx xxx xxx"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                        Công ty
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 hover:border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="Tên công ty"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                      Dịch vụ quan tâm
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 hover:border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Tin nhắn <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className={`w-full px-4 py-3 border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none ${
                        errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Mô tả chi tiết nhu cầu của bạn..."
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-primary to-blue-600 text-white font-semibold py-3 px-6 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'transform hover:scale-105'}`}
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin"></i>
                          Đang gửi...
                        </>
                      ) : (
                        <>
                          Gửi Yêu Cầu
                          <i className="fas fa-paper-plane"></i>
                        </>
                      )}
                    </button>
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