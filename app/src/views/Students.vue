<template>
  <students-list />
  <p>{{ $t("message") }}</p>
</template>
<script lang="ts">
import StudentsList from "../components/StudentsList.vue";
export default {
  components: {
    StudentsList,
  },
};
</script>
