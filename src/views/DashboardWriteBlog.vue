<template>
  <v-app>
    <h1 class="text-h3">Dashboard Write Blog</h1>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field label="Title" filled v-model="title"></v-text-field>
          <v-file-input ref="input" label="File input" filled v-model="cover"></v-file-input>

          <vue-editor v-model="content" />
        </v-col>
        <v-col>
          <h1 class="text-5">{{title}}</h1>
          <v-img :src="coverPreview"></v-img>
          <div v-html="content"></div>
        </v-col>
      </v-row>
      <v-btn bottom color="primary" dark fab fixed right @click="dialog = !dialog">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-container>
  </v-app>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  components: {
    VueEditor
  },
  watch: {
    cover(fileImage) {
      this.coverPreview = URL.createObjectURL(fileImage);
    }
  },
  data: () => ({
    title: "Type your blog title",
    cover: null,
    coverPreview: "",
    content: null
  })
};
</script>

<style>
</style>