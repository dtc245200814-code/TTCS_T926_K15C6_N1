# 🌿 HƯỚNG DẪN PUSH CODE LÊN GIT — TUẦN 5 (SPRINT 5)
## 👤 Thành viên: Bàn Đức Duy
> **Quy ước đặt tên nhánh:** `feature/s5-01-chuyen-can-tong-hop`  
> **Chức năng:** Giảng viên xem bảng chuyên cần tổng hợp của lớp  
> **User Story:** Là Giảng viên, tôi muốn xem bảng chuyên cần tổng hợp của một lớp, để nhìn ra ngay ai đang có nguy cơ bỏ học để gọi điện kịp thời.  
> **Điểm Story Point:** 5 points | **Độ ưu tiên:** Must

---

### 1. 💻 CÁC LỆNH GIT THỰC HIỆN ĐỂ UP CODE LÊN NHÁNH CỦA BẠN

Mở Terminal tại thư mục gốc của dự án này và chạy tuần tự các lệnh sau:

```bash
# BƯỚC 1: Chuyển về nhánh develop (nhà phát triển) và cập nhật code mới nhất
git checkout develop
git pull origin develop

# BƯỚC 2: Tạo nhánh tính năng đúng quy ước chuẩn: feature/s5-01-chuyen-can-tong-hop
git checkout -b feature/s5-01-chuyen-can-tong-hop

# BƯỚC 3: Thêm các file code thay đổi vào Git
git add .

# BƯỚC 4: Commit với thông điệp chuẩn Conventional Commits
git commit -m "feat(s5-01): Giảng viên xem bảng chuyên cần tổng hợp của lớp"

# BƯỚC 5: Đẩy nhánh tính năng lên GitHub / GitLab
git push -u origin feature/s5-01-chuyen-can-tong-hop
```

---

### 2. 🔀 TẠO PULL REQUEST (PR) TRÊN GIAO DIỆN WEB
1. Mở trang kho lưu trữ Git của nhóm trên trình duyệt.
2. Nhấn nút **Compare & pull request** (hoặc Tạo yêu cầu kéo).
3. Thiết lập:
   - **Base (nhánh đích):** `develop`
   - **Compare (nhánh nguồn):** `feature/s5-01-chuyen-can-tong-hop`
4. Điền tiêu đề PR:
   `[Tuần 5] s5-01: Giảng viên xem bảng chuyên cần tổng hợp của lớp - Bàn Đức Duy`
5. Gửi đường dẫn PR vào nhóm chat để thành viên khác review và merge.

---

### 3. 🎯 TIÊU CHÍ NGHIỆM THU (ACCEPTANCE CRITERIA)
- • Ma trận học viên theo buổi, ô màu theo trạng thái
- • Cột tổng: số buổi vắng và tỷ lệ chuyên cần theo phần trăm
- • Sắp xếp được theo tỷ lệ chuyên cần tăng dần

---

### 4. 📂 CÁC FILE MÃ NGUỒN TRỌNG TÂM CỦA TÍNH NĂNG NÀY
**Phía Backend Server:**
- `Backend/src/routes/schedules.routes.js`

**Phía Frontend Client:**
- `Frontend/src/pages/ClassesPage.tsx`
- `Frontend/src/pages/SchedulePage.tsx`

---
*Tài liệu tự động sinh chuẩn hóa quy trình Git dự án TMS.*
