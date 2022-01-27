<template>
  <div>
    <div class="q-pa-md q-gutter-md">
      <filter-students @change-filter="setFilters" />

      <q-list v-if="hasStudents" separator bordered class="rounded-borders">
        <student
          v-for="student in students"
          :key="student.id"
          :firstName="student.firstName"
          :lastName="student.lastName"
          :schoolName="student.schoolName"
          :grade="student.grade"
          :book="student.book"
          :extension="student.extension"
          :communicator="student.communicator"
          :id="student.id"
        />
      </q-list>
      <p v-else>{{ $t("messages.No students to display") }}</p>
    </div>
  </div>
</template>
<script>
import Student from "./Student.vue";
import FilterStudents from "./FilterStudents.vue";
import { SchoolTypeEnum } from "../enums/SchoolTypeEnum";
export default {
  data() {
    return {
      schools: ["1", "2", "3"],
    };
  },
  components: {
    Student,
    FilterStudents,
  },
  methods: {
    setFilters(schoolType) {
      this.schools = schoolType;
    },
  },
  computed: {
    students() {
      return this.$store.getters["students/students"].filter((student) => {
        if (student.schoolType === 1 && this.schools.includes("1"))
          return student;
        else if (student.schoolType === 2 && this.schools.includes("2"))
          return student;
        else if (student.schoolType === 3 && this.schools.includes("3"))
          return student;
        else false;
      });
    },
    hasStudents() {
      return this.$store.getters["students/hasStudents"];
    },
  },
};
</script>
