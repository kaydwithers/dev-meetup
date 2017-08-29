<template>
  <div class="home">
    <v-container>

      <v-layout row wrap class="mb-4">
        <v-flex xs12 sm6 class="text-xs-center text-sm-right">
          <v-btn info large router to="/meetups">Explore Meetups</v-btn>
        </v-flex>
        <v-flex xs12 sm6 class="text-xs-center text-sm-left">
          <v-btn info large router to="/meetup/new">Organise Meetup</v-btn>
        </v-flex>
      </v-layout>

      <v-layout row wrap class="mb-4">
        <v-flex xs12>
          <v-carousel icon="stop">
            <v-carousel-item
              @click="onLoadMeetup(meetup.id)" 
              v-for="meetup in meetups"
              :key="meetup.id"
              :src="meetup.imageUrl"
              transition="fade"
              reverseTransition="fade"
            >
              <div class="title">{{ meetup.title }}</div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>

      <v-layout row wrap class="mb-4">
        <v-flex xs12 class="text-xs-center">
          <p>Join our awesome meetups.</p>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    meetups () {
      return this.$store.getters.featuredMeetups
    }
  },
  methods: {
    onLoadMeetup (id) {
      this.$router.push('/meetups/' + id)
    }
  }
}
</script>

<style scoped>
  .title {
    bottom: 50px;
    background-color: rgba(0, 0, 0, .5);
    color: white;
    font-size: 2rem;
    padding: 20px;
    position: absolute;
  }
</style>
