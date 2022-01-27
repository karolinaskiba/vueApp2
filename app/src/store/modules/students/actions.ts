export default {
  addNewStudent(context: any, studentData: any) {
    context.commit("addNewStudent", studentData);
  },
};
