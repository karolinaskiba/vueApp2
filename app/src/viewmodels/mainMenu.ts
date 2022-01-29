import MainHeader from "@/components/MainHeader.vue";

export default {
  name: "LayoutDefault",
  components: {
    MainHeader,
  },
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  methods: {
    openDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
  },
};
