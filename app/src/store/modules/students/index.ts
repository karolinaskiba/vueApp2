import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import StudentModel from "@/models/StudentModel";

export default {
  namespaced: true,
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
  mutations,
  actions,
  getters,
};
