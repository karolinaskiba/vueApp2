import StudentModel from "@/models/StudentModel";

export default {
  async addNewStudent(context: any, studentData: StudentModel) {
    const userId = context.rootGetters.userId;

    const response = await fetch(
      `https://korepetycje-204412-default-rtdb.firebaseio.com/students/${userId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(studentData),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      ///error
      console.log(responseData);
    }
    context.commit("addNewStudent", {
      ...studentData,
      id: userId,
    });
  },

  async loadStudents(context: any) {
    const response = await fetch(
      `https://korepetycje-204412-default-rtdb.firebaseio.com/students.json`
    );
    const responseData = await response.json();

    const studentsArr = [];
    if (!response.ok) {
      ///error
    }

    for (const key in responseData) {
      const student: StudentModel = {
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        schoolType: responseData[key].schoolType,
        schoolName: responseData[key].schoolName,
        grade: responseData[key].grade,
        book: responseData[key].book,
        extension: responseData[key].extension,
        communicator: responseData[key].communicator,
        id: key,
        phoneNumber: responseData[key].phoneNumber,
        emailAddress: responseData[key].emailAddress,
        parentName: responseData[key].parentName,
        parentPhoneNumber: responseData[key].parentPhoneNumber,
        description: responseData[key].description,
      };

      studentsArr.push(student);
    }
    context.commit("loadStudents", studentsArr);
  },
};
