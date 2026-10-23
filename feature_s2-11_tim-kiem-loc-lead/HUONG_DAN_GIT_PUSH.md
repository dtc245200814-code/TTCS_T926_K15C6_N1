# 🌿 HƯỚNG DẪN PUSH CODE LÊN GIT — TUẦN 2 (SPRINT 2)
## 👤 Thành viên: Trần Thùy Dương
> **Quy ước đặt tên nhánh:** `feature/s2-11-tim-kiem-loc-lead`  
> **Chức năng:** Tìm kiếm & lọc danh sách lead đa điều kiện  
> **User Story:** Là Tư vấn tuyển sinh, tôi muốn tìm kiếm và lọc lead theo nhiều điều kiện, để tìm lại được cuộc trao đổi từ tháng trước khi khách gọi lại.  
> **Điểm Story Point:** 2 points | **Độ ưu tiên:** Should

---

### 1. 💻 CÁC LỆNH GIT THỰC HIỆN ĐỂ UP CODE LÊN NHÁNH CỦA BẠN

Mở Terminal tại thư mục gốc của dự án này và chạy tuần tự các lệnh sau:

```bash
# BƯỚC 1: Chuyển về nhánh develop (nhà phát triển) và cập nhật code mới nhất
git checkout develop
git pull origin develop

# BƯỚC 2: Tạo nhánh tính năng đúng quy ước chuẩn: feature/s2-11-tim-kiem-loc-lead
git checkout -b feature/s2-11-tim-kiem-loc-lead

# BƯỚC 3: Thêm các file code thay đổi vào Git
git add .

# BƯỚC 4: Commit với thông điệp chuẩn Conventional Commits
git commit -m "feat(s2-11): Tìm kiếm & lọc danh sách lead đa điều kiện"

# BƯỚC 5: Đẩy nhánh tính năng lên GitHub / GitLab
git push -u origin feature/s2-11-tim-kiem-loc-lead
```

---

### 2. 🔀 TẠO PULL REQUEST (PR) TRÊN GIAO DIỆN WEB
1. Mở trang kho lưu trữ Git của nhóm trên trình duyệt.
2. Nhấn nút **Compare & pull request** (hoặc Tạo yêu cầu kéo).
3. Thiết lập:
   - **Base (nhánh đích):** `develop`
   - **Compare (nhánh nguồn):** `feature/s2-11-tim-kiem-loc-lead`
4. Điền tiêu đề PR:
   `[Tuần 2] s2-11: Tìm kiếm & lọc danh sách lead đa điều kiện - Trần Thùy Dương`
5. Gửi đường dẫn PR vào nhóm chat để thành viên khác review và merge.

---

### 3. 🎯 TIÊU CHÍ NGHIỆM THU (ACCEPTANCE CRITERIA)
- • Lọc theo trạng thái, nguồn, người phụ trách, khoảng thời gian
- • Tìm nhanh theo tên hoặc số điện thoại

---

### 4. 📂 CÁC FILE MÃ NGUỒN TRỌNG TÂM CỦA TÍNH NĂNG NÀY
**Phía Backend Server:**
- `Backend/src/routes/academic.routes.js`

**Phía Frontend Client:**
- `Frontend/src/pages/AdmissionsPage.tsx`

---
*Tài liệu tự động sinh chuẩn hóa quy trình Git dự án TMS.*
