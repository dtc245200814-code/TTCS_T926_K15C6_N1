# 🌿 HƯỚNG DẪN PUSH CODE LÊN GIT — TUẦN 3 (SPRINT 3)
## 👤 Thành viên: Trần Thùy Dương
> **Quy ước đặt tên nhánh:** `feature/s3-05-mo-lop-hoc-moi`  
> **Chức năng:** Mở lớp học mới từ chương trình đào tạo  
> **User Story:** Là Quản lý đào tạo, tôi muốn mở lớp học mới từ một chương trình đào tạo, để khai giảng đúng hẹn mà không phải dựng lại danh sách môn học.  
> **Điểm Story Point:** 5 points | **Độ ưu tiên:** Must

---

### 1. 💻 CÁC LỆNH GIT THỰC HIỆN ĐỂ UP CODE LÊN NHÁNH CỦA BẠN

Mở Terminal tại thư mục gốc của dự án này và chạy tuần tự các lệnh sau:

```bash
# BƯỚC 1: Chuyển về nhánh develop (nhà phát triển) và cập nhật code mới nhất
git checkout develop
git pull origin develop

# BƯỚC 2: Tạo nhánh tính năng đúng quy ước chuẩn: feature/s3-05-mo-lop-hoc-moi
git checkout -b feature/s3-05-mo-lop-hoc-moi

# BƯỚC 3: Thêm các file code thay đổi vào Git
git add .

# BƯỚC 4: Commit với thông điệp chuẩn Conventional Commits
git commit -m "feat(s3-05): Mở lớp học mới từ chương trình đào tạo"

# BƯỚC 5: Đẩy nhánh tính năng lên GitHub / GitLab
git push -u origin feature/s3-05-mo-lop-hoc-moi
```

---

### 2. 🔀 TẠO PULL REQUEST (PR) TRÊN GIAO DIỆN WEB
1. Mở trang kho lưu trữ Git của nhóm trên trình duyệt.
2. Nhấn nút **Compare & pull request** (hoặc Tạo yêu cầu kéo).
3. Thiết lập:
   - **Base (nhánh đích):** `develop`
   - **Compare (nhánh nguồn):** `feature/s3-05-mo-lop-hoc-moi`
4. Điền tiêu đề PR:
   `[Tuần 3] s3-05: Mở lớp học mới từ chương trình đào tạo - Trần Thùy Dương`
5. Gửi đường dẫn PR vào nhóm chat để thành viên khác review và merge.

---

### 3. 🎯 TIÊU CHÍ NGHIỆM THU (ACCEPTANCE CRITERIA)
- • Khai báo mã lớp, chương trình, ngày khai giảng dự kiến, sĩ số tối đa, hình thức học
- • Mã lớp là duy nhất
- • Lớp có vòng đời: Chuẩn bị → Đang học → Kết thúc → Huỷ
- • Danh sách môn học được sao chép từ chương trình khi mở lớp

---

### 4. 📂 CÁC FILE MÃ NGUỒN TRỌNG TÂM CỦA TÍNH NĂNG NÀY
**Phía Backend Server:**
- `Backend/src/routes/academic.routes.js`

**Phía Frontend Client:**
- `Frontend/src/pages/ClassesPage.tsx`

---
*Tài liệu tự động sinh chuẩn hóa quy trình Git dự án TMS.*
