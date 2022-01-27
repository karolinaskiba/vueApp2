<template>
  <q-form
    @submit.prevent="onSubmitStudent"
    @reset="onReset"
    class="q-gutter-md"
  >
    <div class="q-gutter-md">
      <q-input v-model="firstName" label="Imię"> </q-input>

      <q-input v-model="lastName" label="Nazwisko"> </q-input>

      <q-select
        v-model="schoolType"
        :options="schoolTypeOptions"
        label="Szkoła"
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
        />
      </div>

      <q-input v-model="schoolName" label="Nazwa szkoły"> </q-input>

      <q-input v-model="book" label="Książka"> </q-input>

      <q-toggle v-model="extension" label="Rozszerzenie" />

      <q-select
        v-model="communicator"
        :options="communicatorOptions"
        label="Komunikator"
      >
      </q-select>
      <q-input v-model="phoneNumber" label="Numer telefonu" type="tel">
      </q-input>
      <q-input v-model="emailAddress" label="Adres Email" type="email">
      </q-input>
      <q-input v-model="parentName" label="Rodzic"></q-input>
      <q-input
        v-model="parentPhoneNumber"
        type="tel"
        label="Numer telefonu do rodzica"
      >
      </q-input>
      <q-input v-model="description" label="Opis" type="textarea"> </q-input>
      <div>
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
  </q-form>
</template>
<script>
import StudentModel from "../models/StudentModel";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      schoolType: [],
      schoolName: "",
      grade: 0,
      extension: false,
      communicator: [],
      phoneNumber: "",
      emailAddress: "",
      parentName: "",
      parentPhoneNumber: "",
      description: "",
      schoolTypeOptions: [
        {
          label: "Szkoła podstawowa",
          value: "PRIMARY",
        },
        {
          label: "Szkoła średnia",
          value: "HIGH",
        },
        {
          label: "Studia",
          value: "UNIWERSITY",
        },
      ],
      gradeOptions: [],
      communicatorOptions: [
        {
          label: "TEAMS",
          value: "TEAMS",
        },
        {
          label: "SKYPE",
          value: "SKYPE",
        },
        {
          label: "MEET",
          value: "MEET",
        },
      ],
    };
  },
  methods: {
    onSubmitStudent() {
      let student = {
        firstName: this.firstName,
        lastName: this.lastName,
        schoolType: this.schoolType,
        schoolName: this.schoolName,
        grade: this.grade,
        book: this.book,
        extension: this.extension,
        communicator: this.communicator,
        id: "test",
        phoneNumber: this.phoneNumber,
        emailAddress: this.emailAddress,
        parentName: this.parentName,
        parentPhoneNumber: this.parentPhoneNumber,
        description: this.description,
      };
      this.$emit("saveData", student);
    },
    onReset() {
      this.firstName = "";
      this.lastName = "";
      this.schoolType = [];
      this.schoolName = "";
      this.grade = 0;
      this.extension = false;
      this.communicator = [];
      this.phoneNumber = "";
      this.emailAddress = "";
      this.parentName = "";
      this.parentPhoneNumber = "";
      this.description = "";
      this.student = {};
    },
  },
  watch: {
    schoolType() {
      if (this.schoolType.value === "PRIMARY") {
        this.gradeOptions = [
          {
            label: "1",
            value: 1,
          },
          {
            label: "2",
            value: 2,
          },
          {
            label: "3",
            value: 3,
          },
          {
            label: "4",
            value: 4,
          },
          {
            label: "5",
            value: 5,
          },
          {
            label: "6",
            value: 6,
          },
          {
            label: "7",
            value: 7,
          },
          {
            label: "8",
            value: 8,
          },
        ];
      } else if (this.schoolType.value === "UNIWERSITY") {
        this.gradeOptions = [];
      } else {
        this.gradeOptions = [
          {
            label: "1",
            value: 1,
          },
          {
            label: "2",
            value: 2,
          },
          {
            label: "3",
            value: 3,
          },
        ];
      }
    },
  },
};
</script>
