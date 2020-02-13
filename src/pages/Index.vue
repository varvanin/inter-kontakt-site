<template>
  <Layout>
    <section class="section">
      <div class="container">
        <Hero />
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="box">
          <div class="columns home">
            <div class="column">
              <div class="home-img">
                <g-image src="~/assets/img/house.png" width="500" />
              </div>
            </div>
            <div class="column">
              <div class="ip-title">
                <h3>Introduce about<br /> Kons</h3>
              </div>
              <h4>Founded in Lebanon in 1967, Kons Construction Company (KCC) has grown to become
                one of the Middle East's leading construction contractors.</h4>
              <p>We specialise in complex and prestigious construction and infrastructure
                projects. Our portfolio includes some of the region’s most iconic landmarks,
                from super high-rise luxury developments, to five star hotels, hospitals and
                intricately sophisticated smart buildings. </p>
              <p>We have exacting HSE and sustainability standards and the health and safety of
                both our employees and the general public is given utmost priority.</p>
            </div>
          </div>
        </div>
      </div>
    </section>




  </Layout>
</template>

<script>
  import Hero from "~/components/Hero.vue";

  export default {
    metaInfo: {
      title: "Hello, world!"
    },
    components: {
      Hero
    }
  };
</script>

<style>
  .section {
    display: flex;
    flex-direction: row;
  }

  .box {
    min-height: 500px;
  }

  .home {
    padding-top: 2em;
  }

  .home-img {
    float: left;
    width: 100%;
  }

  .home-img img {
    width: 100%;
    padding: 25px;
    border: 1px solid #bfbfbf;
  }

  .ip-title h3 {
    font-size: 24px;
    font-weight: 700;
    position: relative;
    padding-left: 25px;
    margin-bottom: 60px;
    line-height: 32px;
  }

  .ip-title h3:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background-color: #ffa800
  }
</style>