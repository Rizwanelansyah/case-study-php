<?php
session_start();
if (!isset($_SESSION["level"])) {
  header("location: /auth-login-petugas.php?pesan=gagal");
}
?>

<?php require("../template/header.php"); ?>

<?php require("../template/navbar.php"); ?>

<?php require("../template/sidebar.php"); ?>

<?php
require("../koneksi.php");
?>

<!-- Main Content -->
<div class="main-content">
  <div class="container mt-5 w-50 p-5 border border-black">
    <form class="needs-validation d-flex flex-column align-items-center" action="action-create.php" method="POST">
      <h1 class="mb-5">Input Data Siswa</h1>
      <div class="w-100">
        <label for="nisn" class="form-label">NISN</label>
        <input type="text" class="form-control" id="nisn" name="nisn" required>
      </div>
      <div class="w-100">
        <label for="nis" class="form-label">NIS</label>
        <input type="text" class="form-control" id="nis" name="nis" required>
      </div>
      <div class="w-100">
        <label for="nama" class="form-label">Nama</label>
        <input type="text" class="form-control" id="nama" name="nama" required>
      </div>
      <select class="border border-black bg-white form-select w-100 my-5 p-2" name="kelas" required>
        <option disabled selected value>Kelas</option>
        <?php
        $query = mysqli_query($koneksi, "SELECT * FROM kelas ORDER BY nama_kelas");
        while ($data = mysqli_fetch_object($query)) {
        ?>

          <option value="<?= $data->id_kelas ?>"><?= "$data->nama_kelas $data->kompetensi_keahlian" ?></option>

        <?php } ?>
      </select>
      <div class="w-100">
        <label for="alamat" class="form-label">Alamat</label>
        <input type="text" class="form-control" id="alamat" name="alamat" required>
      </div>
      <div class="w-100">
        <label for="no_telp" class="form-label">No Telepon</label>
        <input type="text" class="form-control" id="no_telp" name="no_telp" required>
      </div>
      <select class="border border-black bg-white form-select w-100 my-5 p-2" name="spp" required>
        <option disabled selected value>SPP</option>
        <?php
        $query = mysqli_query($koneksi, "SELECT * FROM spp ORDER BY tahun");
        while ($data = mysqli_fetch_object($query)) {
        ?>

          <option value="<?= $data->id_spp ?>"><?= "($data->tahun) $data->nominal" ?></option>

        <?php } ?>
      </select>
      <button type="submit" class="btn btn-primary mt-5 w-50">Submit</button>
    </form>

  </div>
</div>

<?php require("../template/footer.php"); ?>
