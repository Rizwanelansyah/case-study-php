<?php

if (count($_POST) >= 7) {
  $nisn = $_POST["nisn"];
  $nis = $_POST["nis"];
  $nama_siswa = $_POST["nama"];
  $id_kelas = $_POST["kelas"];
  $alamat = $_POST["alamat"];
  $no_telp = $_POST["no_telp"];
  $id_spp = $_POST["spp"];

  include "../koneksi.php";
  $query = mysqli_query($koneksi, "INSERT INTO siswa(nisn, nis, nama, id_kelas, alamat, no_telp, id_spp) VALUES
                                     ('$nisn', '$nis', '$nama_siswa', $id_kelas, '$alamat', '$no_telp', $id_spp)");

  if ($query) {
    echo "<script>alert('Data siswa berhasil ditambahkan'); window.location.href = 'read.php'</script>";
  } else {
    echo "<script>alert('Data siswa gagal ditambahkan'); window.location.href = 'read.php'</script>";
  }
}
