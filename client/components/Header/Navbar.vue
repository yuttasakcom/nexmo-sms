<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark container">
    <router-link to="/" tag="a" class="navbar-brand"><img :src="logo" height="32" alt="Nexmo"> Nexmo</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <router-link tag="li" to="/" class="nav-item active">
          <a class="nav-link" href="#">SMS <span class="sr-only">(current)</span></a>
        </router-link>
        <router-link tag="li" to="/client" class="nav-item">
          <a class="nav-link" href="#">Client <span class="sr-only">(current)</span></a>
        </router-link>
      </ul>
      <ul class="navbar-nav nav justify-content-end w-100">
        <router-link tag="li" to="/logout" class="nav-item active">
          <a class="nav-link" href="#">Logout <span class="sr-only">(current)</span></a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
import Logo from "@/public/images/Nexmo.png";

export default {
  computed: {
    logo() {
      return Logo;
    }
  }
};
</script>
