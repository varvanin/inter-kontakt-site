<template>
  <div class="footer">
    <div class="container">
      <span
        class="footer">Copyright © {{ new Date().getFullYear() }} IKPH Inter-Kontakt Projekt und Handel GmbH</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  margin: 0;
  background: #7090A5;
  height: 60px;
  padding: 15px;
}

.footer span {
  font-size: 1em;
  color: #fff;
}

.footer-logo {
  float: right;
  padding-top: 15px;
}
</style>