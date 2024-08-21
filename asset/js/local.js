// let root = document.getElementById('root');
// console.log('root: ', root);
// root.textContent = 'belajar localstorage';

let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');
let admin = document.getElementById('admin');
let basic = document.getElementById('basic');
let nama = document.getElementById('nama');
let button = document.getElementById('button');
let logout = document.getElementById('logout');
let log = document.getElementById('log');

admin.style.display = 'none';
basic.style.display = 'none';
logout.style.display = 'none';

function onLogin() {
  console.log('anda sudah login' + ' ' + usernameInput.value);
  console.log('ini password mu' + ' ' + passwordInput.value);
  localStorage.setItem('username', usernameInput.value);
  // validasi
  if (usernameInput.value === 'admin' && passwordInput.value === 'admin123') {
    localStorage.setItem('role', 'admin');
    admin.style.display = 'block';
    logout.style.display = 'block';
    // menampilkan content jika admin login
    admin.textContent = 'Selamat Datang Admin';
    // menghilangkan menu
    usernameInput.style.display = 'none';
    passwordInput.style.display = 'none';
    nama.style.display = 'none';
    button.style.display = 'none';
    log.style.display = 'none';
  } else {
    basic.style.display = 'block';
    logout.style.display = 'block';
    localStorage.setItem('role', 'pengunjung');
    // menampilkan content jika user login
    basic.textContent = 'Selamat Datang' + ' ' + usernameInput.value;
    // menghilangkan menu
    usernameInput.style.display = 'none';
    passwordInput.style.display = 'none';
    nama.style.display = 'none';
    button.style.display = 'none';
    log.style.display = 'none';
  }
}
// jika di refresh dan melihat data apakah ada di localstorage
if (localStorage.getItem('username')) {
  usernameInput.style.display = 'none';
  passwordInput.style.display = 'none';
  log.style.display = 'none';
  nama.style.display = 'none';
  button.style.display = 'none';
  if (localStorage.getItem('role') == 'admin') {
    admin.style.display = 'block';
    logout.style.display = 'block';
    // menampilkan content jika admin login
    admin.textContent = 'Selamat Datang Admin';
  } else {
    basic.style.display = 'block';
    logout.style.display = 'block';
    basic.textContent = 'Selamat Datang' + ' ' + usernameInput.value;
  }
}

// logout
function onLogout() {
  // menghapus data di localstorage
  localStorage.clear();
  // mengembalikan halaman ke halaman awal
  location.reload();
}
