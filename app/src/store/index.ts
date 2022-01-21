import { createStore } from "vuex";
import StudentModel from "@/models/StudentModel";
import studentsModule from "@/store/modules/students/index";

export default createStore({
  state() {
    return {
      modules: {
        students: studentsModule,
      },
    };
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    students(state: any) {
      return state.students;
    },
    hasStudents(state: any) {
      return state.students && state.students.length > 0;
    },
  },
});
