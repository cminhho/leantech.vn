# LeanTechCo React Website

Một trang web hiện đại cho LeanTechCo được xây dựng bằng React và TailwindCSS.

## Công nghệ sử dụng

- React 18
- TailwindCSS
- Font Awesome (Icons)
- Google Fonts (Inter)

## Tính năng

- Thiết kế responsive, tương thích với mọi thiết bị
- Tối ưu hiệu suất với ít dependencies
- UI hiện đại với animations và interactions
- Dễ dàng mở rộng và bảo trì

## Cài đặt

1. Clone repository:
```bash
git clone <repository-url>
cd leantech.vn
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy môi trường phát triển:
```bash
npm start
```

4. Build sản phẩm:
```bash
npm run build
```

## Cấu trúc thư mục

```
leantech.vn/
├── public/              # Static files
├── src/                 # Source files
│   ├── components/      # React components
│   │   ├── layout/      # Layout components (Header, Footer)
│   │   └── sections/    # Section components (Hero, Products, etc.)
│   ├── App.jsx          # Main App component
│   ├── index.js         # Entry point
│   └── index.css        # Global styles with TailwindCSS
├── package.json         # Project dependencies
├── tailwind.config.js   # TailwindCSS configuration
└── README.md            # Project documentation
```

## Tùy biến

- Chỉnh sửa theme màu sắc trong file `tailwind.config.js`
- Thay đổi nội dung các section trong thư mục `src/components/sections/`
- Thêm các thư viện bổ sung nếu cần qua `npm install` 