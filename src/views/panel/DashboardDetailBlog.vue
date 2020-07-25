<template>
  <v-app>
    <v-container>
      <v-btn @click="destroyBlog()" color="error" outlined class="float-right">delete</v-btn>

      <!-- title -->
      <h1 class="text-5 font-weight-light">Take me by the hand</h1>

      <!-- subtitle -->
      <v-subheader>
        <span>25 juli</span>
        <v-divider class="mx-4" inset vertical></v-divider>
        <span>by ajik</span>
      </v-subheader>
      <v-divider class="mb-4"></v-divider>
      <!-- end subtitle -->

      <!-- content -->
      <div class="text-center">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"></v-img>
      </div>

      <!-- break -->
      <br />

      <div class="mt-5">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi provident assumenda veniam perferendis maiores quam iusto alias blanditiis, nam dicta, distinctio sint eveniet reprehenderit excepturi minima, id laudantium amet consequatur magni obcaecati tempora magnam asperiores ipsum! Quis qui repudiandae libero suscipit dolores, sit labore voluptatem cumque non neque corrupti deserunt alias ipsam beatae officiis, voluptates atque, doloremque quidem dolorem ducimus rem. Praesentium minima perspiciatis illo repellat? Laboriosam deserunt dicta alias placeat cum. Ab, cumque distinctio. Voluptate quo, nihil sapiente eaque animi sunt aliquam cum aut delectus aliquid ea doloremque ut molestias labore. Nesciunt animi commodi accusamus accusantium consequatur ea nemo.</p>
      </div>
      <!-- end content -->
    </v-container>
  </v-app>
</template>

<script>
export default {
  mounted() {
    console.log(this.$router);
  },
  methods:{
    destroyBlog(idBlog) {
      confirm('r u sure to delete this blog ?')
    },
  }
};
</script>

<style>
</style>