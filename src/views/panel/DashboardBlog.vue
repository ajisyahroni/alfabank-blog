<template>
  <v-app>
    <h1 class="text-h3 font-weight-light">Dashboard Blog</h1>
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
                <!-- read more button -->
                <v-btn
                  class="text-uppercase"
                  rounded
                  color="whitefy"
                  small
                  outlined
                  @click="detailBlog(i)"
                >Read More</v-btn>
                <!-- delete button -->
                <v-btn
                  class="text-uppercase"
                  rounded
                  color="error"
                  small
                  @click="destroyBlog(i)"
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
export default {
  methods: {
    detailBlog(idBlog) {
      this.$router.push({
        name: "DashboardDetailBlog",
        params: { id: idBlog },
      });
    },
    destroyBlog(idBlog) {},
  },
};
</script>

<style>
</style>