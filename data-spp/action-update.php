<?php

if (count($_POST) > 0) {
  $tahun = $_POST["tahun"];
  $nominal = $_POST["nominal"];
  $keterangan = $_POST["keterangan"];
  $id = $_POST["id_spp"];

  include "../koneksi.php";
  $query = mysqli_query($koneksi, "UPDATE spp SET tahun = $tahun, nominal = $nominal, keterangan = '$keterangan' WHERE id_spp = $id");

  if ($query) {
    echo "<script>alert('Data spp berhasil diubah'); window.location.href = 'read.php'</script>";
  } else {
    echo "<script>alert('Data spp gagal diubah'); window.location.href = 'read.php'</script>";
  }
}
