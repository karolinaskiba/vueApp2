import Student from "@/components/Student.vue";
import FilterStudents from "@/components/FilterStudents.vue";
import StudentsOrder from "@/components/StudentsOrder.vue";

import { SchoolTypeEnum } from "../enums/SchoolTypeEnum";
import store from "../store/index";
import { defineComponent, ref, computed } from "vue";
import StudentModel from "@/models/StudentModel";

export default defineComponent({
  setup() {
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
      return store.getters["students/hasStudents"];
    });
    store.dispatch("students/loadStudents");

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

    return { schools, setFilters, hasStudents, students, setOrder };
  },

  components: {
    Student,
    FilterStudents,
    StudentsOrder,
  },
});
