import MainHeader from "@/components/MainHeader.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LayoutDefault",
  setup() {
    const leftDrawerOpen = ref(false);
    const openDrawer = () => {
      leftDrawerOpen.value = leftDrawerOpen.value ? false : true;
    };
    return { leftDrawerOpen, openDrawer };
  },
  components: {
    MainHeader,
  },
});
