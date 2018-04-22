<template>
  <div class="mt-4">
    <ul class="nav nav-tabs">
      <li class="nav-item w-10">
        <a class="nav-link active" href="#">OTP <span class="badge badge-info">{{ otpCount }}</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Request <span class="badge badge-warning">{{ otpCountRequested }}</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Verify <span class="badge badge-success">{{ otpCountVerifyed }}</span></a>
      </li>
    </ul>

    <div class="table-responsive">
      <table class="table table-hover mt-2 text-center">
  <thead class="bg-info">
    <tr class="text-light">
      <th scope="col">No.</th>
      <th scope="col">Phone</th>
      <th scope="col">Code</th>
      <th scope="col">Status</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(otp, i) in loadedOtps" :key="otp.id">
      <th scope="row">{{ i + 1 }}</th>
      <td>{{ otp.phone }}</td>
      <td>{{ otp.code }}</td>
      <td :class='{"text-warning": isRequest(otp.status), "text-success": isVerifyed(otp.status)}'>{{ otp.status }}</td>
      <td>{{ otp.createdAt | date }}</td>
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

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "loadedOtps",
      "otpCount",
      "otpCountRequested",
      "otpCountVerifyed"
    ])
  },
  methods: {
    isRequest(status) {
      return status === "requested";
    },
    isVerifyed(status) {
      return status === "verifyed";
    }
  }
};
</script>