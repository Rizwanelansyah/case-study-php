<?php

session_start();
include "koneksi.php";

$username = $_POST["username"];
$password = md5($_POST["password"]);

$login = mysqli_query($koneksi, "SELECT * FROM petugas WHERE username='$username' AND password='$password'; ");

if (mysqli_num_rows($login) > 0) {
  $data = mysqli_fetch_object($login);

  if ($data->level == "admin") {
    $_SESSION["nama"] = $data->nama_petugas;
    $_SESSION["level"] = "admin";
    header("location: home/dashboard.php");
  } elseif ($data->level == "petugas") {
    $_SESSION["nama"] = $data->nama_petugas;
    $_SESSION["level"] = "petugas";
    header("location: home/dashboard.php");
  } else {
    header("location: auth-login-petugas.php?pesan=gagal");
  }
} else {
  header("location: auth-login-petugas.php?pesan=gagal");
}
