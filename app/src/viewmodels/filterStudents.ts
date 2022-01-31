import { defineComponent, ref, watch } from "vue";
import { SchoolTypeEnum } from "@/enums/SchoolTypeEnum";
import { defineEmits } from "vue";

export default defineComponent({
  name: "FilterStudents",
  emits: ["change-filter"],

  setup(props, { emit }) {
    const schoolType = ref<string[]>([
      SchoolTypeEnum.PRIMARY.toString(),
      SchoolTypeEnum.HIGH.toString(),
      SchoolTypeEnum.UNIWERSITY.toString(),
    ]);
    watch(schoolType, (schoolType) => {
      emit("change-filter", schoolType);
    });
    return { schoolType };
  },
});
