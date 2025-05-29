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
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Hãy để đội ngũ chuyên gia của chúng tôi cùng bạn tạo ra giá trị thực tế cho doanh nghiệp trong hành trình tối ưu hóa.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-3xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-10 text-gray-900">Thông Tin Liên Hệ</h3>
                
                <div className="space-y-8">
                  <div className="group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <i className="fas fa-map-marker-alt text-primary group-hover:text-white text-xl"></i>
                      </div>
                      <div className="">
                        <h4 className="font-semibold text-gray-900 mb-3">Địa chỉ</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Số 5 Đường số 3, Khu phố 2, Phường An Khánh,<br />
                          Thành phố Thủ Đức, TP. Hồ Chí Minh
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <i className="fas fa-phone-alt text-primary group-hover:text-white text-xl"></i>
                      </div>
                      <div className="">
                        <h4 className="font-semibold text-gray-900 mb-3">Điện thoại</h4>
                        <a href="tel:+84906246489" className="text-primary hover:text-primary/80 transition-colors font-semibold text-lg">
                          +84 906 246 489
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <i className="fas fa-envelope text-primary group-hover:text-white text-xl"></i>
                      </div>
                      <div className="">
                        <h4 className="font-semibold text-gray-900 mb-3">Email</h4>
                        <a href="mailto:info@leantech.vn" className="text-primary hover:text-primary/80 transition-colors font-semibold text-lg">
                          info@leantech.vn
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <i className="fas fa-clock text-primary group-hover:text-white text-xl"></i>
                      </div>
                      <div className="">
                        <h4 className="font-semibold text-gray-900 mb-3">Giờ làm việc</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Thứ Hai - Thứ Sáu: 8:00 - 17:30<br />
                          Thứ Bảy: 8:00 - 12:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-6">Kết nối với chúng tôi</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-sm border border-gray-200">
                      <i className="fab fa-facebook-f text-lg"></i>
                    </a>
                    <a href="#" className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-sm border border-gray-200">
                      <i className="fab fa-linkedin-in text-lg"></i>
                    </a>
                    <a href="#" className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-sm border border-gray-200">
                      <i className="fab fa-youtube text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-10 shadow-sm">
                <h3 className="text-2xl font-bold mb-8 text-gray-900">Gửi Yêu Cầu Tư Vấn</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                        Họ và tên <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-4 border rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 placeholder-gray-400 ${
                          errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="Nhập họ và tên"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-4 border rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 placeholder-gray-400 ${
                          errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="your.email@company.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone and Company Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 placeholder-gray-400 hover:border-gray-300"
                        placeholder="+84 xxx xxx xxx"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700">
                        Công ty
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 placeholder-gray-400 hover:border-gray-300"
                        placeholder="Tên công ty"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700">
                      Dịch vụ quan tâm
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 hover:border-gray-300"
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
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                      Tin nhắn <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className={`w-full px-4 py-4 border rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 resize-none placeholder-gray-400 ${
                        errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Mô tả chi tiết nhu cầu của bạn..."
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1 focus:ring-4 focus:ring-primary/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
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