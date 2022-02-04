<template>
  <q-layout view="lHh Lpr lFf">
    <main-menu />
    <q-page-container>
      <div id="spinner"></div>
      <transition
        enter-active-class="animated slideInUp"
        leave-active-class="animated slideOutDown"
      >
        <router-view></router-view>
      </transition>
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
<style lang="scss" scoped>
.slideInUp,
.slideOutDown {
  animation-duration: 0.7s;
}
</style>
