import StudentForm from "@/components/StudentForm.vue";
import router from "@/router/index";
import store from "@/store/index";
import StudentModel from "@/models/StudentModel";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    StudentForm,
  },
  setup() {
    const saveData = function (student: StudentModel): void {
      store.dispatch("students/addNewStudent", student);
      router.push("/students");
    };
    return {
      saveData,
    };
  },
});
