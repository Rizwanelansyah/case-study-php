<?php
if (count($_POST) > 0) {
  $id = $_POST["old_nisn"];
  $nisn = $_POST["nisn"];
  $nis = $_POST["nis"];
  $nama = $_POST["nama"];
  $id_kelas = $_POST["kelas"];
  $alamat = $_POST["alamat"];
  $no_telp = $_POST["no_telp"];
  $id_spp = $_POST["spp"];

  include "../koneksi.php";
  $query = mysqli_query($koneksi, "UPDATE siswa SET 
                                      nisn = '$nisn',
                                      nis = '$nis',
                                      nama = '$nama',
                                      id_kelas = $id_kelas,
                                      alamat = '$alamat',
                                      no_telp = '$no_telp',
                                      id_spp = $id_spp
                                      WHERE nisn = $id");

  if ($query) {
    echo "<script>alert('Data siswa berhasil diubah'); window.location.href = 'read.php'</script>";
  } else {
    echo "<script>alert('Data siswa gagal diubah'); window.location.href = 'read.php'</script>";
  }
}
