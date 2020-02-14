<template>
  <div class="footer">
    <div class="container">
      <span
        class="footer">© {{ new Date().getFullYear() }} IKPH Inter-Kontakt Projekt und Handel GmbH</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  margin: 0;
  background: #7090a5;
  height: 60px;
  padding: 15px;
}

span {
  font-size: 1em;
  color: #fff;
}

.footer-logo {
  float: right;
  padding-top: 15px;
}

@media screen and (max-width: 768px) {
  span {
    font-size: .7em;
    color: #fff;
    margin: 0;
  }
}
</style>