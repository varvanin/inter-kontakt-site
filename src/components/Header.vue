<template>
        <div class="header">
            <div class="container">
            <div class="logo">
                <g-link to="/"><g-image src="~/assets/img/logo.svg" width="200" /></g-link>
            </div>
                <nav>
                    <ul>
                    <li><g-link to="/">Startseite</g-link></li>
                    <li><g-link to="/about/">Über uns</g-link></li>
                    <li><g-link to="/works/">Arbeiten</g-link></li>
                    <li><g-link to="/contact/">Kontakt</g-link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script >
  export default {
    name: 'Timer',
    data() {
      return {
        fixed: true
      }
    }
  }
</script>

<style>

.header {
    height: 90px;
}


.logo {
    float: left;
    padding-top: 15px;
  }

  nav {
    float: right;
  }

  nav ul {
    //margin: 0;
    //list-style: none;
    //padding: 0;
  }

  nav>ul>li {
    display: inline-block;
    padding: 30px 17px 26px;
    position: relative;
  }

  nav ul li a {
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
  }

  nav ul li a.active {
    color: #009EE0;
  }
</style>