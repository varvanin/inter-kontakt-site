<template>
  <div class="header">
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <div class="logo">
            <g-link to="/">
              <g-image src="~/assets/img/logo.svg" width="200" />
            </g-link>
          </div>
          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            @click="isOpen = !isOpen"
            v-bind:class="{'is-active': isOpen}"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu" v-bind:class="{'is-active': isOpen}">
          <div class="navbar-end">
            <g-link to="/">Startseite</g-link>
            <g-link to="/about/">Über uns</g-link>
            <g-link to="/about/">Referenzen</g-link>
            <g-link to="/about/">Angebot</g-link>
            <g-link to="/works/">Preise</g-link>
            <g-link to="/contact/">Impressum</g-link>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script >
export default {
    data: function() {
        return {
            isOpen: true
        }
    }
}
</script>

<style>
.header {
  //height: 90px;
}

.logo {
  padding-top: 15px;
}

.navbar {
  background: none;
}

.navbar-menu {
  padding: 30px 17px 26px;
}

.navbar-end {
  text-align: center;
}


.navbar-burger {
  background:  #475c69;
  margin: 26px 0 0 135px;
    
}
.navbar-burger:hover {
  background:#009EE0;
}


a {
  display: block;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.5em;
}

a.active {
  color: #009ee0;
}
</style>