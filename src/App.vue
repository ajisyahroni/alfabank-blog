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
      fetch(url)
        .then((r) => r.json())
        // .then((resp) => res(resp));
    },
  },
  mounted() {
    this.allBlogs();
    // setup();
    let d = document.getElementById('inspire')
    success(d,"some info",'dil','fail','success');
    // success("some success");
    // warn("some warn");
    // error("some error");

    // let array = [{
    //   ara:'sdfa'
    // },{
    //   ara:'sfj',
    // }]
    // table(array)
  },
};
</script>
