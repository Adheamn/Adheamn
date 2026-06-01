
function login(){
 if(user.value==='admin' && pass.value==='123456'){
   localStorage.setItem('login','1');
   location.reload();
 } else alert('Login gagal');
}
function logout(){localStorage.removeItem('login');location.reload();}
if(localStorage.getItem('login')==='1'){
 document.getElementById('login').style.display='none';
 document.getElementById('app').style.display='block';
 document.getElementById('content').innerHTML='<h3>Siap dikembangkan</h3><p>Tambahkan modul stok, kasir, laporan, barcode, dan Google Sheets backend.</p>';
}
