Tóm tắt nội dung bài 2 - REST API
(Cài Mardown Preview trên VSCode để xem đẹp hơn)

# 1. Khái niệm cơ bản
## a. Mô hình giao tiếp
- Nhân vật: Client (Máy khách), Server (Máy chủ)
- Cách thức: Client gửi "request" cho Server, Server trả lại "response" cho Client.

## b. Thành phần 
- Request: method, URL, header, body
- Response: status code, header, body

## c. Tại sao thành phần lại tách ra?
- Mỗi thành phần có vai trò cụ thể => Nhìn vào biết ngay **cái này làm gì**
- Tiết kiệm tài nguyên: **Thằng nào lỗi, trả về ngay** => Các thằng khác ở yên, đỡ mệt!
- Linh hoạt: Từng phần có thể **tái sử dụng** và tùy chỉnh

# 2. Đi sâu hơn
## a. Request
### method
- Phương thức hành động client muốn thực hiện với tài nguyên server
- Định dạng giao thức HTTP
- Các phương thức phổ biến: GET / POST / PUT / DELETE **(4 thằng này lớp vỡ lòng)** / PATCH / HEAD / OPTIONS
### URL
- Đường dẫn tới tài nguyên server
- Bao gồm: 
  + ***scheme***: Là http hoặc https (S = Secure :D bảo mật hơn)
  + ***domain***: Tên miền, có thêm khái niệm subdomain là phần đứng trước
  + ***path***: Đường dẫn tới dữ liệu con, đứng trước domain, theo sau bởi dấu "/"
  + ***query***: Thông tin bổ sung dữ liệu, định dạng "key=value"
    - Bonus: Query đầu tiên theo sau bởi dấu "?", từ query thứ 2 trở đi theo sau bởi dấu "&"
  + ***fragment***: vị trí neo trên trang web, không có tác dụng khi gửi lên server
### header
- Dữ liệu đi đầu, truyền thông tin bổ sung
- Định dạng key:value
- Bao gồm các nhóm: **authorization** (xác thực), **content** (khai báo kiểu dữ liệu), **caching** (bộ nhớ đệm), **security** (bảo mật), **CORS** (chia sẻ dữ liệu qua domain)
### body
- Phần dữ liệu được gửi đi
- Định dạng JSON/XML/form-data
- Tại sao cần? 
  + Tối ưu hóa giao tiếp: Dữ liệu chia nhỏ ra thì xử lý dễ hơn
  + Tăng bảo mật: Nhét dữ liệu nhạy cảm vào đây, đỡ bị đọc
  + Tăng hiệu quả xử lý
- Lưu ý:
  + Dùng đúng định dạng
  + Xác thực dữ liệu trước khi gửi
  + Mã hóa dữ liệu nhạy cảm
  + Kiểm tra lỗi phát sinh (nếu có)

## b. Response
### status code
- Mã số chỉ kết quả của request gửi đến server
- Gồm 3 chữ số, chia thành 5 nhóm chính:
  + ***1xx (Informal)***: "Tao đang xử lý"
  + ***2xx (Success)***: "OK rồi nha mày" (nhưng nhớ kiểm tra kĩ body)
  + ***3xx (Redirection)***: "Làm thêm đi rồi tao xử lý tiếp"
  + ***4xx (Client Error)***: "Ê lỗi mày kìa"
  + ***5xx (Server Error)***: "À lỗi tao lỗi tao"
### header
- Phần dữ liệu đầu được gửi kèm về
- Định dạng key:value
- Chứa thông tin về cách xử lý response, bảo mật và ti tỉ cái quan trọng khác 
  + *Nói chung là header request có cái gì thì header response trả về cái đó!*
### body
- Dữ liệu thực mà server trả về cho client
- Có thể khác nhau! 
  + Ví dụ: Create User
  + Request cả tỉ thứ từ ***tên user, tên thật, email, password***,...
  => Response trả về: **"OK luôn"** hoặc **"Lỗi nha mày"**. Hết!
- Định dạng: JSON/XML/HTML/text thuần/nhị phân
- Lưu ý khi test:
  + Kiểm tra cấu trúc (định dạng, trường,...)
  + Kiểm tra nội dung (đúng dữ liệu không, ngày tháng, chữ số như yêu cầu chưa,...)
  + Kiểm tra lỗi (error message rõ ràng, đúng mã lỗi,...)
  + Kiểm tra hiệu năng (kích thước, thời gian,...)

# 3. Một số thuật ngữ nên nhớ
## a. Authentication & Authorization
- Authen: Xác minh danh tính
- Author: Xác định quyền truy cập, đi sau Authen
## b. Username & Password
Tên, mật khẩu ***(ghi vào, không thừa đâu)***
## c. Session & Cookie
- Xác thực dựa trên trạng thái
- Client gửi thông tin xác thực cho server, và server trả về 2 thứ: 
  + Nội dung client yêu cầu
  + File cookie chứa session ID (được lưu ở server)
- Lần tới client đó truy cập server, **nó sẽ gửi theo cả cookie**
  + Server nhìn vào và nói **"À hóa ra là thằng này, xin mời!"**
## d. Base64 encode/decode
- Mã hóa chuỗi kí tự gốc theo chuẩn Base64
  + *Bonus: Đây là cách YouTube gói gọn đường link video của mình trong 11 kí tự, và là lí do YouTube gần như sẽ không bao giờ "đầy"!*
## e. Token
- Chuỗi kí tự tạo ra sau khi người dùng đăng nhập thành công, đính kèm trong header/query parameter
- Nhằm xác thực trong ngắn hạn
- Các dạng phổ biến: **session** (session-cookie), **bearer** (OAuth 2.0), ***JWT*** (header.body.signature)
- Gồm 2 loại: **access** (cấp mới), **refresh** (cấp lại)
## f. API Key
- Chuỗi kí tự được cấp để truy cập API
- Thường **chỉ được xem 1 lần**, không chứa thông tin người dùng