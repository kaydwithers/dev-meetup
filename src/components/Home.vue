<template lang="pug">
  .home
    v-container

      v-layout.mb-4(row wrap)
        v-flex.text-xs-center.text-sm-right(xs12 sm6)
          v-btn(info large router to='/meetups') Explore Meetups

        v-flex.text-xs-center.text-sm-left(xs12 sm6)
          v-btn(info large router to='/meetup/new') Organise Meetup

      v-layout.mb-4(row wrap)
        v-flex(xs12)
          v-carousel(icon='stop')
            v-carousel-item(
              @click='onLoadMeetup(meetup.id)' 
              v-for='meetup in meetups'
              :key='meetup.id'
              :src='meetup.imageUrl'
              transition='fade'
              reverseTransition='fade'
            )
              .title {{ meetup.title }}

      v-layout.mb-4(row wrap)
        v-flex.text-xs-center(xs12)
          p Join our awesome meetups.

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
