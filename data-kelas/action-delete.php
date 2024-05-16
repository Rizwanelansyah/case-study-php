<?php

if (isset($_GET["id_kelas"])) {
  $id = $_GET["id_kelas"];
  include "../koneksi.php";

  $query = false;
  try {
    $query = mysqli_query($koneksi, "DELETE FROM kelas WHERE id_kelas = $id");
  } catch (Exception $err) {
    $query = false;
  }

  if ($query) {
    echo "<script>alert('Data kelas berhasil dihapus'); window.location.href = 'read.php'</script>";
  } else {
    echo "<script>alert('Data kelas gagal dihapus'); window.location.href = 'read.php'</script>";
  }
} else {
  header("location:read.php");
}
