// ============================================================
// HARDCODED CREDENTIALS (untuk demo/portfolio)
// Untuk produksi: ganti dengan API call ke backend
// Contoh:
// const res = await fetch('/api/auth/login', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ email, password })
// });
// const data = await res.json();
// if (data.token) sessionStorage.setItem('token', data.token);
// ============================================================

const DEMO_CREDENTIALS = {
  email: 'admin@crm.com',
  password: 'admin123'
};

const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('errorMsg');
const errorText = document.getElementById('errorText');
const btnLogin = document.getElementById('btnLogin');
const togglePass = document.getElementById('togglePass');

// Toggle password visibility
togglePass.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';
  togglePass.querySelector('i').className = isPassword ? 'far fa-eye-slash' : 'far fa-eye';
});

// Form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  errorMsg.classList.remove('show');
  emailInput.classList.remove('error');
  passwordInput.classList.remove('error');

  // Validasi kosong
  if (!email || !password) {
    errorText.textContent = 'Email dan password wajib diisi.';
    errorMsg.classList.add('show');
    if (!email) emailInput.classList.add('error');
    if (!password) passwordInput.classList.add('error');
    return;
  }

  // Cek credentials
  // Untuk produksi: ganti blok ini dengan response dari API
  if (email === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password) {
    btnLogin.disabled = true;
    btnLogin.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Masuk...';

    // Simpan session
    // Untuk produksi: simpan token dari response API, bukan hardcode
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('userEmail', email);

    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 800);
  } else {
    errorText.textContent = 'Email atau password salah.';
    errorMsg.classList.add('show');
    emailInput.classList.add('error');
    passwordInput.classList.add('error');
  }
});

// Redirect kalau udah login
if (sessionStorage.getItem('isLoggedIn') === 'true') {
  window.location.href = 'dashboard.html';
}
