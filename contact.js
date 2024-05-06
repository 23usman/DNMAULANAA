// whatsapp
function sendMessage() {
  var phoneNumber = "+6285754001312"; // Ganti dengan nomor tujuan
  var message = "Halo, saya ingin berbicara dengan Anda!";

  // Hapus karakter "?" di awal teks
  if (message.startsWith("?")) {
    message = message.substring(1);
  }

  // Buat tautan WhatsApp
  var whatsappLink =
    "whatsapp://send?phone=" +
    phoneNumber +
    "&text=" +
    encodeURIComponent(message);

  // Buka aplikasi WhatsApp
  window.location.href = whatsappLink;
}

// Email
function addEmailLink() {
  // Dapatkan elemen anchor dengan kelas "btn"
  const emailLink = document.querySelector('a[onclick="addEmailLink()"]');

  // Tambahkan atribut href ke tautan email
  emailLink.href = "mailto:dndrone7@gmail.com";
}

// Download CV
function downloadCV() {
  // Ganti href dengan tautan CV
  const cvLink = document.querySelector(".d-CV");
  cvLink.href = "img/CV DENI MAULANA HIDAYAT.pdf";
  cvLink.removeAttribute("title"); // Menghapus atribut title saat tautan diklik
  cvLink.target = "_blank";

  // Menambahkan event listener untuk menangkap ketika pengguna kembali ke halaman HTML dari PDF
  window.addEventListener("focus", function () {
    // Memuat ulang halaman saat pengguna kembali ke halaman HTML
    window.location.reload();
  });
}

function openInstagramProfile() {
  // Buat tautan ke halaman profil Instagram
  var instagramProfileLink = "https://www.instagram.com/dn.pr0ject/";

  // Buka halaman profil Instagram di tab baru
  window.open(instagramProfileLink, "_blank");
}
