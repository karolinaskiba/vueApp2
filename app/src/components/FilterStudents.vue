<template>
  <q-card>
    <q-card-section>
      <h2 class="text-h5">Poziomy</h2>
      <q-separator inset></q-separator>
    </q-card-section>
    <q-card-section>
      <div class="q-gutter-sm">
        <q-checkbox
          v-model="schoolType"
          val="1"
          label="Szkoła podstawowa"
        ></q-checkbox>
        <q-checkbox
          v-model="schoolType"
          val="2"
          label="Szkoła średnia"
        ></q-checkbox>
        <q-checkbox v-model="schoolType" val="3" label="Studia"></q-checkbox>
      </div>
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  emits: ["change-filter"],
  data() {
    return {
      schoolType: ["1", "2", "3"],
    };
  },
  watch: {
    schoolType() {
      this.$emit("change-filter", this.schoolType);
    },
  },
};
</script>
