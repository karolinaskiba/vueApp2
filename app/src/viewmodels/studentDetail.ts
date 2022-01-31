import { SchoolTypeEnum } from "@/enums/SchoolTypeEnum";
import { CommunicatorTypeEnum } from "@/enums/ComunicatorTypeEnum";
import StudentDetailItem from "@/components/StudentDetailItem.vue";
import StudentModel from "@/models/StudentModel";

export default {
  props: ["id"],
  data() {
    return {
      selectedStudent: StudentModel,
    };
  },

  computed: {
    fullName(): string {
      return (
        this.selectedStudent.firstName + " " + this.selectedStudent.lastName
      );
    },
    schoolType(): string {
      if (this.selectedStudent.schoolType === SchoolTypeEnum.PRIMARY) {
        return "Szkoła podstawowa";
      } else if (this.selectedStudent.schoolType === SchoolTypeEnum.HIGH) {
        return "Szkoła srednia";
      } else if (
        this.selectedStudent.schoolType === SchoolTypeEnum.UNIWERSITY
      ) {
        return "Studia";
      } else {
        return "";
      }
    },
    communinicatorType(): string {
      if (this.selectedStudent.communicator === CommunicatorTypeEnum.SKYPE) {
        return "SKYPE";
      } else if (
        this.selectedStudent.communicator === CommunicatorTypeEnum.TEAMS
      ) {
        return "TEAMS";
      } else if (
        this.selectedStudent.communicator === CommunicatorTypeEnum.MEET
      ) {
        return "MEET";
      } else {
        return "";
      }
    },
    parent(): string {
      return (
        this.selectedStudent.parentName +
        " " +
        this.selectedStudent.parentPhoneNumber
      );
    },
  },
  created(): void {
    this.selectedStudent = this.$store.getters["students/students"].find(
      (student) => student.id === this.id
    );
  },
  components: {
    StudentDetailItem,
  },
};
