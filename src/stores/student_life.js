import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStudentLifeStore = defineStore('student_life',  {
    state: () => {
        const student_life = ref([
            {
                id: 1,
                title: "Beyound The Books! A Journey through Student Life",
                image: "../../public/Images/student life/cie-ptit-BEm3jm5YxBs-unsplash.jpg",
                description: "Explore the vibrant student life at our university, where academics meet adventure and friendships flourish.",
            },
            {
                id: 2,
                title: "Study. Work. Play. Repeat.",
                image: "../../public/Images/student life/damon-lam-gl-KCAEc7mo-unsplash.jpg",
                description: "A glimpse into the vibrant student life at our university.",
            },
            {
                id: 3,
                title: "Student Life: A Journey of Growth and Discovery",
                image: "../../public/Images/student life/divaris-shirichena-Q_efTZ4Jp3k-unsplash.jpg",
                description: "Experience the transformative journey of student life, where learning extends beyond the classroom and personal growth takes center stage."
            },
            {
                id: 4,
                title: "The Heartbeat of Campus Life",
                image: "../../public/Images/student life/inaki-del-olmo-NIJuEQw0RKg-unsplash.jpg",
                description: "Discover the vibrant heartbeat of campus life, where every moment is an opportunity for connection, learning, and unforgettable experiences.",
            },
            {
                id: 5,
                title: "The Pulse of Student Life: Where Learning Meets Adventure",
                image: "../../public/Images/student life/jonah-brown-l1iwe7l6-2Q-unsplash.jpg",
                description: "Experience the pulse of student life, where every day is an adventure filled with learning, growth, and unforgettable memories.",
            },
            {
                id: 6,
                title: "The Student Experience: A Journey of Discovery",
                image: "../../public/Images/student life/kae-ng-OyBhnt8XlZo-unsplash.jpg",
                description: "Embark on a journey of discovery through the student experience, where every moment is an opportunity to learn, grow, and connect with others.",
            },
            {
                id: 7,
                title: "Campus Chronicles: Stories of Student Life",
                image: "../../public/Images/student life/kojo-kwarteng-y-jrjUKYOsc-unsplash.jpg",
                description: "Explore the rich tapestry of campus life through the stories of students, where every experience adds a unique thread to the fabric of our university community.",
            },
            {
                id: 8,
                title: "The Student Journey: From Freshman to Graduate",
                image: "../../public/Images/student life/mche-lee-QBT5O-qS0yg-unsplash.jpg",
                description: "Experience the transformative journey of a student, from the excitement of freshman year to the accomplishments of graduation, and everything in between.",
            },
        {
                id: 9,
                title: "Student Life: A Tapestry of Experiences",
                image: "../../public/Images/student life/nazrin-babashova-zzOmEj3rQAE-unsplash.jpg",
                description: "Explore the diverse tapestry of student life, where every thread represents a unique experience, connection, and opportunity for growth.",
            },
        {
                id: 10,
                title: "Student Life: A Journey of Discovery and Growth",
                image: "../../public/Images/student life/priscilla-du-preez-ggeZ9oyI-PE-unsplash.jpg",
                description: "Experience the journey of student life, where discovery and growth go hand in hand, shaping individuals into well-rounded members of society.",
            },
        
        
        ])

        return{
            student_life,
        }
    }, 
    actions:{
        
    },
    persist: true,
})
