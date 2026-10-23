# 🌿 HƯỚNG DẪN PUSH CODE LÊN GIT — TUẦN 4 (SPRINT 4)
## 👤 Thành viên: Trần Thùy Dương
> **Quy ước đặt tên nhánh:** `feature/s4-01-sinh-lich-tu-dong`  
> **Chức năng:** Tự động sinh thời khóa biểu theo chu kỳ tuần  
> **User Story:** Là Quản lý đào tạo, tôi muốn sinh thời khoá biểu tự động theo mẫu lặp, để xếp lịch cho một lớp 60 buổi trong vài phút thay vì gõ tay từng buổi.  
> **Điểm Story Point:** 8 points | **Độ ưu tiên:** Must

---

### 1. 💻 CÁC LỆNH GIT THỰC HIỆN ĐỂ UP CODE LÊN NHÁNH CỦA BẠN

Mở Terminal tại thư mục gốc của dự án này và chạy tuần tự các lệnh sau:

```bash
# BƯỚC 1: Chuyển về nhánh develop (nhà phát triển) và cập nhật code mới nhất
git checkout develop
git pull origin develop

# BƯỚC 2: Tạo nhánh tính năng đúng quy ước chuẩn: feature/s4-01-sinh-lich-tu-dong
git checkout -b feature/s4-01-sinh-lich-tu-dong

# BƯỚC 3: Thêm các file code thay đổi vào Git
git add .

# BƯỚC 4: Commit với thông điệp chuẩn Conventional Commits
git commit -m "feat(s4-01): Tự động sinh thời khóa biểu theo chu kỳ tuần"

# BƯỚC 5: Đẩy nhánh tính năng lên GitHub / GitLab
git push -u origin feature/s4-01-sinh-lich-tu-dong
```

---

### 2. 🔀 TẠO PULL REQUEST (PR) TRÊN GIAO DIỆN WEB
1. Mở trang kho lưu trữ Git của nhóm trên trình duyệt.
2. Nhấn nút **Compare & pull request** (hoặc Tạo yêu cầu kéo).
3. Thiết lập:
   - **Base (nhánh đích):** `develop`
   - **Compare (nhánh nguồn):** `feature/s4-01-sinh-lich-tu-dong`
4. Điền tiêu đề PR:
   `[Tuần 4] s4-01: Tự động sinh thời khóa biểu theo chu kỳ tuần - Trần Thùy Dương`
5. Gửi đường dẫn PR vào nhóm chat để thành viên khác review và merge.

---

### 3. 🎯 TIÊU CHÍ NGHIỆM THU (ACCEPTANCE CRITERIA)
- • Khai báo mẫu: các thứ trong tuần, ca học, ngày bắt đầu, số buổi
- • Hệ thống sinh đủ buổi và tự bỏ qua ngày nghỉ lễ đã khai báo
- • Xem trước danh sách buổi trước khi xác nhận lưu
- • Mỗi buổi được gắn với một bài học trong môn

---

### 4. 📂 CÁC FILE MÃ NGUỒN TRỌNG TÂM CỦA TÍNH NĂNG NÀY
**Phía Backend Server:**
- `Backend/src/routes/schedules.routes.js`

**Phía Frontend Client:**
- `Frontend/src/pages/SchedulePage.tsx`

---
*Tài liệu tự động sinh chuẩn hóa quy trình Git dự án TMS.*
