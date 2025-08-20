Tóm tắt nội dung bài 1 - Getting started with API

# 1. Khái niệm cơ bản về API
- Là bộ quy tắc giúp phần mềm giao tiếp với nhau
- API giống như Lego, từng phần nhỏ trong phần mềm/hệ thống có thể phát triển độc lập và dùng API gắn kết chúng lại

# 2. Tầm quan trọng của việc viết và kiểm thử API
- Đảm bảo **dữ liệu** hoạt động **đúng**
- Xong đâu, test đó => **Phát hiện lỗi sớm**
- Đảm bảo **hiệu năng** phần mềm **nhanh và ổn định**
- Đảm bảo tính **bảo mật** dữ liệu

# 3. Các hình thức kiểm thử API
- Chức năng (Functional) 
- Tải (Load)
- Bảo mật (Security)
- Tích hợp (Integration)

# 4. Các loại API phổ biến
## Web API
- REST: Sử dụng HTTP (get, put, post, delete) làm phương thức chính, dễ sử dụng
- SOAP: Sử dụng giao thức XML, bảo mật cao. Thường dùng trong lĩnh vực ngân hàng
- GraphQL: Ngôn ngữ do Facebook phát triển từ 2012, thường gặp trong lĩnh vực crypto
## Library/Framework API
- Cho phép sử dụng API có sẵn của các thư viện/framework (vd. React, .NET, Java)
## OS (Operation System) API
- API cho phép ứng dụng tương tác với hệ điều hành (vd. Windows, Kernel) 
## Hardware API
- API cho phép ứng dụng tương tác với phần cứng (vd. Camera, printer, USB)

# 5. Các công cụ API phổ biến
## Manual (Làm tay/Thủ công)
- Postman
- cURL
- IntelIJ (IDE)
## Auto (Tự động)
- Playwright
- Selenium
- RestAssured

# 6. XML và JSON
## XML
- Ngôn ngữ "tự đánh dấu", "tự giải thích"
- Sử dụng cấu trúc tag đôi giống HTML 
vd. 
<me>
  <name>Huan</name>
  <place>Hanoi</place>
</me>

## JSON
- Ngôn ngữ "tự giải thích" như XML nhưng nhẹ hơn, ngắn hơn
- Không giới hạn ngôn ngữ lập trình
- Cấu trúc "key": value đi với dấu ngoặc nhọn 
vd. 
{
  "me" : {
    "name": "Huan",
    "place": "Hanoi"
  }
}