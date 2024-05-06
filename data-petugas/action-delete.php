<?php

if (isset($_GET["id_petugas"])) {
  $id = $_GET["id_petugas"];
  include "../koneksi.php";
  $query = mysqli_query($koneksi, "DELETE FROM petugas WHERE id_petugas = $id");

  if ($query) {
    echo "<script>alert('Data petugas berhasil dihapus'); window.location.href = 'read.php'</script>";
  } else {
    echo "<script>alert('Data petugas gagal dihapus'); window.location.href = 'read.php'</script>";
  }
}
