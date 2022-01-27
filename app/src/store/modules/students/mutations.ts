export default {
  addNewStudent(state: any, payload: any) {
    console.log(state.students);
    state.students.push(payload);
  },
};
