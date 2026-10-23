# 🌿 HƯỚNG DẪN PUSH CODE LÊN GIT — TUẦN 2 (SPRINT 2)
## 👤 Thành viên: Bàn Đức Duy
> **Quy ước đặt tên nhánh:** `feature/s2-04-quan-ly-chuong-trinh`  
> **Chức năng:** Quản lý danh mục chương trình đào tạo  
> **User Story:** Là Quản lý đào tạo, tôi muốn quản lý danh mục chương trình đào tạo, để mở lớp mới chỉ bằng cách chọn chương trình có sẵn thay vì khai báo lại từ đầu.  
> **Điểm Story Point:** 5 points | **Độ ưu tiên:** Must

---

### 1. 💻 CÁC LỆNH GIT THỰC HIỆN ĐỂ UP CODE LÊN NHÁNH CỦA BẠN

Mở Terminal tại thư mục gốc của dự án này và chạy tuần tự các lệnh sau:

```bash
# BƯỚC 1: Chuyển về nhánh develop (nhà phát triển) và cập nhật code mới nhất
git checkout develop
git pull origin develop

# BƯỚC 2: Tạo nhánh tính năng đúng quy ước chuẩn: feature/s2-04-quan-ly-chuong-trinh
git checkout -b feature/s2-04-quan-ly-chuong-trinh

# BƯỚC 3: Thêm các file code thay đổi vào Git
git add .

# BƯỚC 4: Commit với thông điệp chuẩn Conventional Commits
git commit -m "feat(s2-04): Quản lý danh mục chương trình đào tạo"

# BƯỚC 5: Đẩy nhánh tính năng lên GitHub / GitLab
git push -u origin feature/s2-04-quan-ly-chuong-trinh
```

---

### 2. 🔀 TẠO PULL REQUEST (PR) TRÊN GIAO DIỆN WEB
1. Mở trang kho lưu trữ Git của nhóm trên trình duyệt.
2. Nhấn nút **Compare & pull request** (hoặc Tạo yêu cầu kéo).
3. Thiết lập:
   - **Base (nhánh đích):** `develop`
   - **Compare (nhánh nguồn):** `feature/s2-04-quan-ly-chuong-trinh`
4. Điền tiêu đề PR:
   `[Tuần 2] s2-04: Quản lý danh mục chương trình đào tạo - Bàn Đức Duy`
5. Gửi đường dẫn PR vào nhóm chat để thành viên khác review và merge.

---

### 3. 🎯 TIÊU CHÍ NGHIỆM THU (ACCEPTANCE CRITERIA)
- • Khai báo mã, tên, mô tả, tổng thời lượng, học phí chuẩn, trạng thái
- • Mã chương trình là duy nhất
- • Chương trình đang có lớp chạy không được xoá, chỉ được ngừng áp dụng

---

### 4. 📂 CÁC FILE MÃ NGUỒN TRỌNG TÂM CỦA TÍNH NĂNG NÀY
**Phía Backend Server:**
- `Backend/src/routes/academic.routes.js`

**Phía Frontend Client:**
- `Frontend/src/pages/ClassesPage.tsx`

---
*Tài liệu tự động sinh chuẩn hóa quy trình Git dự án TMS.*
