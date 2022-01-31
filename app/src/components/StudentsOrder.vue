<template>
  <q-card>
    <q-card-section>
      <h2 class="text-h5">Sortuj</h2>
      <q-separator inset></q-separator>
      <q-select v-model="order" :options="orders" label="Sortuj"> </q-select>
    </q-card-section>
    <q-card-section>
      <div class="q-gutter-sm"></div>
    </q-card-section>
  </q-card>
</template>
<script type="ts" src="@/viewmodels/studentsOrder.ts"></script>
