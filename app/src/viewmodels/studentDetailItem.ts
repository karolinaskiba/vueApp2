import { defineComponent } from "vue";

export default defineComponent({
  props: {
    iconName: {
      type: String,
      default: "school",
    },
    iconHeader: {
      type: String,
      default: "",
    },
    iconText: {
      type: String,
      default: "",
    },
    iconColor: {
      type: String,
      default: "primary",
    },
  },
});
