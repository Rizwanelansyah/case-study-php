<?php
session_start();
if (!isset($_SESSION["level"])) {
  header("location: /auth-login-petugas.php?pesan=gagal");
}
?>

<?php require("../template/header.php"); ?>

<?php require("../template/navbar.php"); ?>

<?php require("../template/sidebar.php"); ?>

<?php require("../koneksi.php"); ?>

<!-- Main Content -->
<div class="main-content">
  <div class="container mt-5 w-50 p-5 border border-black">
    <form class="needs-validation d-flex flex-column align-items-center" action="action-create.php" method="POST">
      <h1 class="mb-5">Input Transaksi Pembayaran</h1>
      <input style="display: none;" name="id_petugas" value="<?= $_SESSION["id"] ?>" disabled>
      <div class="form-group">
        <select name="nisn">
          <option selected disabled>Pilih Siswa</option>
          <?php
          $query = mysqli_query($koneksi, "SELECT * FROM siswa");
          while ($data = mysqli_fetch_object($query)) {
          ?>
            <option value="<?= $data->nisn ?>"><?= $data->nama ?></option>
          <?php } ?>
          </select, "cssls">
      </div>
      <button type="submit" class="btn btn-primary w-50">Submit</button>
    </form>
  </div>
</div>

<?php require("../template/footer.php"); ?>
