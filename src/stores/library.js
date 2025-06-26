import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLibraryStore = defineStore('library',  {
    state: () => {
        const library = ref([
            {
                id: 1,
                title: "Phycology",
                image: "../../public/Images/ub/ub6.jpeg",
                description: "Phycology Concepts",
            },
            {
                id: 2,
                title: "Biology",
                image: "../../public/Images/ub/ub5.jpeg",
                description: "Modern Biology Interpretations",
            },  
             {
                id: 3,
                title: "Sociology",
                image: "../../public/Images/ub/ub4.jpeg",
                description: "Society In The Modern Era",
            },  
             {
                id: 4,
                title: "Politics",
                image: "../../public/Images/ub/ub2.jpeg",
                description: "Understanding Democracy",
            },  
             {
                id: 5,
                title: "Art",
                image: "../../public/Images/ub/ub1.jpeg",
                description: "Modern Art",
            },  
               {
                id: 6,
                title: "Phycology",
                image: "../../public/Images/ub/ub6.jpeg",
                description: "Phycology Concepts",
            },
            {
                id: 7,
                title: "Biology",
                image: "../../public/Images/ub/ub5.jpeg",
                description: "Modern Biology Interpretations",
            },  
             {
                id: 8,
                title: "Sociology",
                image: "../../public/Images/ub/ub4.jpeg",
                description: "Society In The Modern Era",
            },  
             {
                id: 9,
                title: "Politics",
                image: "../../public/Images/ub/ub2.jpeg",
                description: "Understanding Democracy",
            },  
             {
                id: 10,
                title: "Art",
                image: "../../public/Images/ub/ub1.jpeg",
                description: "Modern Art",
            },  
                   
        ])

        return{
            library,
        }
    }, 
    actions:{
        
    },
    persist: true,
})