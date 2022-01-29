export default {
  async addNewStudent(context: any, studentData: any) {
    const userId = new Date().toString();

    const response = await fetch(
      `https://korepetycje-204412-default-rtdb.firebaseio.com/students/${userId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(studentData),
      }
    );
    //const responseData = await response.json();
    if (!response.ok) {
      ///error
    }
    context.commit("addNewStudent", {
      ...studentData,
      id: userId,
    });
  },
  async loadStudents(context: any, payload: any) {
    const response = await fetch(
      `https://korepetycje-204412-default-rtdb.firebaseio.com/students.json`
    );
    const responseData = await response.json();
    if (!response.ok) {
      ///error
    }
    context.commit("loadStudents", responseData);
  },
};
