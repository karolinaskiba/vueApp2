<template>
  <div class="q-pa-md q-gutter-md">
    <h2 class="text-h3">{{ $t("Titles.Student") }}</h2>

    <div class="row justify-center">
      <div class="col-8">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">{{ fullName }}</div>
            <div class="text-subtitle2">
              {{ schoolType }} nr {{ selectedStudent.schoolName }}
            </div>
          </q-card-section>
          <q-separator inset></q-separator>

          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon color="primary" name="local_bar"></q-icon>
              </q-item-section>

              <q-item-section>
                <q-item-label>Bar XYZ</q-item-label>
                <q-item-label caption>Have a drink.</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="red" name="local_gas_station"></q-icon>
              </q-item-section>

              <q-item-section>
                <q-item-label>Gas Station</q-item-label>
                <q-item-label caption>Fill your gas tank.</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies"></q-icon>
              </q-item-section>

              <q-item-section>
                <q-item-label>Cinema XYZ</q-item-label>
                <q-item-label caption>Watch a movie.</q-item-label>
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
  },
  created() {
    this.selectedStudent = this.$store.getters["students/students"].find(
      (student) => student.id === this.id
    );
  },
};
</script>
