<?php

if (count($_POST) > 0) {
  $kelas = $_POST["kelas"];
  $keahlian = $_POST["keahlian"];

  include "../koneksi.php";
  $query = mysqli_query($koneksi, "INSERT INTO kelas(nama_kelas, kompetensi_keahlian) VALUES ('$kelas', '$keahlian')");

  if ($query) {
    echo "<script>alert('Data kelas berhasil ditambahkan'); window.location.href = 'read.php'</script>";
  } else {
    echo "<script>alert('Data kelas gagal ditambahkan'); window.location.href = 'read.php'</script>";
  }
}
