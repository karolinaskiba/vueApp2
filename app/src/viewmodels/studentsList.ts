import Student from "@/components/Student.vue";
import FilterStudents from "@/components/FilterStudents.vue";
import StudentsOrder from "@/components/StudentsOrder.vue";

import { SchoolTypeEnum } from "../enums/SchoolTypeEnum";
import store from "../store/index";
import { defineComponent, ref, computed } from "vue";
import StudentModel from "@/models/StudentModel";

export default defineComponent({
  setup() {
    const error = ref("");
    const modalOpenErr = ref(false);
    const isLoading = ref(false);

    const schools = ref<string[]>([
      SchoolTypeEnum.PRIMARY.toString(),
      SchoolTypeEnum.HIGH.toString(),
      SchoolTypeEnum.UNIWERSITY.toString(),
    ]);

    const setFilters = (schoolType: string[]) => {
      schools.value = schoolType;
    };

    const setOrder = (order: any) => {
      console.log(order.value);
    };

    const hasStudents = computed(() => {
      return !isLoading.value && store.getters["students/hasStudents"];
    });

    async function loadingStudents() {
      isLoading.value = true;
      try {
        await store.dispatch("students/loadStudents");
      } catch (er) {
        error.value = er.message || "ERROR from loadingStudents";
        modalOpenErr.value = true;
      }

      isLoading.value = false;
    }

    loadingStudents();

    const students = computed(() => {
      const students = store.getters["students/students"];
      return students.filter((student: StudentModel) => {
        if (student.schoolType === 1 && schools.value.includes("1"))
          return student;
        else if (student.schoolType === 2 && schools.value.includes("2"))
          return student;
        else if (student.schoolType === 3 && schools.value.includes("3"))
          return student;
        else false;
      });
    });

    return {
      schools,
      setFilters,
      hasStudents,
      students,
      setOrder,
      loadingStudents,
      isLoading,
      modalOpenErr,
      error,
    };
  },

  components: {
    Student,
    FilterStudents,
    StudentsOrder,
  },
});
