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
              <a href="create.php" class="btn btn-success">Tambah Data Siswa</a>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered table-md">
                  <tr>
                    <th>#</th>
                    <th>NISN</th>
                    <th>NIS</th>
                    <th>Nama</th>
                    <th>Kelas</th>
                    <th>Alamat</th>
                    <th>No Telepon</th>
                    <th>SPP</th>
                    <th>Action</th>
                  </tr>
                  <?php
                  include "../koneksi.php";

                  $query = mysqli_query($koneksi, "SELECT * FROM siswa INNER JOIN kelas ON siswa.id_kelas = kelas.id_kelas INNER JOIN spp ON siswa.id_spp = spp.id_spp");
                  $nomor = 1;
                  $fmt = new NumberFormatter('id_ID', NumberFormatter::CURRENCY);

                  while ($data = mysqli_fetch_array($query)) {
                    $link_update = "update.php?";
                    $link_update .= "nisn=" . $data["nisn"];
                    $link_update .= "&nis=" . $data["nis"];
                    $link_update .= "&nama=" . $data["nama"];
                    $link_update .= "&id_kelas=" . $data["id_kelas"];
                    $link_update .= "&alamat=" . $data["alamat"];
                    $link_update .= "&no_telp=" . $data["no_telp"];
                    $link_update .= "&id_spp=" . $data["id_spp"];
                  ?>

                    <tr>
                      <td><?= $nomor++; ?></td>
                      <td><?= $data["nisn"]; ?></td>
                      <td><?= $data["nis"]; ?></td>
                      <td><?= $data["nama"]; ?></td>
                      <td><?= $data["nama_kelas"] . " " . $data["kompetensi_keahlian"]; ?></td>
                      <td><?= $data["alamat"]; ?></td>
                      <td><?= $data["no_telp"]; ?></td>
                      <td><?= "(" . $data["tahun"] . ") " . $fmt->formatCurrency($data["nominal"], "IDR"); ?></td>
                      <td style="width: 20%;">
                      <a class="btn btn-warning my-1" href="<?= $link_update; ?>">
                          Update
                        </a>
                        <a class="btn btn-danger my-1" href="action-delete.php?nisn=<?= $data["nisn"] ?>">Delete</a>
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
