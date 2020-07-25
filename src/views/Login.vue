<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <h2 class="text-h3 text-center my-5 font-weight-light">
          Login
          <span class="spander px-2">Contributtor</span>
        </h2>

        <v-card flat>
          <!-- <v-toolbar
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>-->
          <v-card-text>
            <v-form>
              <v-text-field label="Login" name="login" prepend-icon="mdi-account" type="text"></v-text-field>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-btn @click="loginUser()" outlined rounded block color="primary">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    loginUser() {
      this.$router.push({ name: "DashboardBlog" });
    },
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