import { CommunicatorTypeEnum } from "../enums/ComunicatorTypeEnum";
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  props: {
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },

    schoolName: {
      type: String,
      default: "",
    },
    grade: {
      type: Number,
      default: 0,
    },
    book: {
      type: String,
      default: "",
    },
    extension: {
      type: Boolean,
      default: false,
    },
    communicator: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
  },
  setup(props: any) {
    const route = useRoute();
    const communicatorName = computed(() => {
      if (props.communicator === CommunicatorTypeEnum.TEAMS) {
        return "TEAMS";
      } else if (props.communicator === CommunicatorTypeEnum.SKYPE) {
        return "SKYPE";
      } else if (props.communicator === CommunicatorTypeEnum.MEET) {
        return "MEET";
      }
      return true;
    });
    const studentPath = computed(() => {
      return route.path + "/" + props.id;
    });
    return {
      communicatorName,
      studentPath,
    };
  },
});
