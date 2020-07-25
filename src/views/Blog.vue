<template>
  <v-app>
    <v-toolbar color="#294053" class="white--text" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>
        <h2 class="font-weight-light">Alfablog</h2>
      </v-toolbar-title>
    </v-toolbar>
    <!-- using hero component -->
    <!-- hero using row -->
    <hero-component @Login="goToLogin" />
    <!-- end hero -->

    <!-- break -->
    <br />
    <br />
    <br />

    <!-- end break -->

    <v-container>
      <!-- <v-btn block @click="$router.push({name:'Login'})">Login</v-btn> -->

      <h2 class="text-h3 text-center my-5 font-weight-light">
        Useful
        <span class="spander px-2">Blogs</span>
      </h2>

      <!-- break -->
      <br />
      <!-- end break -->

      <v-row class="mt-5">
        <v-col v-for="i in 3" :key="i">
          <v-card class="mx-auto">
            <v-img
              gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
              src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
              class="white--text align-end"
            >
              <v-card-title>Title</v-card-title>
              <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>
              <v-card-actions>
                <v-btn
                  @click="goToDetail"
                  class="text-uppercase ma-0"
                  color="whitefy"
                  small
                  outlined
                >Read More</v-btn>
              </v-card-actions>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import HeroComponent from "../components/Hero";
export default {
  components: {
    HeroComponent,
  },
  methods: {
    goToDetail() {
      this.$router.push({ name: "DetailBlog" });
    },
    goToLogin(){
      this.$router.push({ name: "Login" });
    }
  },
};
</script>

<style scoped>
.spander {
  background-color: #e8f0f6;
  color: #459ae0;
  border-radius: 10%;
}
</style>