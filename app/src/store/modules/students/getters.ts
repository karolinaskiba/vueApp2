export default {
  students(state: any) {
    return state.students;
  },
  hasStudents(state: any) {
    return state.students && state.students.length > 0;
  },
};
