import { defineComponent, ref } from "vue";
import { SchoolTypeEnum } from "@/enums/SchoolTypeEnum";

export default defineComponent({
  name: "FilterStudents",
  emits: ["change-filter"],

  setup() {
    const schoolType = ref<string[]>([
      SchoolTypeEnum.PRIMARY.toString(),
      SchoolTypeEnum.HIGH.toString(),
      SchoolTypeEnum.UNIWERSITY.toString(),
    ]);
    return { schoolType };
  },

  watch: {
    schoolType() {
      this.$emit("change-filter", this.schoolType);
    },
  },
});
