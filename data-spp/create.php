<?php
session_start();
if (!isset($_SESSION["level"])) {
  header("location: /auth-login-petugas.php?pesan=gagal");
}
?>

<?php require("../template/header.php"); ?>

<?php require("../template/navbar.php"); ?>

<?php require("../template/sidebar.php"); ?>\

<!-- Main Content -->
<div class="main-content">
  <div class="container mt-5 w-50 p-5 border border-black">
    <form class="needs-validation d-flex flex-column align-items-center" action="action-create.php" method="POST">
      <h1 class="mb-5">Input Data Siswa</h1>
      <div class="w-100">
        <label for="tahun" class="form-label">Tahun</label>
        <input type="number" class="form-control" id="tahun" name="tahun" min="0" required>
      </div>
      <div class="w-100">
        <label for="nominal" class="form-label">Nominal</label>
        <input type="number" class="form-control" id="nominal" name="nominal" min="0" required>
      </div>
      <div class="w-100">
        <label for="keterangan" class="form-label">Keterangan</label>
        <textarea type="text" class="form-control" id="keterangan" name="keterangan"></textarea>
      </div>
      <button type="submit" class="btn btn-primary mt-5 w-50">Submit</button>
    </form>

  </div>
</div>

<?php require("../template/footer.php"); ?>
