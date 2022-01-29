<template>
  <q-header elevated class="bg-brand">
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        @click="$emit('openDrawer')"
        aria-label="Menu"
        icon="menu"
      />

      <q-toolbar-title> Karolina Uczy </q-toolbar-title>

      <div>
        <q-btn flat round dense icon="group_add" to="/new-student"></q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>
