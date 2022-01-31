import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "studentsOrder",

  setup(props, { emit }) {
    const order = ref("Sortuj");
    watch(order, (order) => {
      emit("change-order", order);
    });
    const orders = [
      {
        label: "Imię",
        value: "firstName",
      },
      {
        label: "Nazwisko",
        value: "lastName",
      },
      {
        label: "Nazwa szkoły",
        value: "schoolName",
      },
    ];

    return {
      orders,
      order,
    };
  },
});
