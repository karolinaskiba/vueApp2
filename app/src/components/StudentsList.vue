<template>
  <div>
    <div class="q-pa-md q-gutter-md">
      <filter-students @change-filter="setFilters" />

      <q-list v-if="hasStudents" separator bordered class="rounded-borders">
        <student
          v-for="student in students"
          :key="student.id"
          :firstName="student.firstName"
          :lastName="student.lastName"
          :schoolName="student.schoolName"
          :grade="student.grade"
          :book="student.book"
          :extension="student.extension"
          :communicator="student.communicator"
          :id="student.id"
        />
      </q-list>
      <p v-else>{{ $t("messages.No students to display") }}</p>
    </div>
  </div>
</template>
<script type="ts" src="@/viewmodels/studentsList.ts"></script>
