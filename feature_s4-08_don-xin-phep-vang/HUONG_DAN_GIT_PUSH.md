# 🌿 HƯỚNG DẪN PUSH CODE LÊN GIT — TUẦN 4 (SPRINT 4)
## 👤 Thành viên: Bàn Đức Duy
> **Quy ước đặt tên nhánh:** `feature/s4-08-don-xin-phep-vang`  
> **Chức năng:** Học viên nộp đơn xin phép vắng & theo dõi duyệt  
> **User Story:** Là Học viên, tôi muốn gửi đơn xin phép vắng và theo dõi kết quả duyệt, để nghỉ có lý do chính đáng không bị tính là vắng không phép.  
> **Điểm Story Point:** 5 points | **Độ ưu tiên:** Must

---

### 1. 💻 CÁC LỆNH GIT THỰC HIỆN ĐỂ UP CODE LÊN NHÁNH CỦA BẠN

Mở Terminal tại thư mục gốc của dự án này và chạy tuần tự các lệnh sau:

```bash
# BƯỚC 1: Chuyển về nhánh develop (nhà phát triển) và cập nhật code mới nhất
git checkout develop
git pull origin develop

# BƯỚC 2: Tạo nhánh tính năng đúng quy ước chuẩn: feature/s4-08-don-xin-phep-vang
git checkout -b feature/s4-08-don-xin-phep-vang

# BƯỚC 3: Thêm các file code thay đổi vào Git
git add .

# BƯỚC 4: Commit với thông điệp chuẩn Conventional Commits
git commit -m "feat(s4-08): Học viên nộp đơn xin phép vắng & theo dõi duyệt"

# BƯỚC 5: Đẩy nhánh tính năng lên GitHub / GitLab
git push -u origin feature/s4-08-don-xin-phep-vang
```

---

### 2. 🔀 TẠO PULL REQUEST (PR) TRÊN GIAO DIỆN WEB
1. Mở trang kho lưu trữ Git của nhóm trên trình duyệt.
2. Nhấn nút **Compare & pull request** (hoặc Tạo yêu cầu kéo).
3. Thiết lập:
   - **Base (nhánh đích):** `develop`
   - **Compare (nhánh nguồn):** `feature/s4-08-don-xin-phep-vang`
4. Điền tiêu đề PR:
   `[Tuần 4] s4-08: Học viên nộp đơn xin phép vắng & theo dõi duyệt - Bàn Đức Duy`
5. Gửi đường dẫn PR vào nhóm chat để thành viên khác review và merge.

---

### 3. 🎯 TIÊU CHÍ NGHIỆM THU (ACCEPTANCE CRITERIA)
- • Chọn buổi học, nhập lý do, đính kèm tệp minh chứng nếu có
- • Giảng viên duyệt hoặc từ chối, có ghi lý do
- • Đơn được duyệt tự động đặt trạng thái điểm danh thành Vắng có phép
- • Học viên nhận thông báo khi có kết quả

---

### 4. 📂 CÁC FILE MÃ NGUỒN TRỌNG TÂM CỦA TÍNH NĂNG NÀY
**Phía Backend Server:**
- `Backend/src/routes/schedules.routes.js`

**Phía Frontend Client:**
- `Frontend/src/pages/StudentServicesPage.tsx`

---
*Tài liệu tự động sinh chuẩn hóa quy trình Git dự án TMS.*
