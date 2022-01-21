<template>
  <q-layout view="lHh Lpr lFf">
    <main-menu />
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import MainMenu from "./components/MainMenu.vue";

export default {
  name: "LayoutDefault",
  components: {
    MainMenu,
  },
};
</script>
