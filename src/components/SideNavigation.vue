<template>
  <v-navigation-drawer app v-model="drawer" :mini-variant.sync="mini" permanent>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>John Leider</v-list-item-title>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link @click="route(item.route)">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  methods: {
    route(address) {
      this.$router.push({ name: address });
    }
  },
  data() {
    return {
      drawer: true,
      items: [
        { title: "Blog", icon: "mdi-home-city", route: "DashboardBlog" },
        { title: "Write blog", icon: "mdi-account", route: "DashboardWriteBlog" },
        { title: "Logout", icon: "mdi-account-group-outline", route: "LandingPage" }
      ],
      mini: true
    };
  }
};
</script>

<style>
</style>