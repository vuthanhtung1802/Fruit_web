# Dự án Bán Hoa Quả (Sell Fruit)

Hệ thống bán hoa quả trực tuyến bao gồm ứng dụng Client (Frontend) được phát triển bằng ReactJS và máy chủ API (Backend) chạy trên nền tảng Node.js / ExpressJS với cơ sở dữ liệu MongoDB.

---

## Cấu trúc dự án (Project Structure)

Dự án được tổ chức thành 2 thư mục chính:

- **`frontend_sell_fruit-main/`**: Ứng dụng Client viết bằng ReactJS (sử dụng Redux, Router, Axios, CSS/GlobalStyles).
- **`backend_sell_fruit-main/`**: Máy chủ RESTful API viết bằng Node.js / ExpressJS (sử dụng Mongoose, JWT, Cloudinary, SendGrid).

---

## Công nghệ sử dụng (Tech Stack)

### Frontend (Client)

- **Thư viện chính**: ReactJS (v18+)
- **Quản lý trạng thái**: Redux / React-Redux
- **Routing**: React Router DOM
- **Kết nối API**: Axios
- **Styling**: BEM class names, GlobalStyles

### Backend (Server)

- **Runtime**: Node.js
- **Framework**: ExpressJS
- **Cơ sở dữ liệu**: MongoDB (Mongoose ODM)
- **Bảo mật**: Mã hóa mật khẩu với `bcryptjs`, quản lý phiên/xác thực với JWT (JSON Web Tokens)
- **Dịch vụ bên thứ ba**:
  - **Cloudinary**: Lưu trữ hình ảnh sản phẩm và avatar người dùng.
  - **SendGrid**: Gửi email liên hệ và tư vấn mua hàng.
  - **Gemini API**: Chatbot hỗ trợ thông tin khách hàng.

---

## Các chức năng chính (Core Features)

### Client (Frontend)

1. **Trang chủ (Home Page)**: Hiển thị các sản phẩm nổi bật, các danh mục hoa quả và banner.
2. **Trang sản phẩm & Tìm kiếm (Products & Search Page)**: Tìm kiếm hoa quả theo tên, lọc sản phẩm và phân trang.
3. **Chi tiết sản phẩm (Product Detail Page)**: Xem thông tin chi tiết sản phẩm, đánh giá/bình luận của khách hàng.
4. **Giỏ hàng & Thanh toán (Cart & Checkout Page)**: Thêm/sửa/xóa sản phẩm trong giỏ hàng, nhập thông tin giao hàng và đặt hàng.
5. **Đăng nhập & Đăng ký (Auth Page)**: Cho phép người dùng đăng ký tài khoản, đăng nhập hệ thống với cơ chế mã hóa mật khẩu an toàn.
6. **Trang quản trị (Admin Dashboard)**: Cho phép quản trị viên thêm, sửa, xóa sản phẩm và quản lý đơn hàng của hệ thống.
7. **Trang liên hệ (Contact Page)**: Gửi thông tin yêu cầu tư vấn trực tiếp đến địa chỉ email quản trị hệ thống (`vuthanhtung1802@gmail.com`).
8. **Trang tin tức (News & Blog)**: Cập nhật các thông tin hữu ích về dinh dưỡng, sức khỏe liên quan đến hoa quả.

### Server (Backend RESTful API)

- **`/user`**: Đăng ký (`/register` - mật khẩu tự động được hash bằng `bcryptjs`), đăng nhập (`/login`), chỉnh sửa hồ sơ cá nhân (`/editProfile`).
- **`/fruitItems`**: Thêm, sửa, xóa, tìm kiếm và phân trang danh sách các sản phẩm hoa quả.
- **`/orders`**: Quản lý đơn hàng, thêm mới đơn hàng từ giỏ hàng của khách hàng.
- **`/comments`**: Đăng bình luận, đánh giá chất lượng sản phẩm.
- **`/news`**: Quản lý và lấy danh sách các tin tức trong tuần.
- **`/email`**: Gửi email thông báo / tư vấn (`/sendEmail` sử dụng SendGrid gửi về `vuthanhtung1802@gmail.com`).
- **`/chatbot`**: Tích hợp trợ lý ảo tư vấn khách hàng.

---

### Chạy Backend (API Server)

```bash
cd backend_sell_fruit-main
npm install
npm start
```

_Mặc định API Server sẽ chạy tại địa chỉ: `http://localhost:5000`_

### Chạy Frontend (Client)

```bash
cd frontend_sell_fruit-main
npm install
npm start
```

_Mặc định Client sẽ chạy tại địa chỉ: `http://localhost:3000`_
