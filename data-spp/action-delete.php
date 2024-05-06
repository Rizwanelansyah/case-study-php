<?php

if (isset($_GET["id_spp"])) {
  $id = $_GET["id_spp"];
  include "../koneksi.php";
  $query = mysqli_query($koneksi, "DELETE FROM spp WHERE id_spp = $id");

  if ($query) {
    echo "<script>alert('Data spp berhasil dihapus'); window.location.href = 'read.php'</script>";
  } else {
    echo "<script>alert('Data spp gagal dihapus'); window.location.href = 'read.php'</script>";
  }
}
