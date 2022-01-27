<template>
  <div class="q-pa-md q-gutter-md">
    <h2 class="text-h3">{{ $t("Titles.New Student") }}</h2>
    <div class="row justify-center">
      <div class="col-8">
        <q-card class="my-card q-pa-md">
          <student-form @saveData="saveData" />
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>
import StudentForm from "../components/StudentForm.vue";
export default {
  components: {
    StudentForm,
  },
  methods: {
    saveData(student) {
      this.$store.dispatch("students/addNewStudent", student);
    },
  },
};
</script>
