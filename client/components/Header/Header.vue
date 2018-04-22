<template>
  <header class="bg-dark">
    <Navbar />
  </header>
</template>

<script>
import Navbar from "./Navbar";
export default {
  components: {
    Navbar
  }
};
</script>

<style>
header {
  border-bottom: 4px solid #00a6b8;
}
</style>