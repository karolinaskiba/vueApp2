import StudentForm from "@/components/StudentForm.vue";
import router from "@/router/index";
import store from "@/store/index";

export default {
  components: {
    StudentForm,
  },
  methods: {
    saveData(student: any) {
      store.dispatch("students/addNewStudent", student);
      router.push("/students");
    },
  },
};
