import { SchoolTypeEnum } from "@/enums/SchoolTypeEnum";
import { CommunicatorTypeEnum } from "@/enums/ComunicatorTypeEnum";
import StudentDetailItem from "@/components/StudentDetailItem.vue";
import StudentModel from "@/models/StudentModel";
import { computed, defineComponent, reactive, ref } from "vue";
import store from "@/store/index";

export default defineComponent({
  props: ["id"],

  setup(props: any) {
    const selectedStudent = ref<StudentModel>(
      store.getters["students/students"].find(
        (student) => student.id === props.id
      )
    );

    const fullName = computed(
      () =>
        selectedStudent.value.firstName + " " + selectedStudent.value.lastName
    );

    const schoolType = computed(() => {
      if (selectedStudent.value.schoolType === SchoolTypeEnum.PRIMARY) {
        return "Szkoła podstawowa";
      } else if (selectedStudent.value.schoolType === SchoolTypeEnum.HIGH) {
        return "Szkoła srednia";
      } else if (
        selectedStudent.value.schoolType === SchoolTypeEnum.UNIWERSITY
      ) {
        return "Studia";
      } else {
        return "";
      }
    });
    const parent = computed(() => {
      return (
        selectedStudent.value.parentName +
        " " +
        selectedStudent.value.parentPhoneNumber
      );
    });
    return {
      selectedStudent,
      fullName,
      schoolType,
      parent,
    };
  },
  components: {
    StudentDetailItem,
  },
});
