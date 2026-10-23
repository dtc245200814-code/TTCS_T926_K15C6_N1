# 🌿 HƯỚNG DẪN PUSH CODE LÊN GIT — TUẦN 1 (SPRINT 1)
## 👤 Thành viên: Hoàng Hải Đăng
> **Quy ước đặt tên nhánh:** `feature/s1-09-gan-vai-tro`  
> **Chức năng:** Gán & thu hồi vai trò tài khoản người dùng  
> **User Story:** Là Quản trị hệ thống, tôi muốn gán và thu hồi vai trò cho một người dùng, để xử lý được trường hợp một người vừa là giảng viên vừa là quản lý đào tạo.  
> **Điểm Story Point:** 3 points | **Độ ưu tiên:** Must

---

### 1. 💻 CÁC LỆNH GIT THỰC HIỆN ĐỂ UP CODE LÊN NHÁNH CỦA BẠN

Mở Terminal tại thư mục gốc của dự án này và chạy tuần tự các lệnh sau:

```bash
# BƯỚC 1: Chuyển về nhánh develop (nhà phát triển) và cập nhật code mới nhất
git checkout develop
git pull origin develop

# BƯỚC 2: Tạo nhánh tính năng đúng quy ước chuẩn: feature/s1-09-gan-vai-tro
git checkout -b feature/s1-09-gan-vai-tro

# BƯỚC 3: Thêm các file code thay đổi vào Git
git add .

# BƯỚC 4: Commit với thông điệp chuẩn Conventional Commits
git commit -m "feat(s1-09): Gán & thu hồi vai trò tài khoản người dùng"

# BƯỚC 5: Đẩy nhánh tính năng lên GitHub / GitLab
git push -u origin feature/s1-09-gan-vai-tro
```

---

### 2. 🔀 TẠO PULL REQUEST (PR) TRÊN GIAO DIỆN WEB
1. Mở trang kho lưu trữ Git của nhóm trên trình duyệt.
2. Nhấn nút **Compare & pull request** (hoặc Tạo yêu cầu kéo).
3. Thiết lập:
   - **Base (nhánh đích):** `develop`
   - **Compare (nhánh nguồn):** `feature/s1-09-gan-vai-tro`
4. Điền tiêu đề PR:
   `[Tuần 1] s1-09: Gán & thu hồi vai trò tài khoản người dùng - Hoàng Hải Đăng`
5. Gửi đường dẫn PR vào nhóm chat để thành viên khác review và merge.

---

### 3. 🎯 TIÊU CHÍ NGHIỆM THU (ACCEPTANCE CRITERIA)
- • Một người dùng có thể giữ nhiều vai trò cùng lúc
- • Thay đổi vai trò có hiệu lực ngay ở thao tác kế tiếp, không cần đăng nhập lại
- • Không thể tự thu hồi vai trò quản trị của chính mình

---

### 4. 📂 CÁC FILE MÃ NGUỒN TRỌNG TÂM CỦA TÍNH NĂNG NÀY
**Phía Backend Server:**
- `Backend/src/routes/users.routes.js`

**Phía Frontend Client:**
- `Frontend/src/pages/RolesPermissionsPage.tsx`
- `Frontend/src/pages/UsersManagementPage.tsx`

---
*Tài liệu tự động sinh chuẩn hóa quy trình Git dự án TMS.*
