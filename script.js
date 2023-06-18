// script.js

// Fungsi untuk verifikasi login pada halaman login.html
function login(event) {
  event.preventDefault(); // Mencegah halaman refresh saat tombol login ditekan
  
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // Verifikasi username dan password
  if (username === "Admin" && password === "Admin") {
    // Jika login sukses, redirect ke halaman Home
    alert("Login berhasil!");
    window.location.href = "home.html";
  } else {
    // Jika login gagal, tampilkan pesan error
    alert("Username atau password salah!");
  }
}



// Fungsi untuk mengaktifkan menu navigasi aktif
function activateMenu() {
  var currentLocation = window.location.pathname;
  var navLinks = document.querySelectorAll("nav ul li a");
  
  // Loop melalui setiap link pada menu navigasi
  for (var i = 0; i < navLinks.length; i++) {
    var linkHref = navLinks[i].getAttribute("href");
    
    // Jika linkHref sama dengan currentLocation, berikan class "active"
    if (linkHref === currentLocation) {
      navLinks[i].classList.add("active");
    }
  }
}

// Panggil fungsi activateMenu() ketika halaman dimuat
window.onload = function() {
  activateMenu();
};
