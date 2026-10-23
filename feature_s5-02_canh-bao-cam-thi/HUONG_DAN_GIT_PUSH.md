# 🌿 HƯỚNG DẪN PUSH CODE LÊN GIT — TUẦN 5 (SPRINT 5)
## 👤 Thành viên: Trần Thùy Dương
> **Quy ước đặt tên nhánh:** `feature/s5-02-canh-bao-cam-thi`  
> **Chức năng:** Cảnh báo học viên vắng vượt ngưỡng có nguy cơ cấm thi  
> **User Story:** Là Quản lý đào tạo, tôi muốn được cảnh báo khi học viên vắng vượt ngưỡng cho phép, để can thiệp trước khi học viên bỏ hẳn chứ không phải sau khi đã mất.  
> **Điểm Story Point:** 3 points | **Độ ưu tiên:** Must

---

### 1. 💻 CÁC LỆNH GIT THỰC HIỆN ĐỂ UP CODE LÊN NHÁNH CỦA BẠN

Mở Terminal tại thư mục gốc của dự án này và chạy tuần tự các lệnh sau:

```bash
# BƯỚC 1: Chuyển về nhánh develop (nhà phát triển) và cập nhật code mới nhất
git checkout develop
git pull origin develop

# BƯỚC 2: Tạo nhánh tính năng đúng quy ước chuẩn: feature/s5-02-canh-bao-cam-thi
git checkout -b feature/s5-02-canh-bao-cam-thi

# BƯỚC 3: Thêm các file code thay đổi vào Git
git add .

# BƯỚC 4: Commit với thông điệp chuẩn Conventional Commits
git commit -m "feat(s5-02): Cảnh báo học viên vắng vượt ngưỡng có nguy cơ cấm thi"

# BƯỚC 5: Đẩy nhánh tính năng lên GitHub / GitLab
git push -u origin feature/s5-02-canh-bao-cam-thi
```

---

### 2. 🔀 TẠO PULL REQUEST (PR) TRÊN GIAO DIỆN WEB
1. Mở trang kho lưu trữ Git của nhóm trên trình duyệt.
2. Nhấn nút **Compare & pull request** (hoặc Tạo yêu cầu kéo).
3. Thiết lập:
   - **Base (nhánh đích):** `develop`
   - **Compare (nhánh nguồn):** `feature/s5-02-canh-bao-cam-thi`
4. Điền tiêu đề PR:
   `[Tuần 5] s5-02: Cảnh báo học viên vắng vượt ngưỡng có nguy cơ cấm thi - Trần Thùy Dương`
5. Gửi đường dẫn PR vào nhóm chat để thành viên khác review và merge.

---

### 3. 🎯 TIÊU CHÍ NGHIỆM THU (ACCEPTANCE CRITERIA)
- • Ngưỡng cấu hình được theo chương trình, mặc định 20% số buổi
- • Học viên vượt ngưỡng được gắn cờ trên danh sách lớp và hồ sơ
- • Giảng viên và Quản lý đào tạo nhận thông báo khi cờ được bật

---

### 4. 📂 CÁC FILE MÃ NGUỒN TRỌNG TÂM CỦA TÍNH NĂNG NÀY
**Phía Backend Server:**
- `Backend/src/routes/schedules.routes.js`

**Phía Frontend Client:**
- `Frontend/src/pages/ClassesPage.tsx`

---
*Tài liệu tự động sinh chuẩn hóa quy trình Git dự án TMS.*
