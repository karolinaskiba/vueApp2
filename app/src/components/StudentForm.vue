<template>
  <div id="q-app">
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <q-input rounded outlined v-model="text" label="First Name"> </q-input>
        <q-input rounded outlined v-model="text" label="Last Name"> </q-input>
        <q-input rounded outlined v-model="text" label="Last Name"> </q-input>
        <div class="q-gutter-sm">
          <div><label>Szkoła</label></div>
          <q-radio v-model="shape" val="high" label="high" />
          <q-radio v-model="shape" val="primary" label="primary" />
          <q-radio v-model="shape" val="study" label="study" />
          <q-checkbox v-model="right" label="Label on Right"></q-checkbox>
           <q-checkbox v-model="test" label="test"></q-checkbox>
        </div>
      </div>
    </div>
    {{shape}} / {{right}} /test: {{test}}
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    return {
      shape: ref("primary"),
      right: ref(false),
        test: ref(false)
    };
  },
};
</script>
