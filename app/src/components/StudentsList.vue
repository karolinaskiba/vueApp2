<template>
  <div>
    <div class="q-pa-md q-gutter-md">
      <filter-students @change-filter="setFilters" />
      <!-- <students-order @change-order="setOrder" /> -->

      <teleport to="#spinner">
        <div v-if="isLoading">
          <base-spinner />
        </div>
      </teleport>

      <div v-if="!isLoading">
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
        <q-dialog v-model="modalOpenErr">
          <q-card style="width: 300px">
            <q-card-section>
              <div class="text-h6">ERROR!!!</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              {{ error }}
            </q-card-section>

            <q-card-actions align="right" class="bg-white text-teal">
              <q-btn flat label="OK" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </div>
  </div>
</template>
<script type="ts" src="@/viewmodels/studentsList.ts"></script>
