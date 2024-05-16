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
  <section class="section">
    <div class="section-header">
      <h1>Dashboard</h1>
    </div>
    <div class="section-body">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <a href="create.php" class="btn btn-success">Tambah Data SPP</a>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered table-md">
                  <tr>
                    <th>#</th>
                    <th>ID SPP</th>
                    <th>Tahun</th>
                    <th>Nominal</th>
                    <th>Keterangan</th>
                    <th>Action</th>
                  </tr>
                  <?php
                  include "../koneksi.php";
                  $query = mysqli_query($koneksi, "SELECT * FROM spp");
                  $nomor = 1;
                  while ($data = mysqli_fetch_array($query)) {
                  ?>

                    <tr>
                      <td><?= $nomor++; ?></td>
                      <td><?= $data["id_spp"]; ?></td>
                      <td><?= $data["tahun"]; ?></td>
                      <td><?= $data["nominal"]; ?></td>
                      <td><?= $data["keterangan"]; ?></td>
                      <td style="width: 20%;">
                      <a class="btn btn-warning my-1" href="update.php?id_spp=<?= $data["id_spp"]; ?>&tahun=<?= $data["tahun"]; ?>&nominal=<?= $data["nominal"]; ?>&keterangan=<?= $data["keterangan"]; ?>">
                          Update
                        </a>
                        <a class="btn btn-danger my-1" href="action-delete.php?id_spp=<?= $data["id_spp"] ?>">Delete</a>
                        <a class="btn btn-secondary my-1" href="#">Detail</a>
                      </td>
                    </tr>

                  <?php } ?>
                </table>
              </div>
            </div>
            <div class="card-footer text-right">
              <nav class="d-inline-block">
                <ul class="pagination mb-0">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1"><i class="fas fa-chevron-left"></i></a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="#">1 <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#"><i class="fas fa-chevron-right"></i></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<?php require("../template/footer.php"); ?>
