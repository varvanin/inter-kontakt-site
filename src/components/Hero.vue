<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Perfektion ist, wenn immer Bauarbeiten im Gange</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.hero {
  float: right;
  width: 100%;
}

.hero-body {
    padding: 0rem 1.5rem;
}

.title {
  font-size: 6em;
  font-weight: 700;
  line-height: 1.125;
  width: 14em;
  margin-bottom: 0;
  padding: 1em 0 1em;
  color: #21211e;
}



@media screen and (max-width: 768px) {
    .hero{
        display: flex;
        align-items: center;
    }
    
    .title {
      font-size: 2.2rem;
      width: auto;
      padding: 0;

    }
}
</style>