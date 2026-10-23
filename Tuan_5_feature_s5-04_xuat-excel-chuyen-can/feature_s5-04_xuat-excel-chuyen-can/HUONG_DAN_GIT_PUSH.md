# 🌿 HƯỚNG DẪN PUSH CODE LÊN GIT — TUẦN 5 (SPRINT 5)
## 👤 Thành viên: Hoàng Hải Đăng
> **Quy ước đặt tên nhánh:** `feature/s5-04-xuat-excel-chuyen-can`  
> **Chức năng:** Xuất bảng tổng hợp chuyên cần ra file Excel  
> **User Story:** Là Quản lý đào tạo, tôi muốn xuất bảng chuyên cần của lớp ra tệp Excel, để gửi báo cáo chuyên cần cho ban giám đốc theo mẫu họ quen dùng.  
> **Điểm Story Point:** 3 points | **Độ ưu tiên:** Should

---

### 1. 💻 CÁC LỆNH GIT THỰC HIỆN ĐỂ UP CODE LÊN NHÁNH CỦA BẠN

Mở Terminal tại thư mục gốc của dự án này và chạy tuần tự các lệnh sau:

```bash
# BƯỚC 1: Chuyển về nhánh develop (nhà phát triển) và cập nhật code mới nhất
git checkout develop
git pull origin develop

# BƯỚC 2: Tạo nhánh tính năng đúng quy ước chuẩn: feature/s5-04-xuat-excel-chuyen-can
git checkout -b feature/s5-04-xuat-excel-chuyen-can

# BƯỚC 3: Thêm các file code thay đổi vào Git
git add .

# BƯỚC 4: Commit với thông điệp chuẩn Conventional Commits
git commit -m "feat(s5-04): Xuất bảng tổng hợp chuyên cần ra file Excel"

# BƯỚC 5: Đẩy nhánh tính năng lên GitHub / GitLab
git push -u origin feature/s5-04-xuat-excel-chuyen-can
```

---

### 2. 🔀 TẠO PULL REQUEST (PR) TRÊN GIAO DIỆN WEB
1. Mở trang kho lưu trữ Git của nhóm trên trình duyệt.
2. Nhấn nút **Compare & pull request** (hoặc Tạo yêu cầu kéo).
3. Thiết lập:
   - **Base (nhánh đích):** `develop`
   - **Compare (nhánh nguồn):** `feature/s5-04-xuat-excel-chuyen-can`
4. Điền tiêu đề PR:
   `[Tuần 5] s5-04: Xuất bảng tổng hợp chuyên cần ra file Excel - Hoàng Hải Đăng`
5. Gửi đường dẫn PR vào nhóm chat để thành viên khác review và merge.

---

### 3. 🎯 TIÊU CHÍ NGHIỆM THU (ACCEPTANCE CRITERIA)
- • Tệp giữ nguyên cấu trúc ma trận và cột tổng
- • Tên tệp chứa mã lớp và ngày xuất

---

### 4. 📂 CÁC FILE MÃ NGUỒN TRỌNG TÂM CỦA TÍNH NĂNG NÀY
**Phía Backend Server:**
- `Backend/src/routes/schedules.routes.js`

**Phía Frontend Client:**
- `Frontend/src/pages/ClassesPage.tsx`

---
*Tài liệu tự động sinh chuẩn hóa quy trình Git dự án TMS.*
