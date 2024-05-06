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
    <form class="needs-validation d-flex flex-column align-items-center" action="action-update.php" method="POST">
      <h1 class="mb-5">Input Data Kelas</h1>
      <input type="text" style="display: none;" name="id_petugas" value="<?= $_GET['id_petugas']; ?>">
      <div class="w-100">
        <label for="username" class="form-label">Username</label>
        <input type="email" class="form-control" id="username" name="username" value="<?= $_GET["username"] ?>" required>
      </div>
      <div class="w-100">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" name="password">
      </div>
      <div class="w-100">
        <label for="nama_petugas" class="form-label">Nama Petugas</label>
        <input type="text" class="form-control" id="nama_petugas" name="nama_petugas" value="<?= $_GET["nama_petugas"] ?>" required>
      </div>
      <select class="border border-black bg-white form-select w-100 my-5 p-2" name="level" required>
        <option value="petugas" <?= ($_GET["level"] == "petugas") ? "selected" : "" ?>>Petugas</option>
        <option value="admin"<?= ($_GET["level"] == "admin") ? "selected" : "" ?>>Admin</option>
      </select>
      <button type="submit" class="btn btn-primary w-50">Submit</button>
    </form>

  </div>
</div>

<?php require("../template/footer.php"); ?>
