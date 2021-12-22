<template>
  <div class="q-pa-md q-gutter-md">
    <p class="text-h4">{{ $t("Titles.Studenst List") }}</p>
  </div>
  <student />
</template>
<script lang="ts">
import Student from "./Student.vue";
export default {
  components: {
    Student,
  },
};
</script>
