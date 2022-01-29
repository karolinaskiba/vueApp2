export default {
  addNewStudent(state: any, payload: any) {
    state.students.push(payload);
  },
  setStudents(state: any, payload: any) {
    state.students = payload;
  },
};
