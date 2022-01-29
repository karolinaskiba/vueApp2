import Student from "@/components/Student.vue";
import FilterStudents from "@/components/FilterStudents.vue";
import { SchoolTypeEnum } from "../enums/SchoolTypeEnum";
import store from "../store/index";
export default {
  data() {
    return {
      schools: ["1", "2", "3"],
    };
  },
  components: {
    Student,
    FilterStudents,
  },
  methods: {
    setFilters(schoolType) {
      this.schools = schoolType;
    },
  },
  computed: {
    students() {
      return store.getters["students/students"].filter((student) => {
        if (student.schoolType === 1 && this.schools.includes("1"))
          return student;
        else if (student.schoolType === 2 && this.schools.includes("2"))
          return student;
        else if (student.schoolType === 3 && this.schools.includes("3"))
          return student;
        else false;
      });
    },
    hasStudents() {
      return store.getters["students/hasStudents"];
    },
  },
};
