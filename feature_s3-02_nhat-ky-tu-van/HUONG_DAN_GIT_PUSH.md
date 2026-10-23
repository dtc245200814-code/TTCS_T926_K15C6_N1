# 🌿 HƯỚNG DẪN PUSH CODE LÊN GIT — TUẦN 3 (SPRINT 3)
## 👤 Thành viên: Bàn Đức Duy
> **Quy ước đặt tên nhánh:** `feature/s3-02-nhat-ky-tu-van`  
> **Chức năng:** Ghi nhật ký chăm sóc lead & đặt lịch nhắc gọi lại  
> **User Story:** Là Tư vấn tuyển sinh, tôi muốn ghi nhật ký chăm sóc và đặt lịch nhắc gọi lại, để không quên lời hứa gọi lại cho khách vào tuần sau.  
> **Điểm Story Point:** 3 points | **Độ ưu tiên:** Must

---

### 1. 💻 CÁC LỆNH GIT THỰC HIỆN ĐỂ UP CODE LÊN NHÁNH CỦA BẠN

Mở Terminal tại thư mục gốc của dự án này và chạy tuần tự các lệnh sau:

```bash
# BƯỚC 1: Chuyển về nhánh develop (nhà phát triển) và cập nhật code mới nhất
git checkout develop
git pull origin develop

# BƯỚC 2: Tạo nhánh tính năng đúng quy ước chuẩn: feature/s3-02-nhat-ky-tu-van
git checkout -b feature/s3-02-nhat-ky-tu-van

# BƯỚC 3: Thêm các file code thay đổi vào Git
git add .

# BƯỚC 4: Commit với thông điệp chuẩn Conventional Commits
git commit -m "feat(s3-02): Ghi nhật ký chăm sóc lead & đặt lịch nhắc gọi lại"

# BƯỚC 5: Đẩy nhánh tính năng lên GitHub / GitLab
git push -u origin feature/s3-02-nhat-ky-tu-van
```

---

### 2. 🔀 TẠO PULL REQUEST (PR) TRÊN GIAO DIỆN WEB
1. Mở trang kho lưu trữ Git của nhóm trên trình duyệt.
2. Nhấn nút **Compare & pull request** (hoặc Tạo yêu cầu kéo).
3. Thiết lập:
   - **Base (nhánh đích):** `develop`
   - **Compare (nhánh nguồn):** `feature/s3-02-nhat-ky-tu-van`
4. Điền tiêu đề PR:
   `[Tuần 3] s3-02: Ghi nhật ký chăm sóc lead & đặt lịch nhắc gọi lại - Bàn Đức Duy`
5. Gửi đường dẫn PR vào nhóm chat để thành viên khác review và merge.

---

### 3. 🎯 TIÊU CHÍ NGHIỆM THU (ACCEPTANCE CRITERIA)
- • Mỗi lần tương tác ghi loại (gọi, nhắn, gặp), nội dung, thời điểm
- • Đặt được ngày nhắc gọi lại
- • Lead quá hạn gọi lại được đánh dấu nổi bật

---

### 4. 📂 CÁC FILE MÃ NGUỒN TRỌNG TÂM CỦA TÍNH NĂNG NÀY
**Phía Backend Server:**
- `Backend/src/routes/academic.routes.js`

**Phía Frontend Client:**
- `Frontend/src/pages/AdmissionsPage.tsx`

---
*Tài liệu tự động sinh chuẩn hóa quy trình Git dự án TMS.*
