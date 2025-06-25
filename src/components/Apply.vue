<script setup>
import { useCoursesStore } from '../stores/courses'
import {ref} from 'vue'

const coursesStore = useCoursesStore()
const courses= coursesStore.courses

const selectedCourse = courses.find(course => course.id == coursesStore.selectedCourse)

// models to uniquely identify each text field
const firstName = defineModel('firstName')
const middleName = defineModel('middleName')
const lastName = defineModel('lastName')
const emailAddress = defineModel('emailAddress')
const phoneNumber = defineModel('phoneNumber')
const physicalAddress = defineModel ('physcicalAddress')
const gender = defineModel ('gender')
const dateOfBirth = defineModel ('dateOfBirth')
const nationality = defineModel ('nationality')

// creating objects to hold the form data
const applicationFormDetails = ref({
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    emailAddress: emailAddress,
    phoneNumber: phoneNumber,
    physicalAddress: physicalAddress,
    gender: gender,
    dateOfBirth: dateOfBirth,
    nationality: nationality,
    course:selectedCourse
})

//function to save data
function saveData(){
    for(let item in applicationFormDetails.value){
        console.log(applicationFormDetails.value[item])
    }
}
</script>

<template>
  <v-container>
    <v-row>
        <p>You are applying for {{ selectedCourse.name }}, the next intake is in {{ selectedCourse.intake }}</p>
    </v-row>
  </v-container>

  <!-- Application Form -->
   <v-container>
    <v-row>
        <v-col md="4">
            <v-text-field label="First Name" v-model="firstName"> </v-text-field>
        </v-col>
        <v-col md="4">
            <v-text-field label="Middle Name"v-model="middleName" > </v-text-field>
        </v-col>
        <v-col md="4">
            <v-text-field label="Last Name" v-model="lastName"> </v-text-field>
        </v-col>
    </v-row>

    <v-row>
        <v-col md="4">
            <v-text-field label="Email Address"v-model="emailAddress" > </v-text-field>
        </v-col>
        <v-col md="4">
            <v-text-field label="Phone Number" v-model="phoneNumber"> </v-text-field>
        </v-col>
        <v-col md="4">
            <v-text-field label="Physical Address" v-model="physicalAddress"> </v-text-field>
        </v-col>
    </v-row>

    <v-row>
        <v-col md="4">
            <v-text-field label="Gender" v-model="gender"> </v-text-field>
        </v-col>
        <v-col md="4">
            <v-text-field label="Date Of Birth" v-model="dateOfBirth"> </v-text-field>
        </v-col>
        <v-col md="4">
            <v-text-field label="Nationality"v-model="nationality" > </v-text-field>
        </v-col>
    </v-row>
<v-row>
    <v-btn block color="orange" @click="saveData()">Submit</v-btn>
</v-row>
   </v-container>
</template>
