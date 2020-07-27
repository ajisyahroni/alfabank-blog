<template>
  <div>
    <v-row class="bg-color-hero">
      <v-col cols="6" class="ml-4">
        <v-img :src="require('../assets/img/hero.svg')"></v-img>
      </v-col>
      <v-col class="d-flex align-center">
        <div class="ml-5 white--text">
          <h1 class="text-h2 font-weight-bold">Alfa</h1>
          <h2 class="text-h3 my-2 font-weight-light">See Our Blogs</h2>
          <hr class="my-2" />
          <v-row class="d-flex">
            <v-col>
              <h1>12+</h1>
              <span class="font-weight-light">writter</span>
            </v-col>

            <v-col>
              <h1>100+</h1>
              <span class="font-weight-light">contents</span>
            </v-col>

            <v-col>
              <h1>78+</h1>
              <span class="font-weight-light">contributtor</span>
            </v-col>
          </v-row>
          <v-row>
            <v-btn @click="loginEmmiter()" block color="greenfy" rounded outlined>Login</v-btn>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  methods: {
    loginEmmiter() {
        this.$emit('Login')
    },
  },
};
</script>

<style scoped>
.bg-color-hero {
  position: relative;
  height: 100vh;
  background-image: linear-gradient(#21303d, #334c61);
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
}
</style>