<?php

if (count($_POST) > 0) {
  $kelas = $_POST["kelas"];
  $keahlian = $_POST["keahlian"];
  $id = $_POST["id_kelas"];

  include "../koneksi.php";
  $query = mysqli_query($koneksi, "UPDATE kelas SET nama_kelas='$kelas', kompetensi_keahlian='$keahlian' WHERE id_kelas = $id");

  if ($query) {
    echo "<script>alert('Data kelas berhasil diubah'); window.location.href = 'read.php'</script>";
  } else {
    echo "<script>alert('Data kelas gagal diubah'); window.location.href = 'read.php'</script>";
  }
}
