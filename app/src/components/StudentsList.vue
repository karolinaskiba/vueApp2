<template>
  <div class="q-pa-md q-gutter-md">
    <p class="text-h4">{{ $t("Titles.Studenst List") }}</p>
    <div>
      <div class="q-pa-md q-gutter-md">
        <q-list separator bordered class="rounded-borders">
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
          />
        </q-list>
      </div>
    </div>
  </div>
</template>
<script>
import Student from "./Student.vue";

export default {
  components: {
    Student,
  },
  computed: {
    students() {
      return this.$store.state.students;
    },
  },
};
</script>
