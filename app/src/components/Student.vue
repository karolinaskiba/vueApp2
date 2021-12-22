<template>
  <div id="q-app" style="min-height: 100vh">
    <div class="q-pa-md q-gutter-md">
      <q-list bordered class="rounded-borders">
        <q-item>
          <q-item-section avatar top>
            <q-icon name="person" color="black" size="34px"></q-icon>
          </q-item-section>

          <q-item-section top class="col-2 gt-sm">
            <q-item-label class="q-mt-sm">Karol Zajączkowski</q-item-label>
          </q-item-section>

          <q-item-section top>
            <q-item-label lines="1">
              <span class="text-weight-medium">Szkoła średnia klasa I </span>
              <span class="text-grey-8"></span>
            </q-item-label>
            <q-item-label caption lines="1"> Zbiór zadań: PAZDRO </q-item-label>
            <q-item-label
              lines="1"
              class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
            >
              <span>[ skype ]</span>
            </q-item-label>
          </q-item-section>

          <q-item-section top side>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn
                class="gt-xs"
                size="12px"
                flat
                dense
                round
                icon="delete"
              ></q-btn>
              <q-btn
                class="gt-xs"
                size="12px"
                flat
                dense
                round
                icon="done"
              ></q-btn>
              <q-btn size="12px" flat dense round icon="more_vert"></q-btn>
            </div>
          </q-item-section>
        </q-item>
        <q-separator spaced></q-separator>
      </q-list>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const name = ref("karolina");
    const age = ref(31);
    return {
      name,
      age,
    };
  },
};
</script>
