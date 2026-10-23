# 🌿 HƯỚNG DẪN PUSH CODE LÊN GIT — TUẦN 3 (SPRINT 3)
## 👤 Thành viên: Hoàng Hải Đăng
> **Quy ước đặt tên nhánh:** `feature/s3-01-bang-pheu-kanban`  
> **Chức năng:** Bảng phễu Kanban theo dõi trạng thái lead  
> **User Story:** Là Tư vấn tuyển sinh, tôi muốn theo dõi lead trên bảng phễu theo trạng thái, để nhìn một màn hình là biết hôm nay cần gọi ai trước.  
> **Điểm Story Point:** 8 points | **Độ ưu tiên:** Must

---

### 1. 💻 CÁC LỆNH GIT THỰC HIỆN ĐỂ UP CODE LÊN NHÁNH CỦA BẠN

Mở Terminal tại thư mục gốc của dự án này và chạy tuần tự các lệnh sau:

```bash
# BƯỚC 1: Chuyển về nhánh develop (nhà phát triển) và cập nhật code mới nhất
git checkout develop
git pull origin develop

# BƯỚC 2: Tạo nhánh tính năng đúng quy ước chuẩn: feature/s3-01-bang-pheu-kanban
git checkout -b feature/s3-01-bang-pheu-kanban

# BƯỚC 3: Thêm các file code thay đổi vào Git
git add .

# BƯỚC 4: Commit với thông điệp chuẩn Conventional Commits
git commit -m "feat(s3-01): Bảng phễu Kanban theo dõi trạng thái lead"

# BƯỚC 5: Đẩy nhánh tính năng lên GitHub / GitLab
git push -u origin feature/s3-01-bang-pheu-kanban
```

---

### 2. 🔀 TẠO PULL REQUEST (PR) TRÊN GIAO DIỆN WEB
1. Mở trang kho lưu trữ Git của nhóm trên trình duyệt.
2. Nhấn nút **Compare & pull request** (hoặc Tạo yêu cầu kéo).
3. Thiết lập:
   - **Base (nhánh đích):** `develop`
   - **Compare (nhánh nguồn):** `feature/s3-01-bang-pheu-kanban`
4. Điền tiêu đề PR:
   `[Tuần 3] s3-01: Bảng phễu Kanban theo dõi trạng thái lead - Hoàng Hải Đăng`
5. Gửi đường dẫn PR vào nhóm chat để thành viên khác review và merge.

---

### 3. 🎯 TIÊU CHÍ NGHIỆM THU (ACCEPTANCE CRITERIA)
- • Các cột: Mới → Đã liên hệ → Đang tư vấn → Hẹn học thử → Chốt → Từ chối
- • Kéo thả để đổi trạng thái, mỗi lần đổi được ghi nhật ký
- • Chuyển sang Từ chối bắt buộc chọn lý do
- • Mỗi cột hiển thị số lượng lead

---

### 4. 📂 CÁC FILE MÃ NGUỒN TRỌNG TÂM CỦA TÍNH NĂNG NÀY
**Phía Backend Server:**
- `Backend/src/routes/academic.routes.js`

**Phía Frontend Client:**
- `Frontend/src/pages/AdmissionsPage.tsx`

---
*Tài liệu tự động sinh chuẩn hóa quy trình Git dự án TMS.*
