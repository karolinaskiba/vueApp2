import { createStore } from "vuex";
import StudentModel from "@/models/StudentModel";
import studentsModule from "@/store/modules/students/index";

export default createStore({
  modules: {
    students: studentsModule,
  },
});
