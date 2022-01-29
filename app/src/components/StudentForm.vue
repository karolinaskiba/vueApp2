<template>
  <q-form
    @submit.prevent="onSubmitStudent"
    @reset="onReset"
    class="q-gutter-md"
  >
    <div class="q-gutter-md">
      <div class="row">
        <div class="col-6 q-pa-md">
          <q-input
            v-model="firstName"
            label="Imię"
            :rules="[(val) => !!val || 'Pole jest wymagane']"
          >
          </q-input>

          <q-input
            v-model="lastName"
            label="Nazwisko"
            :rules="[(val) => !!val || 'Pole jest wymagane']"
          >
          </q-input>

          <q-select
            v-model="schoolType"
            :options="schoolTypeOptions"
            label="Szkoła"
            :rules="[(val) => !!val || 'Pole jest wymagane']"
          >
          </q-select>
          <div v-if="gradeOptions.length !== 0" class="q-my-lg">
            <q-label>Klasa</q-label>
            <q-option-group
              class="q-mt-md"
              v-model="grade"
              :options="gradeOptions"
              inline
              dense
              :rules="[(val) => !!val || 'Pole jest wymagane']"
            />
          </div>

          <q-input v-model="schoolName" label="Nazwa szkoły"> </q-input>

          <q-input v-model="book" label="Książka"> </q-input>

          <q-toggle v-model="extension" label="Rozszerzenie" />

          <q-select
            v-model="communicator"
            :options="communicatorOptions"
            label="Komunikator"
            :rules="[(val) => !!val || 'Pole jest wymagane']"
          >
          </q-select>
        </div>
        <div class="col-6 q-pa-md">
          <q-input
            v-model="phoneNumber"
            mask="### - ### - ####"
            label="Numer telefonu"
            type="tel"
            :rules="[
              (val) => val.length > 9 || 'Wprowadz poprawny nr telefonu',
              (val) => !!val || 'Pole jest wymagane',
            ]"
          >
          </q-input>

          <q-input v-model="emailAddress" label="Adres Email" type="email">
          </q-input>
          <q-input v-model="parentName" label="Rodzic"></q-input>
          <q-input
            v-model="parentPhoneNumber"
            mask="### - ### - ####"
            type="tel"
            label="Numer telefonu do rodzica"
            :rules="[
              (val) => val.length > 9 || 'Wprowadz poprawny nr telefonu',
            ]"
          >
          </q-input>
          <q-input v-model="description" label="Opis" type="textarea">
          </q-input>
          <div class="q-my-md">
            <q-btn label="Zapisz" type="submit" color="primary" />
            <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
        </div>
      </div>
    </div>
  </q-form>
</template>
<script type="ts" src="@/viewmodels/studentForm.ts"></script>
