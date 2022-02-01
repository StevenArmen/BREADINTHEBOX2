<template>

  <nav class="navbar fixed-top navbar-expand-lg navbar-dark " style="background-color:  rgba(0,0,0,0.9);">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> </a>
      <router-link class="navbar-brand" to="/"
        ><img
          src="https://static.wixstatic.com/media/930f4a_b615f2e811874c5da0e7438a06bc68f4~mv2.png/v1/crop/x_0,y_41,w_400,h_122/fill/w_420,h_128,al_c,lg_1,q_85/930f4a_b615f2e811874c5da0e7438a06bc68f4~mv2.webp"
          width="280"
          height="85"
          alt=""
      /></router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/breads"
              >Breads</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/gallery"
              >Gallery</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/books"
              >Tutorials</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/books"
              >Contact Us</router-link
            >
          </li>
        </ul>
        <!-- Right Side of Nav Bar -->
        <ul class="navbar-nav ms-auto">
          <a class="navbar-brand" href="#">
            <img
              src="@/assets/images/facebookIcon.png"
              width="50"
              height="50"
              alt=""
            />
          </a>
          <a class="navbar-brand" href="#">
            <img
              src="@/assets/images/008-eraser.png"
              width="30"
              height="30"
              alt=""
            />
          </a>

          <li v-if="auth" class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              to="/account"
              >My Account</router-link
            >
          </li>

           <li v-if="!auth" class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/login"
              ><button class="btn btn-warning">Login</button></router-link
            >
          </li>

          <li v-if="!auth" class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              to="/signup"
              ><button class="btn btn-outline-warning">
                Signup
              </button></router-link
            >
          </li>

          <li v-if="auth" class="nav-item">
            <button class="btn btn-warning" @click="onLogout">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    auth() {
      return this.$store.state.token;
    },
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style >
.navbar-dark .navbar-nav .nav-link.active, .navbar-dark .navbar-nav .show>.nav-link {
    color: #fff;
   font-size: 1.2rem;
}
.navbar {
background-color: rgba(255,255,255,0.5);
  padding:0px;
}
.nav a{
   font-size: 1.8em !important;
}
.navbar-nav {
  align-items: center;
  padding:0;
}
.navbar-inner {
    background:transparent;
}
.sticky-top { top: 0em; }
</style>