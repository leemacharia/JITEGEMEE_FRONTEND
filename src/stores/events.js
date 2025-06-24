import { ref, computed } from 'vue'

import { defineStore } from 'pinia'

export const useEventsStore = defineStore('events', () => {
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

  return { events }
})