# 🌿 HƯỚNG DẪN PUSH CODE LÊN GIT — TUẦN 5 (SPRINT 5)
## 👤 Thành viên: Linh Việt Anh
> **Quy ước đặt tên nhánh:** `feature/s5-08-nop-lai-bai-tap-versions`  
> **Chức năng:** Học viên nộp lại bài & xem lịch sử các phiên bản nộp  
> **User Story:** Là Học viên, tôi muốn nộp lại bài và xem lại các phiên bản đã nộp, để sửa được lỗi phát hiện sau khi nộp mà không mất bài cũ.  
> **Điểm Story Point:** 5 points | **Độ ưu tiên:** Must

---

### 1. 💻 CÁC LỆNH GIT THỰC HIỆN ĐỂ UP CODE LÊN NHÁNH CỦA BẠN

Mở Terminal tại thư mục gốc của dự án này và chạy tuần tự các lệnh sau:

```bash
# BƯỚC 1: Chuyển về nhánh develop (nhà phát triển) và cập nhật code mới nhất
git checkout develop
git pull origin develop

# BƯỚC 2: Tạo nhánh tính năng đúng quy ước chuẩn: feature/s5-08-nop-lai-bai-tap-versions
git checkout -b feature/s5-08-nop-lai-bai-tap-versions

# BƯỚC 3: Thêm các file code thay đổi vào Git
git add .

# BƯỚC 4: Commit với thông điệp chuẩn Conventional Commits
git commit -m "feat(s5-08): Học viên nộp lại bài & xem lịch sử các phiên bản nộp"

# BƯỚC 5: Đẩy nhánh tính năng lên GitHub / GitLab
git push -u origin feature/s5-08-nop-lai-bai-tap-versions
```

---

### 2. 🔀 TẠO PULL REQUEST (PR) TRÊN GIAO DIỆN WEB
1. Mở trang kho lưu trữ Git của nhóm trên trình duyệt.
2. Nhấn nút **Compare & pull request** (hoặc Tạo yêu cầu kéo).
3. Thiết lập:
   - **Base (nhánh đích):** `develop`
   - **Compare (nhánh nguồn):** `feature/s5-08-nop-lai-bai-tap-versions`
4. Điền tiêu đề PR:
   `[Tuần 5] s5-08: Học viên nộp lại bài & xem lịch sử các phiên bản nộp - Linh Việt Anh`
5. Gửi đường dẫn PR vào nhóm chat để thành viên khác review và merge.

---

### 3. 🎯 TIÊU CHÍ NGHIỆM THU (ACCEPTANCE CRITERIA)
- • Mỗi lần nộp tạo một phiên bản mới, không ghi đè phiên bản cũ
- • Giảng viên xem được toàn bộ lịch sử nộp
- • Bài đã chấm xong không nộp lại được, trừ khi giảng viên mở lại

---

### 4. 📂 CÁC FILE MÃ NGUỒN TRỌNG TÂM CỦA TÍNH NĂNG NÀY
**Phía Backend Server:**
- `Backend/src/routes/assignments.routes.js`

**Phía Frontend Client:**
- `Frontend/src/pages/AssignmentsPage.tsx`

---
*Tài liệu tự động sinh chuẩn hóa quy trình Git dự án TMS.*
