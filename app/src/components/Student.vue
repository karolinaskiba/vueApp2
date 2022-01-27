<template>
  <q-item>
    <q-item-section avatar top>
      <q-icon name="person" color="black" size="34px"></q-icon>
    </q-item-section>

    <q-item-section top class="col-2 gt-sm">
      <q-item-label class="q-mt-sm">
        {{ firstName }} {{ lastName }}
      </q-item-label>
    </q-item-section>

    <q-item-section top>
      <q-item-label lines="1">
        <span class="text-weight-medium">
          Szkoła {{ schoolName }} klasa {{ grade }}
          <span v-if="extension"> [ *rozrzerzenie ]</span>
        </span>
        <span class="text-grey-8"></span>
      </q-item-label>
      <q-item-label caption lines="1"> Zbiór zadań: {{ book }} </q-item-label>
      <q-item-label
        lines="1"
        class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
      >
        <span>{{ communicatorName }} </span>
      </q-item-label>
    </q-item-section>

    <q-item-section top side>
      <div class="text-grey-8 q-gutter-xs">
        <q-btn class="gt-xs" size="12px" flat dense round icon="delete"></q-btn>
        <q-btn class="gt-xs" size="12px" flat dense round icon="edit"></q-btn>
        <q-btn
          size="12px"
          flat
          dense
          round
          icon="list"
          :to="studentPath"
        ></q-btn>
      </div>
    </q-item-section>
  </q-item>
</template>
<script lang="ts">
import { CommunicatorTypeEnum } from "../enums/ComunicatorTypeEnum";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
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
    let communicatorName = computed(() => {
      if (props.communicator === CommunicatorTypeEnum.TEAMS) {
        return "TEAMS";
      } else if (props.communicator === CommunicatorTypeEnum.SKYPE) {
        return "SKYPE";
      } else if (props.communicator === CommunicatorTypeEnum.MEET) {
        return "MEET";
      }
      return true;
    });
    let studentPath = computed(() => {
      return route.path + "/" + props.id;
    });
    return {
      communicatorName,
      studentPath,
    };
  },
};
</script>
