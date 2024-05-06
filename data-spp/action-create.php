<?php

if (count($_POST) > 0) {
  $tahun = $_POST["tahun"];
  $nominal = $_POST["nominal"];
  $keterangan = $_POST["keterangan"];

  include "../koneksi.php";
  $query = mysqli_query($koneksi, "INSERT INTO spp(tahun, nominal, keterangan) VALUES ('$tahun', '$nominal', '$keterangan')");

  if ($query) {
    echo "<script>alert('Data spp berhasil ditambahkan'); window.location.href = 'read.php'</script>";
  } else {
    echo "<script>alert('Data spp gagal ditambahkan'); window.location.href = 'read.php'</script>";
  }
}
