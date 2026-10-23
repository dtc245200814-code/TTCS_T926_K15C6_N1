# 🌿 HƯỚNG DẪN PUSH CODE LÊN GIT — TUẦN 2 (SPRINT 2)
## 👤 Thành viên: Linh Việt Anh
> **Quy ước đặt tên nhánh:** `feature/s2-08-dang-ky-tu-van-web`  
> **Chức năng:** Biểu mẫu đăng ký tư vấn tuyển sinh công khai  
> **User Story:** Là Khách truy cập, tôi muốn gửi thông tin đăng ký tư vấn qua biểu mẫu công khai, để được trung tâm gọi lại tư vấn mà không phải tự tìm số điện thoại.  
> **Điểm Story Point:** 3 points | **Độ ưu tiên:** Must

---

### 1. 💻 CÁC LỆNH GIT THỰC HIỆN ĐỂ UP CODE LÊN NHÁNH CỦA BẠN

Mở Terminal tại thư mục gốc của dự án này và chạy tuần tự các lệnh sau:

```bash
# BƯỚC 1: Chuyển về nhánh develop (nhà phát triển) và cập nhật code mới nhất
git checkout develop
git pull origin develop

# BƯỚC 2: Tạo nhánh tính năng đúng quy ước chuẩn: feature/s2-08-dang-ky-tu-van-web
git checkout -b feature/s2-08-dang-ky-tu-van-web

# BƯỚC 3: Thêm các file code thay đổi vào Git
git add .

# BƯỚC 4: Commit với thông điệp chuẩn Conventional Commits
git commit -m "feat(s2-08): Biểu mẫu đăng ký tư vấn tuyển sinh công khai"

# BƯỚC 5: Đẩy nhánh tính năng lên GitHub / GitLab
git push -u origin feature/s2-08-dang-ky-tu-van-web
```

---

### 2. 🔀 TẠO PULL REQUEST (PR) TRÊN GIAO DIỆN WEB
1. Mở trang kho lưu trữ Git của nhóm trên trình duyệt.
2. Nhấn nút **Compare & pull request** (hoặc Tạo yêu cầu kéo).
3. Thiết lập:
   - **Base (nhánh đích):** `develop`
   - **Compare (nhánh nguồn):** `feature/s2-08-dang-ky-tu-van-web`
4. Điền tiêu đề PR:
   `[Tuần 2] s2-08: Biểu mẫu đăng ký tư vấn tuyển sinh công khai - Linh Việt Anh`
5. Gửi đường dẫn PR vào nhóm chat để thành viên khác review và merge.

---

### 3. 🎯 TIÊU CHÍ NGHIỆM THU (ACCEPTANCE CRITERIA)
- • Biểu mẫu không yêu cầu đăng nhập, có chống spam
- • Gửi thành công tạo một lead ở trạng thái Mới
- • Hiển thị lời cảm ơn và cam kết thời gian liên hệ lại

---

### 4. 📂 CÁC FILE MÃ NGUỒN TRỌNG TÂM CỦA TÍNH NĂNG NÀY
**Phía Backend Server:**
- `Backend/src/routes/academic.routes.js`

**Phía Frontend Client:**
- `Frontend/src/pages/PublicConsultationPage.tsx`

---
*Tài liệu tự động sinh chuẩn hóa quy trình Git dự án TMS.*
