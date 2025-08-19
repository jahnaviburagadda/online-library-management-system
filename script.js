const pages = ['loginPage', 'registerPage', 'homePage', 'webpage'];

function showPage(id) {
  pages.forEach(p => document.getElementById(p).style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  showPage('homePage');
});

document.getElementById('register-form').addEventListener('submit', function(e) {
  e.preventDefault();
  showPage('homePage');
});

// Show login by default
showPage('loginPage');

// Generate QR for login page URL
QRCode.toCanvas(document.getElementById("qrcode"), window.location.href + "#loginPage", function (error) {
  if (error) console.error(error);
  console.log("QR Code generated!");
});
