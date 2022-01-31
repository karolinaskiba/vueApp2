export default {
  emits: ["change-filter"],
  data() {
    return {
      schoolType: ["1", "2", "3"] as string[],
    };
  },
  watch: {
    schoolType() {
      this.$emit("change-filter", this.schoolType);
    },
  },
};
