<template>
  <div class="mt-4">
    <ul class="nav nav-tabs">
  <li class="nav-item w-10">
    <a class="nav-link active" href="#">Client <span class="badge badge-info ml-2">{{ loadedClientsCount }}</span></a>
  </li>
</ul>

    <div class="table-responsive">
      <table class="table table-hover mt-2 text-center">
  <thead class="bg-info">
    <tr class="text-light">
      <th scope="col">No.</th>
      <th scope="col">Name</th>
      <th scope="col">Client ID</th>
      <th scope="col">Client Secret</th>
      <th scope="col">Date</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(client, i) in loadedClients" :key="client.id">
      <th scope="row">{{ i + 1 }}</th>
      <td>{{ client.name }}</td>
      <td>8b6f23d7... <i class="fas fa-copy"></i></td>
      <td>5de0b14263a... <i class="fas fa-copy"></i></td>
      <td>{{ client.updatedAt | date }}</td>
      <td class="d-flex justify-content-center"><button class="btn btn-sm btn-dark mr-1"><i class="fas fa-edit"></i> Edit</button> <button class="btn btn-sm btn-danger"><i class="fas fa-trash-alt"></i> Remove</button></td>
    </tr>
  </tbody>
</table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["loadedClients", "loadedClientsCount"])
  }
};
</script>

