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
      <input style="display: none;" name="id_kelas" value="<?= $_GET["id_kelas"]; ?>">
      <div class="w-100">
        <label for="kelas" class="form-label">Nama Kelas</label>
        <input type="text" class="form-control" id="kelas" name="kelas" value="<?= $_GET["nama_kelas"] ?>" required>
      </div>
      <select class="border border-black bg-white form-select w-100 my-5 p-2" name="keahlian" required>
        <option disabled selected value>Pilih Kompetensi Kehalian</option>
        <?php
        $keahlian = ["RPL", "TAV", "DPIB", "TKRO", "TBSM"];
        foreach ($keahlian as $k) {
        ?>
          <option value="<?= $k ?>" <?= ($_GET["keahlian"] == $k) ? "selected" : "" ?>><?= $k ?></option>
        <?php } ?>
      </select>
      <button type="submit" class="btn btn-primary w-50">Submit</button>
    </form>
  </div>
</div>

<?php require("../template/footer.php"); ?>
