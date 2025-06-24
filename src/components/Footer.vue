<template>
  <v-footer class="text-center d-flex flex-column ga-2 py-4" color="purple-darken-4">
    <div class="d-flex ga-3">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        density="comfortable"
        variant="text"
      ></v-btn>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>
 <div class="text-caption font-weight-regular opacity-60">
     © 2025 University of Excellence. All Rights Reserved. Located in the heart of Nairobi, we are committed to shaping future leaders through quality education, research, and innovation. Reach us at info@university.ac.ke or call +254 700 123 456. Follow us on Facebook, Twitter, Instagram, and LinkedIn to stay updated on events, opportunities, and campus life.


    </div>
    
    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Jitegemee</strong>
    </div>
  </v-footer>
</template>
<script setup>
  const icons = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
  ]
</script>