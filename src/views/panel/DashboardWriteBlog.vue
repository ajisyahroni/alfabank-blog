<template>
  <v-app>
    <h1 class="text-h3 font-weight-light">Dashboard Write Blog</h1>
    <v-container>
      <v-row>
        <!-- EDITOR PANE -->
        <v-col
          :xs="breakpoints.xs"
          :sm="breakpoints.sm"
          :md="breakpoints.md"
          :lg="breakpoints.lg"
          :xl="breakpoints.xl"
        >
          <v-text-field label="Title" clearable filled v-model="title"></v-text-field>
          <v-file-input ref="input" label="File input" filled v-model="cover"></v-file-input>

          <vue-editor v-model="content" />

          <v-switch v-model="autoPreview" label="enable auto preview"></v-switch>
        </v-col>

        <!-- PREVIEW PANE -->
        <v-col v-if="autoPreview">
          <!-- title -->
          <h1 class="text-5 font-weight-light" v-text="title"></h1>
          <v-subheader>
            <span v-text="nowadays"></span>
            <v-divider class="mx-4" inset vertical></v-divider>
            <span>by ajik</span>
          </v-subheader>
          <v-divider class="mb-4"></v-divider>
          <!-- end title -->

          <!-- content -->
          <div class="text-center">
            <v-img max-width="500" :src="coverPreview"></v-img>
          </div>

          <div class="mt-5" v-html="content"></div>
          <!-- end content -->
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
    VueEditor,
  },
  watch: {
    cover(fileImage) {
      if (fileImage) {
        this.coverPreview = URL.createObjectURL(fileImage);
      } else {
        this.coverPreview = "";
      }
    },
    autoPreview(boolean) {
      if (boolean) {
        console.log(boolean, "is on");
        // if autpreview is on
        // this.breakpoints.xs = 12;
        // this.breakpoints.sm = 12;

        this.breakpoints.md = 6;
        this.breakpoints.lg = 6;
        this.breakpoints.xl = 6;
      } else {
        // this.breakpoints.xs = 12;
        // this.breakpoints.sm = 12;

        this.breakpoints.md = 12;
        this.breakpoints.lg = 12;
        this.breakpoints.xl = 12;
      }
    },
  },
  data: () => ({
    nowadays: new Date().toDateString(),
    title: "Type your blog title",
    cover: null,
    coverPreview: "",
    content: null,
    // configuration state
    autoPreview: true,
    breakpoints: {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  }),
};
</script>

<style>
</style>