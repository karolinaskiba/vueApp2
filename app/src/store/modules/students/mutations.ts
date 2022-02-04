export default {
  addNewStudent(state: any, payload: any) {
    state.students.push(payload);
  },
  loadStudents(state: any, payload: any) {
    state.students = payload;
  },
};
