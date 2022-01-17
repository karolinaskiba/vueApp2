import { createStore } from "vuex";
import StudentModel from "@/models/StudentModel";

export default createStore({
  state() {
    return {
      students: <StudentModel[]>[
        {
          firstName: "Karolina",
          lastName: "Skiba",
          schoolType: 1,
          schoolName: "v",
          grade: 1,
          book: "Pazdro",
          extension: true,
          communicator: 1,
          id: 0,
        },
        {
          firstName: "Karo",
          lastName: "Skiba",
          schoolType: 2,
          schoolName: "vi",
          grade: 1,
          book: "Oficyna",
          extension: false,
          communicator: 2,
          id: 2,
        },
      ],
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
