<template>
  <v-app>
    <side-navigation />
    <v-main>
      <v-container class="fill-height" fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideNavigation from "../components/SideNavigation";
export default {
  components: {
    SideNavigation
  }
};
</script>