<template>
  <div class="mt-4">
    <ul class="nav nav-tabs">
  <li class="nav-item w-10">
    <a class="nav-link active" href="#">SMS <span class="badge badge-primary ml-2">3</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Requested <span class="badge badge-warning ml-2">2</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Verifyed <span class="badge badge-success ml-2">1</span></a>
  </li>
</ul>

    <div class="table-responsive">
      <table class="table table-hover mt-2">
  <thead class="bg-info">
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Phone</th>
      <th scope="col">Status</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>0958414685</td>
      <td class="text-warning">request</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>0984765647</td>
      <td class="text-success">verifyed</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>0874653285</td>
      <td class="text-warning">request</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>

    <nav class="justify-content-center d-flex mt-4">
      <ul class="pagination">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1">Previous</a>
        </li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
