<?php

if (isset($_GET["nisn"])) {
  $nisn = $_GET["nisn"];
  include "../koneksi.php";
  $query = mysqli_query($koneksi, "DELETE FROM siswa WHERE nisn = $nisn");

  if ($query) {
    echo "<script>alert('Data siswa berhasil dihapus'); window.location.href = 'read.php'</script>";
  } else {
    echo "<script>alert('Data siswa gagal dihapus'); window.location.href = 'read.php'</script>";
  }
}
