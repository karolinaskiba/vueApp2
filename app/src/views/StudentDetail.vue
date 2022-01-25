<template>
  <div class="q-pa-md q-gutter-md">
    <h2 class="text-h3">{{ $t("Titles.Student") }}</h2>
    <h3>Jan Kowalski</h3>
    <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/parallax2.jpg" />

      <q-list>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="primary" name="local_bar"></q-icon>
          </q-item-section>

          <q-item-section>
            <q-item-label>Bar XYZ</q-item-label>
            <q-item-label caption>Have a drink.</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="red" name="local_gas_station"></q-icon>
          </q-item-section>

          <q-item-section>
            <q-item-label>Gas Station</q-item-label>
            <q-item-label caption>Fill your gas tank.</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="amber" name="local_movies"></q-icon>
          </q-item-section>

          <q-item-section>
            <q-item-label>Cinema XYZ</q-item-label>
            <q-item-label caption>Watch a movie.</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </div>
</template>
<script lang="ts"></script>
