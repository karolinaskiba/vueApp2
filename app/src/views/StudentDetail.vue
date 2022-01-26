<template>
  <div class="q-pa-md q-gutter-md">
    <h2 class="text-h3">{{ $t("Titles.Student") }}</h2>

    <div class="row justify-center">
      <div class="col-8">
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
            <q-item>
              <q-item-section avatar>
                <q-icon color="deep-purple" name="school"></q-icon>
              </q-item-section>

              <q-item-section>
                <q-item-label>KLASA</q-item-label>
                <q-item-label caption>{{ selectedStudent.grade }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item v-if="selectedStudent.extension">
              <q-item-section avatar>
                <q-icon color="amber" name="emoji_events"></q-icon>
              </q-item-section>

              <q-item-section>
                <q-item-label> *ROZSZERZENIE </q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="red" name="menu_book"></q-icon>
              </q-item-section>

              <q-item-section>
                <q-item-label>KSIĄŻKA</q-item-label>
                <q-item-label caption>{{ selectedStudent.book }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="blue" name="share"></q-icon>
              </q-item-section>

              <q-item-section>
                <q-item-label>KOMUNIKATOR</q-item-label>
                <q-item-label caption>
                  {{ communinicatorType }}
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="green" name="phone"></q-icon>
              </q-item-section>

              <q-item-section>
                <q-item-label>TELEFON</q-item-label>
                <q-item-label caption>
                  {{ selectedStudent.phoneNumber }}
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="pink" name="email"></q-icon>
              </q-item-section>

              <q-item-section>
                <q-item-label>EMAIL</q-item-label>
                <q-item-label caption>
                  {{ selectedStudent.emailAddress }}
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon color="purple" name="escalator_warning"></q-icon>
              </q-item-section>

              <q-item-section>
                <q-item-label>RODZIC</q-item-label>
                <q-item-label caption>
                  {{ selectedStudent.parentName }}
                  {{ selectedStudent.parentPhoneNumber }}
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon color="blue-grey" name="info"></q-icon>
              </q-item-section>

              <q-item-section>
                <q-item-label>INFORMACJE DODATKOWE</q-item-label>
                <q-item-label caption>
                  {{ selectedStudent.description }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>
import { SchoolTypeEnum } from "../enums/SchoolTypeEnum";
import { CommunicatorTypeEnum } from "../enums/ComunicatorTypeEnum";

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
      } else if (this.selectedStudent.schoolType === SchoolTypeEnum.HIGHT) {
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
  },
  created() {
    this.selectedStudent = this.$store.getters["students/students"].find(
      (student) => student.id === this.id
    );
  },
};
</script>
