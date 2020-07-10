<template>
  <v-container>
    <v-card class="elevation-12">
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>Login form</v-toolbar-title>
      </v-toolbar>
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
        <v-btn @click="loginUser()" block color="primary">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  methods: {
    loginUser() {
      this.$router.push({ name: "Dashboard" });
    }
  }
};
</script>

<style>
</style>