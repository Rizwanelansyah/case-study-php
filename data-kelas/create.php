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
      <h1 class="mb-5">Input Data Kelas</h1>
      <div class="w-100">
        <label for="kelas" class="form-label">Nama Kelas</label>
        <input type="text" class="form-control" id="kelas" name="kelas" required>
      </div>
      <select class="border border-black bg-white form-select w-100 my-5 p-2" name="keahlian" required>
        <option disabled selected value>Pilih Kompetensi Kehalian</option>
        <option value="RPL 1">RPL 1</option>
        <option value="RPL 2">RPL 2</option>
        <option value="RPL 3">RPL 3</option>
      </select>
      <button type="submit" class="btn btn-primary w-50">Submit</button>
    </form>

  </div>
</div>

<?php require("../template/footer.php"); ?>
