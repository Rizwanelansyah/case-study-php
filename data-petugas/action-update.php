<?php

if (count($_POST) > 0) {
  $pw = (isset($_POST["password"])) ? $_POST["password"] : "";
  $id_petugas = $_POST["id_petugas"];
  $username = $_POST["username"];
  $password = md5($pw);
  $nama_petugas = $_POST["nama_petugas"];
  $level = $_POST["level"];

  $change = (trim($pw) == '') ? '' : "password='$password',";
  include "../koneksi.php";
  $query = mysqli_query($koneksi, "UPDATE petugas SET username='$username', $change nama_petugas='$nama_petugas', level='$level' WHERE id_petugas = $id_petugas");

  if ($query) {
    echo "<script>alert('Data petugas berhasil diubah'); window.location.href = 'read.php'</script>";
  } else {
    echo "<script>alert('Data petugas gagal diubah'); window.location.href = 'read.php'</script>";
  }
}
