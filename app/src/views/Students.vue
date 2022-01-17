<template>
  <div class="q-pa-md q-gutter-md">
    <h2 class="text-h3">{{ $t("Titles.Studenst List") }}</h2>
    <students-list />
  </div>
</template>
<script lang="ts">
import StudentsList from "../components/StudentsList.vue";
export default {
  components: {
    StudentsList,
  },
};
</script>
