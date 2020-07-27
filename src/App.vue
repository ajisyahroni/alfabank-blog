<template>
  <v-app id="inspire">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
  methods: {
    async allBlogs() {
      const url = "https://alfabank-blog.herokuapp.com/api/v1/blogs/all";
      let response_api = await fetch(url)
        .then((r) => r.json())
        .then((resp) => resp);

      let formated = this.$res(response_api);
      info(formated);
    },
  },
  mounted() {
    this.allBlogs();
    // setup();
    // let d = document.getElementById('inspire')
    // success(d,"some info",'dil','fail','success');
    // info("some success");
    // warn("some warn");
    // error("some error");

    let array = [
      {
        nama: "aji",
        usia: 22,
      },
      {
        usia: 22,
        nama: "syahroni",
      },
    ];
    // using global instance vue
    // this.$log.table(array)
    // using global windows
    // table(array)
  },
};
</script>
