// Xử lý chuyển tab đơn giản bằng Javascript thuần
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Ẩn tất cả nội dung
            contents.forEach(content => content.classList.remove("active"));
            
            // Lấy ID của tab được click và hiển thị
            const targetId = button.getAttribute("data-target");
            document.getElementById(targetId).classList.add("active");
        });
    });
});
