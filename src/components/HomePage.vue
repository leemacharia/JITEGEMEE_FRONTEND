<script setup>

</script>

<template>
    <!--rotating images-->
    <v-carousel>
  <v-carousel-item
    src="../../public/Images/andrew-neel-2EJCSULUwRU-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../../public/Images/hakan-sundblad-00jE3sz9L4c-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../../public/Images/leon-wu-LLfRMRT-9AY-unsplash.jpg"
    cover
  ></v-carousel-item>
  <v-carousel-item
    src="../../public/Images/pang-yuhao-_kd5cxwZOK4-unsplash.jpg"
    cover
  ></v-carousel-item>
</v-carousel>
<!--Latest from jitegemee-->
<v-container>
    <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="Celebrating Milestones"
        text="Step into the spotlight! Graduation marks the end of one chapter and the bold beginning of another. Join us in honoring hard work, growth, and future dreams.

"
        title="Graduation"
        color = "orange"
      ></v-card>

     
    </v-col>

    <v-col cols="12" md="4">
      <v-card color = "orange">
        <template v-slot:title>
          Sports
        </template>

        <template v-slot:subtitle>
          Where Passion Meets Power
        </template>

        <template v-slot:text>
          From football to track, sports build more than just skills—they build character. Get active, stay fit, and unleash your competitive spirit!


        </template>
      </v-card>

     
    </v-col>

    <v-col cols="12" md="4">
      <v-card color = "orange">
        <v-card-item>
          <v-card-title>ICT Club</v-card-title>

          <v-card-subtitle>Code. Create. Innovate.</v-card-subtitle>
        </v-card-item>

        <v-card-text>
         The future is digital—be part of it. Learn to code, build apps, and explore the endless possibilities of technology in a fun, hands-on club.
        </v-card-text>
      </v-card>

     
    </v-col>
  </v-row>

</v-container>
<!-- Patners -->
<v-container>
    <v-row>
<v-col cols="12" md="2">
     <img src ="../../public/Images/airtel.png"></img>
    </v-col>

    <v-col cols="12" md="2">
     <img src ="../../public/Images/apple.png"></img>
    </v-col>

    <v-col cols="12" md="2">
     <img src ="../../public/Images/google.png"></img>
    </v-col>

    <v-col cols="12" md="2">
     <img src ="../../public/Images/nvidia.png"></img>
    </v-col>

    <v-col cols="12" md="2">
     <img src ="../../public/Images/safaricom.png"></img>
    </v-col>

    <v-col cols="12" md="2">
     <img src ="../../public/Images/tesla.png"></img>
    </v-col>

    </v-row>
</v-container>
</template>