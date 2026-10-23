# 🌿 HƯỚNG DẪN PUSH CODE LÊN GIT — TUẦN 1 (SPRINT 1)
## 👤 Thành viên: Trần Thùy Dương
> **Quy ước đặt tên nhánh:** `feature/s1-05-phan-quyen-rbac`  
> **Chức năng:** Phân quyền theo vai trò RBAC cho 8 vai trò  
> **User Story:** Là Quản trị hệ thống, tôi muốn phân quyền theo vai trò cho toàn hệ thống, để đảm bảo giảng viên không sửa được học phí và kế toán không sửa được điểm.  
> **Điểm Story Point:** 8 points | **Độ ưu tiên:** Must

---

### 1. 💻 CÁC LỆNH GIT THỰC HIỆN ĐỂ UP CODE LÊN NHÁNH CỦA BẠN

Mở Terminal tại thư mục gốc của dự án này và chạy tuần tự các lệnh sau:

```bash
# BƯỚC 1: Chuyển về nhánh develop (nhà phát triển) và cập nhật code mới nhất
git checkout develop
git pull origin develop

# BƯỚC 2: Tạo nhánh tính năng đúng quy ước chuẩn: feature/s1-05-phan-quyen-rbac
git checkout -b feature/s1-05-phan-quyen-rbac

# BƯỚC 3: Thêm các file code thay đổi vào Git
git add .

# BƯỚC 4: Commit với thông điệp chuẩn Conventional Commits
git commit -m "feat(s1-05): Phân quyền theo vai trò RBAC cho 8 vai trò"

# BƯỚC 5: Đẩy nhánh tính năng lên GitHub / GitLab
git push -u origin feature/s1-05-phan-quyen-rbac
```

---

### 2. 🔀 TẠO PULL REQUEST (PR) TRÊN GIAO DIỆN WEB
1. Mở trang kho lưu trữ Git của nhóm trên trình duyệt.
2. Nhấn nút **Compare & pull request** (hoặc Tạo yêu cầu kéo).
3. Thiết lập:
   - **Base (nhánh đích):** `develop`
   - **Compare (nhánh nguồn):** `feature/s1-05-phan-quyen-rbac`
4. Điền tiêu đề PR:
   `[Tuần 1] s1-05: Phân quyền theo vai trò RBAC cho 8 vai trò - Trần Thùy Dương`
5. Gửi đường dẫn PR vào nhóm chat để thành viên khác review và merge.

---

### 3. 🎯 TIÊU CHÍ NGHIỆM THU (ACCEPTANCE CRITERIA)
- • Khai báo được quyền cho từng vai trò trong tám vai trò nghiệp vụ
- • Mọi chức năng đều kiểm quyền ở tầng server, mặc định là từ chối
- • Truy cập thiếu quyền hiển thị thông báo tiếng Việt rõ ràng thay vì lỗi kỹ thuật
- • Có kiểm thử tự động cho ít nhất ba vai trò

---

### 4. 📂 CÁC FILE MÃ NGUỒN TRỌNG TÂM CỦA TÍNH NĂNG NÀY
**Phía Backend Server:**
- `Backend/src/middleware/auth.js`
- `Backend/src/data/roles.js`

**Phía Frontend Client:**
- `Frontend/src/pages/RolesPermissionsPage.tsx`

---
*Tài liệu tự động sinh chuẩn hóa quy trình Git dự án TMS.*
