<?php

if (count($_POST) > 0) {
  $username = $_POST["username"];
  $password = md5($_POST["password"]);
  $nama_petugas = $_POST["nama_petugas"];
  $level = $_POST["level"];

  include "../koneksi.php";
  $query = mysqli_query($koneksi, "INSERT INTO petugas(username, password, nama_petugas, level) VALUES ('$username', '$password', '$nama_petugas', '$level')");

  if ($query) {
    echo "<script>alert('Data petugas berhasil ditambahkan'); window.location.href = 'read.php'</script>";
  } else {
    echo "<script>alert('Data petugas gagal ditambahkan'); window.location.href = 'read.php'</script>";
  }
}
