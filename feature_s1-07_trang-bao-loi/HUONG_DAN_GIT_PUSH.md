# 🌿 HƯỚNG DẪN PUSH CODE LÊN GIT — TUẦN 1 (SPRINT 1)
## 👤 Thành viên: Bàn Đức Duy
> **Quy ước đặt tên nhánh:** `feature/s1-07-trang-bao-loi`  
> **Chức năng:** Trang báo lỗi 403 Forbidden & 404 Not Found  
> **User Story:** Là người dùng của hệ thống, tôi muốn nhận thông báo rõ ràng khi truy cập nhầm chỗ hoặc không đủ quyền, để biết mình nên làm gì tiếp thay vì gặp một trang trắng.  
> **Điểm Story Point:** 1 points | **Độ ưu tiên:** Should

---

### 1. 💻 CÁC LỆNH GIT THỰC HIỆN ĐỂ UP CODE LÊN NHÁNH CỦA BẠN

Mở Terminal tại thư mục gốc của dự án này và chạy tuần tự các lệnh sau:

```bash
# BƯỚC 1: Chuyển về nhánh develop (nhà phát triển) và cập nhật code mới nhất
git checkout develop
git pull origin develop

# BƯỚC 2: Tạo nhánh tính năng đúng quy ước chuẩn: feature/s1-07-trang-bao-loi
git checkout -b feature/s1-07-trang-bao-loi

# BƯỚC 3: Thêm các file code thay đổi vào Git
git add .

# BƯỚC 4: Commit với thông điệp chuẩn Conventional Commits
git commit -m "feat(s1-07): Trang báo lỗi 403 Forbidden & 404 Not Found"

# BƯỚC 5: Đẩy nhánh tính năng lên GitHub / GitLab
git push -u origin feature/s1-07-trang-bao-loi
```

---

### 2. 🔀 TẠO PULL REQUEST (PR) TRÊN GIAO DIỆN WEB
1. Mở trang kho lưu trữ Git của nhóm trên trình duyệt.
2. Nhấn nút **Compare & pull request** (hoặc Tạo yêu cầu kéo).
3. Thiết lập:
   - **Base (nhánh đích):** `develop`
   - **Compare (nhánh nguồn):** `feature/s1-07-trang-bao-loi`
4. Điền tiêu đề PR:
   `[Tuần 1] s1-07: Trang báo lỗi 403 Forbidden & 404 Not Found - Bàn Đức Duy`
5. Gửi đường dẫn PR vào nhóm chat để thành viên khác review và merge.

---

### 3. 🎯 TIÊU CHÍ NGHIỆM THU (ACCEPTANCE CRITERIA)
- • Trang báo lỗi dùng chung giao diện ứng dụng
- • Mỗi trang lỗi có một hành động gợi ý để quay lại luồng làm việc

---

### 4. 📂 CÁC FILE MÃ NGUỒN TRỌNG TÂM CỦA TÍNH NĂNG NÀY
**Phía Backend Server:**
- `Backend/src/routes/academic.routes.js`

**Phía Frontend Client:**
- `Frontend/src/pages/Error403Page.tsx`
- `Frontend/src/pages/Error404Page.tsx`

---
*Tài liệu tự động sinh chuẩn hóa quy trình Git dự án TMS.*
