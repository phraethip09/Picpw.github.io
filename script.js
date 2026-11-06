// เพิ่ม JavaScript สำหรับเว็บไซต์ Portfolio
document.addEventListener('DOMContentLoaded', function () {
    console.log('Portfolio ของ PHRAETHIP MOLEE พร้อมแล้ว!')
    const yearElement = document.getElementById('year');
    if (yearElement) { yearElement.textContent = new Date().getFullYear(); }
});
