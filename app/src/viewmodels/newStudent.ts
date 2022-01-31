import StudentForm from "@/components/StudentForm.vue";
import router from "@/router/index";
import store from "@/store/index";
import StudentModel from "@/models/StudentModel";

export default {
  components: {
    StudentForm,
  },
  methods: {
    saveData(student: StudentModel): void {
      store.dispatch("students/addNewStudent", student);
      router.push("/students");
    },
  },
};
