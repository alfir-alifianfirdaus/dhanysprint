// Fungsi untuk mengecek apakah elemen sudah terlihat, bahkan sebagian kecil
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= windowHeight && rect.bottom >= 0;
}

// Fungsi untuk menambahkan atau menghapus kelas "visible"
function checkVisibility() {
  const items = document.querySelectorAll(".scroll-anim");
  items.forEach((item) => {
    if (isElementInViewport(item)) {
      item.classList.add("visible");
    } else {
      item.classList.remove("visible");
    }
  });
}

// Tambahkan event listener saat halaman di-scroll
window.addEventListener("scroll", checkVisibility);

// Panggil fungsi sekali saat halaman dimuat
document.addEventListener("DOMContentLoaded", checkVisibility);

// Panggil juga saat window resize, untuk berjaga-jaga
window.addEventListener("resize", checkVisibility);
