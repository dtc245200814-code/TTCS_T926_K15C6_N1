# 🌿 HƯỚNG DẪN PUSH CODE LÊN GIT — TUẦN 1 (SPRINT 1)
## 👤 Thành viên: Giáp Đào Anh
> **Quy ước đặt tên nhánh:** `feature/s1-02-duy-tri-phien`  
> **Chức năng:** Duy trì phiên làm việc & đăng xuất an toàn  
> **User Story:** Là người dùng của hệ thống, tôi muốn duy trì phiên đăng nhập và đăng xuất an toàn, để không bị đăng xuất giữa chừng khi đang điểm danh, và yên tâm khi dùng máy chung.  
> **Điểm Story Point:** 3 points | **Độ ưu tiên:** Must

---

### 1. 💻 CÁC LỆNH GIT THỰC HIỆN ĐỂ UP CODE LÊN NHÁNH CỦA BẠN

Mở Terminal tại thư mục gốc của dự án này và chạy tuần tự các lệnh sau:

```bash
# BƯỚC 1: Chuyển về nhánh develop (nhà phát triển) và cập nhật code mới nhất
git checkout develop
git pull origin develop

# BƯỚC 2: Tạo nhánh tính năng đúng quy ước chuẩn: feature/s1-02-duy-tri-phien
git checkout -b feature/s1-02-duy-tri-phien

# BƯỚC 3: Thêm các file code thay đổi vào Git
git add .

# BƯỚC 4: Commit với thông điệp chuẩn Conventional Commits
git commit -m "feat(s1-02): Duy trì phiên làm việc & đăng xuất an toàn"

# BƯỚC 5: Đẩy nhánh tính năng lên GitHub / GitLab
git push -u origin feature/s1-02-duy-tri-phien
```

---

### 2. 🔀 TẠO PULL REQUEST (PR) TRÊN GIAO DIỆN WEB
1. Mở trang kho lưu trữ Git của nhóm trên trình duyệt.
2. Nhấn nút **Compare & pull request** (hoặc Tạo yêu cầu kéo).
3. Thiết lập:
   - **Base (nhánh đích):** `develop`
   - **Compare (nhánh nguồn):** `feature/s1-02-duy-tri-phien`
4. Điền tiêu đề PR:
   `[Tuần 1] s1-02: Duy trì phiên làm việc & đăng xuất an toàn - Giáp Đào Anh`
5. Gửi đường dẫn PR vào nhóm chat để thành viên khác review và merge.

---

### 3. 🎯 TIÊU CHÍ NGHIỆM THU (ACCEPTANCE CRITERIA)
- • Phiên được gia hạn tự động khi còn hoạt động
- • Đăng xuất làm mất hiệu lực phiên ngay lập tức phía server
- • Phiên hết hạn đưa về trang đăng nhập kèm thông báo rõ ràng, không mất dữ liệu đang nhập dở

---

### 4. 📂 CÁC FILE MÃ NGUỒN TRỌNG TÂM CỦA TÍNH NĂNG NÀY
**Phía Backend Server:**
- `Backend/src/routes/auth.routes.js`

**Phía Frontend Client:**
- `Frontend/src/store/authStore.ts`
- `Frontend/src/api/client.ts`

---
*Tài liệu tự động sinh chuẩn hóa quy trình Git dự án TMS.*
