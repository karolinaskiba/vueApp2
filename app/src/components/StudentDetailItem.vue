<template>
  <q-item>
    <q-item-section avatar>
      <q-icon :color="iconColor" :name="iconName"></q-icon>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ iconHeader }}</q-item-label>
      <q-item-label caption>{{ iconText }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
<script type="ts" src="@/viewmodels/studentDetailItem.ts"></script>
