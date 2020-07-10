<template>
  <v-app>
    <h1 class="text-h3">Dashboard Blog</h1>
    <v-container>
      <v-row>
        <v-col v-for="i in 10" :key="i">
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
                class="text-uppercase ma-0"
                color="primary"
                small
              >Read More</v-btn>
              <v-btn
                class="text-uppercase ma-0"
                color="error"
                small
              >delete</v-btn>
            </v-card-actions>
          </v-img>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
</style>