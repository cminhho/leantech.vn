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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
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
    <section id="contact" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="text-lg leading-relaxed">
            Hãy để đội ngũ chuyên gia của chúng tôi cùng bạn tạo ra giá trị thực tế cho doanh nghiệp trong hành trình tối ưu hóa.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 lg:items-stretch">
            {/* Contact Info */}
            <div className="lg:col-span-1 flex">
              <div className="bg-white rounded-2xl shadow-lg p-8 w-full flex flex-col">
                <h3 className="text-2xl font-bold mb-8 text-gray-900">Thông Tin Liên Hệ</h3>
                
                <div className="space-y-6 flex-grow">
                  <div className="group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <i className="fas fa-map-marker-alt text-primary text-lg"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Địa chỉ</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Số 5 Đường số 3, Khu phố 2, Phường An Khánh, Thành phố Thủ Đức, TP. Hồ Chí Minh
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <i className="fas fa-phone-alt text-primary text-lg"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Điện thoại</h4>
                        <a href="tel:+84906246489" className="text-primary hover:text-primary/80 transition-colors font-medium">
                          +84 906 246 489
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <i className="fas fa-envelope text-primary text-lg"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                        <a href="mailto:info@leantech.vn" className="text-primary hover:text-primary/80 transition-colors font-medium">
                          info@leantech.vn
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <i className="fas fa-clock text-primary text-lg"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Giờ làm việc</h4>
                        <p className="text-gray-600 text-sm">
                          Thứ Hai - Thứ Sáu: 8:00 - 17:30<br />
                          Thứ Bảy: 8:00 - 12:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Kết nối với chúng tôi</h4>
                  <div className="flex space-x-3">
                    <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 flex">
              <div className="bg-white rounded-2xl shadow-lg p-8 w-full">
                <h3 className="text-2xl font-bold mb-8 text-gray-900">Gửi Yêu Cầu Tư Vấn</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 placeholder-gray-400"
                        placeholder="Nhập họ và tên"
                      />
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 placeholder-gray-400"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  {/* Phone and Company Row */}
                  <div className="grid md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 placeholder-gray-400"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 placeholder-gray-400"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 resize-none placeholder-gray-400"
                      placeholder="Mô tả chi tiết nhu cầu của bạn..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto btn bg-primary text-white border-primary text-sm hover:shadow-lg hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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