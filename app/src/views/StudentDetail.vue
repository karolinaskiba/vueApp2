<template>
  <div class="q-pa-md q-gutter-md">
    <h2 class="text-h3">{{ $t("Titles.Student") }}</h2>

    <div class="row justify-center">
      <div class="col-12">
        <q-card class="my-card">
          <q-card-section>
            <q-item-section avatar>
              <q-icon name="person" color="black" size="34px"></q-icon>
            </q-item-section>
            <div class="text-h6">{{ fullName }}</div>
            <div class="text-subtitle2">
              {{ schoolType }} nr {{ selectedStudent.schoolName }}
            </div>
          </q-card-section>
          <q-separator inset></q-separator>

          <q-list>
            <div class="row">
              <div class="col-6">
                <student-detail-item
                  :iconHeader="'KLASA'"
                  :iconName="'school'"
                  :iconText="selectedStudent.grade"
                />
                <student-detail-item
                  v-if="selectedStudent.extension"
                  :iconName="'emoji_events'"
                  :iconText="'*ROZSZERZENIE'"
                  :iconColor="'amber'"
                />
                <student-detail-item
                  :iconName="'menu_book'"
                  :iconHeader="'KSIĄŻKA'"
                  :iconText="selectedStudent.book"
                  :iconColor="'pink'"
                />
                <student-detail-item
                  :iconName="'share'"
                  :iconHeader="'KOMUNIKATOR'"
                  :iconText="communinicatorType"
                  :iconColor="purple"
                />
                <student-detail-item
                  :iconName="'phone'"
                  :iconHeader="'TELEFON'"
                  :iconText="selectedStudent.phoneNumber"
                  :iconColor="'green'"
                />
                <student-detail-item
                  :iconName="'email'"
                  :iconHeader="'EMAIL'"
                  :iconText="selectedStudent.emailAddress"
                  :iconColor="'red'"
                />
              </div>
              <div class="col-6">
                <student-detail-item
                  :iconName="'escalator_warning'"
                  :iconHeader="'RODZIC'"
                  :iconText="selectedStudent.parentName"
                  :iconColor="'teal'"
                />
                <student-detail-item
                  :iconName="'phone'"
                  :iconHeader="'NUMER KONTAKTOWY DO RODZICA'"
                  :iconText="selectedStudent.parentPhoneNumber"
                  :iconColor="'purple'"
                />
                <student-detail-item
                  :iconName="'info'"
                  :iconHeader="'INFORMACJE DODATKOWE'"
                  :iconText="selectedStudent.description"
                  :iconColor="'grey-9'"
                />
              </div>
            </div>
          </q-list>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>
import { SchoolTypeEnum } from "../enums/SchoolTypeEnum";
import { CommunicatorTypeEnum } from "../enums/ComunicatorTypeEnum";
import StudentDetailItem from "../components/StudentDetailItem.vue";

export default {
  props: ["id"],
  data() {
    return {
      selectedStudent: "",
    };
  },

  computed: {
    fullName() {
      return (
        this.selectedStudent.firstName + " " + this.selectedStudent.lastName
      );
    },
    schoolType() {
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
    communinicatorType() {
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
    parent() {
      return (
        this.selectedStudent.parentName +
        " " +
        this.selectedStudent.parentPhoneNumber
      );
    },
  },
  created() {
    this.selectedStudent = this.$store.getters["students/students"].find(
      (student) => student.id === this.id
    );
  },
  components: {
    StudentDetailItem,
  },
};
</script>
