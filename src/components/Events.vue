<script setup>
import {ref} from 'vue';

const events =ref([
    {
       name: 'Community Outreach Program',
        date: '2025-07-15',
        category: 'Making a difference.',
        image: '../../public/Images/events/outreach.jpg',
        location: 'Community Center, Nairobi'
    },
    {
         name: 'Annual Sports Day',     
        date: '2025-06-30',
        category: 'A day of fun and competition .',
        image: '../../public/Images/events/sport.jpg',
        location: 'University Sports Complex'
    },
      
     {
       name: 'Graduation Ceremony',
        date: '2025-07-25',
        category: 'Celebrating our graduates.',
        image: '../../public/Images/events/graduation.jpg',
        location:"University Auditorium"
    },
     {
       name: 'vc run for charity',
        date: '2025-08-10',
        category: 'Raise funds for local charities.',
        image: "../../public/Images/events/charity.jpg",
        location: 'University Campus'
    },

])
    
</script>

<template>
  <v-container>
    <v-row>
        <v-col md="4" v-for="event in events" :key="event">
            <v-card
    class="mx-auto"
    max-width="400"
    color="orange"
  >
    <v-img
      class="align-end text-white"
      height="200"
      :src="event.image"
      cover
    >
      <v-card-title>{{event.name}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      {{event.date}}
    </v-card-subtitle>

    <v-card-text>
      <div>{{event.location}}</div>

    
    </v-card-text>

    <v-card-actions>
      <v-btn color="black" :text="event.category"></v-btn>

     
    </v-card-actions>
  </v-card>

            </v-col>
            </v-row>
        </v-container>
</template>