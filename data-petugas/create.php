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
        <label for="username" class="form-label">Username</label>
        <input type="email" class="form-control" id="username" name="username" required>
      </div>
      <div class="w-100">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" name="password" required>
      </div>
      <div class="w-100">
        <label for="nama_petugas" class="form-label">Nama Petugas</label>
        <input type="text" class="form-control" id="nama_petugas" name="nama_petugas" required>
      </div>
      <select class="border border-black bg-white form-select w-100 my-5 p-2" name="level" required>
        <option disabled selected value>Pilih Level</option>
        <option value="petugas">Petugas</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit" class="btn btn-primary w-50">Submit</button>
    </form>

  </div>
</div>

<?php require("../template/footer.php"); ?>
